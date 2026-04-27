import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { getAuthUserFromHeaders } from "@/lib/getAuthUser";

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }
) {
    try {
        const authUser = await getAuthUserFromHeaders(request);
        if (!authUser)
            return NextResponse.json({ error: "No autorizado" }, { status: 401 });
        if (authUser.role !== "ADMIN") {
            return NextResponse.json({ error: "No tienes permisos" }, { status: 403 });
        }
        const { id: idParam } = await params;
        const id = parseInt(idParam);
        if (!Number.isInteger(id) || id <= 0) {
            return NextResponse.json({ error: "ID inválido" }, { status: 400 });
        }
        const body = await request.json();
        const { name, email, role, isActive, phone, address, nit } = body;

        const existingUser = await prisma.user.findUnique({ where: { id } });
        if (!existingUser) {
            return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 })
        }
        if (email && email !== existingUser.email) {
            const emailInUse = await prisma.user.findUnique({ where: { email } });
            if (emailInUse) {
                return NextResponse.json(
                    { error: "El email ya está registrado" },
                    { status: 409 }
                );
            }
        }
        const updatedUser = await prisma.user.update({
            where: { id },
            data: {
                ...(name && { name }),
                ...(email && { email }),
                ...(role && { role }),
                ...(isActive !== undefined && { isActive }),
                ...(phone !== undefined && { phone: phone || null }),
                ...(address !== undefined && { address: address || null }),
                ...(nit !== undefined && { nit: nit || null }),
            },
            select: {
                id: true,
                name: true,
                email: true,
                phone: true,
                address: true,
                nit: true,
                role: true,
                isActive: true,
                createdAt: true,
            },
        });
        return NextResponse.json(updatedUser, { status: 200 })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Error al actualizar usuario" }, { status: 500 });
    }
}
