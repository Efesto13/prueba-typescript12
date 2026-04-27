import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { getAuthUserFromHeaders } from "@/lib/getAuthUser";


// GET - Listar envíos según rol
export async function GET(request: NextRequest) {
    try {

        const authUser = getAuthUserFromHeaders(request);

        if (!authUser) {
            return NextResponse.json({ error: "No autorizado" }, { status: 401 });
        }

        let shipments;

        if (authUser.role === "ADMIN") {
            // Admin ve todos los envíos
            shipments = await prisma.shipment.findMany({
                include: {
                    sender: {
                        select: { id: true, name: true, email: true },
                    },
                    driver: {
                        select: { id: true, name: true, email: true },
                    },
                },
                orderBy: { createdAt: "desc" },
            });
        } else if (authUser.role === "DRIVER") {
            // Driver solo ve sus envíos asignados
            shipments = await prisma.shipment.findMany({
                where: { driverId: authUser.id },
                include: {
                    sender: {
                        select: { id: true, name: true, email: true },
                    },
                },
                orderBy: { createdAt: "desc" },
            });
        } else {
            // CUSTOMER o COMPANY solo ven sus propios envíos (como remitentes)
            shipments = await prisma.shipment.findMany({
                where: { senderId: authUser.id },
                include: {
                    driver: {
                        select: { id: true, name: true, email: true },
                    },
                },
                orderBy: { createdAt: "desc" },
            });
        }


        return NextResponse.json(shipments, { status: 200 });
    } catch (error) {
        console.error("GET Shipments Error:", error);
        return NextResponse.json(
            { error: "Error al obtener los envíos" },
            { status: 500 }
        );
    }
}

// POST - Crear envío (solo Customer o Company)
export async function POST(request: NextRequest) {
    try {
        const authUser = getAuthUserFromHeaders(request);

        if (!authUser) {
            return NextResponse.json({ error: "No autorizado" }, { status: 401 });
        }

        if (authUser.role !== "CUSTOMER" && authUser.role !== "COMPANY") {
            return NextResponse.json(
                { error: "Solo los clientes o empresas pueden crear envíos" },
                { status: 403 }
            );
        }

        const body = await request.json();
        const { cargoType, weight, dimensions, origin, destination, timeline } = body;

        if (!cargoType || !weight || !origin || !destination || !timeline) {
            return NextResponse.json(
                { error: "Todos los campos requeridos deben estar completos" },
                { status: 400 }
            );
        }

        const newShipment = await prisma.shipment.create({
            data: {
                cargoType,
                weight: Number(weight),
                dimensions: dimensions ?? null,
                origin,
                destination,
                timeline,
                senderId: authUser.id,
            },
            include: {
                sender: {
                    select: { id: true, name: true, email: true },
                },
            },
        });

        return NextResponse.json(newShipment, { status: 201 });
    } catch (error) {
        console.error("POST Shipment Error:", error);
        return NextResponse.json(
            { error: "Error al crear el envío" },
            { status: 500 }
        );
    }
}