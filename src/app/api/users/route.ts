import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/db";
import { getAuthUserFromHeaders } from "@/lib/getAuthUser";
import bcrypt from "bcryptjs";

export async function GET(request: NextRequest) {
    try {
        const authUser = getAuthUserFromHeaders(request);
        if (!authUser) {
            return NextResponse.json({ error: "usuario no autorizado" }, { status: 401 });

        }
        if (authUser.role !== 'ADMIN') {
            return NextResponse.json({ error: "NO tienes permisos" }, { status: 403 });
        }
        const users = await prisma.user.findMany({
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
            orderBy: {
                createdAt: "desc",
            },
        });

        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        console.log("GET Users Error:", error);
        return NextResponse.json({ error: "Error obteniendo usuarios" }, { status: 500 });
    }
}
export async function POST(request: NextRequest) {
    try {
        const authUser = getAuthUserFromHeaders(request);
        if (!authUser) {
            return NextResponse.json({ error: "No autorizado" }, { status: 401 });
        }
        if (authUser.role !== "ADMIN") {
            return NextResponse.json({ error: "No tienes permisos" }, { status: 403 });
        }
        const body = await request.json();
        const { name, email, password, role, phone, address, nit } = body;
        if (!name || !email || !password) {
            return NextResponse.json(
                { error: "Nombre, email y contraseña son requeridos" },
                { status: 400 }
            );
        }
        const existingUser = await prisma.user.findUnique({ where: { email } });

        if (existingUser) {
            return NextResponse.json(
                { error: "El email ya está registrado" },
                { status: 409 }
            );
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: role ?? "CUSTOMER",
                phone: phone || null,
                address: address || null,
                nit: nit || null,
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
        return NextResponse.json(newUser, { status: 201 });
    } catch (error) {
        console.log("POST Users Error:", error);
        return NextResponse.json({ error: "Error al crear usuario" }, { status: 500 })
    }
}