import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { getAuthUserFromHeaders } from "@/lib/getAuthUser";

export async function PATCH(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const authUser = getAuthUserFromHeaders(request);

        if (!authUser) {
            return NextResponse.json({ error: "No autorizado" }, { status: 401 });
        }

        const { id: idParam } = await params;
        const id = Number(idParam);

        if (!Number.isInteger(id) || id <= 0) {
            return NextResponse.json({ error: "ID inválido" }, { status: 400 });
        }

        const existingShipment = await prisma.shipment.findUnique({
            where: { id },
        });

        if (!existingShipment) {
            return NextResponse.json({ error: "Envío no encontrado" }, { status: 404 });
        }

        const body = await request.json();
        const { driverId, status } = body;

        // Admin puede asignar driver y cambiar estado
        if (authUser.role === "ADMIN") {
            const updatedShipment = await prisma.shipment.update({
                where: { id },
                data: {
                    ...(driverId && { driverId, status: "ASSIGNED" }),
                    ...(status && { status }),
                },
                include: {
                    sender: { select: { id: true, name: true, email: true } },
                    driver: { select: { id: true, name: true, email: true } },
                },
            });
            return NextResponse.json(updatedShipment, { status: 200 });
        }

        // Driver solo puede actualizar el estado de sus envíos
        if (authUser.role === "DRIVER") {
            if (existingShipment.driverId !== authUser.id) {
                return NextResponse.json(
                    { error: "No tienes permisos para actualizar este envío" },
                    { status: 403 }
                );
            }

            const allowedStatuses = ["IN_TRANSIT", "DELIVERED"];
            if (!allowedStatuses.includes(status)) {
                return NextResponse.json(
                    { error: "Estado no permitido" },
                    { status: 400 }
                );
            }

            const updatedShipment = await prisma.shipment.update({
                where: { id },
                data: { status },
                include: {
                    sender: { select: { id: true, name: true, email: true } },
                },
            });
            return NextResponse.json(updatedShipment, { status: 200 });
        }

        return NextResponse.json({ error: "No tienes permisos" }, { status: 403 });
    } catch (error) {
        console.error("PATCH Shipment Error:", error);
        return NextResponse.json(
            { error: "Error al actualizar el envío" },
            { status: 500 }
        );
    }
}