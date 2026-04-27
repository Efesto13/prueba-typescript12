import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, password, role, phone, address, nit, adminCode } = body;

        if (!name || !email || !password || !role) {
            return NextResponse.json(
                { message: "Todos los campos son requeridos" },
                { status: 400 }
            );
        }
        if (role === "ADMIN") {
            if (!adminCode) {
                return NextResponse.json(
                    { message: "Código de admin requerido" },
                    { status: 400 }
                );
            }
            if (adminCode !== process.env.ADMIN_SECRET_CODE) {
                return NextResponse.json(
                    { message: "Código de admin incorrecto" },
                    { status: 400 }
                );
            }
        }
        //Verificar si el email ya existe
        const existngUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existngUser) {
            return NextResponse.json(
                { message: "Email ya registrado" },
                { status: 409 }
            );
        }
        //Validar que el rol sea valido
        if (!["ADMIN", "DRIVER", "CUSTOMER", "COMPANY"].includes(role)) {
            return NextResponse.json(
                { message: "Rol invalido" },
                { status: 400 }
            );
        }
        // Hashear contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                phone: phone || null,
                address: address || null,
                nit: nit || null,
                password: hashedPassword,
                role,
            },
            select: {
                id: true,
                name: true,
                email: true,
                phone: true,
                address: true,
                nit: true,
                role: true,
                createdAt: true,
            },
        })
        return NextResponse.json(
            { message: "Usuario registrado exitosamente", user: newUser },
            { status: 201 }
        );

    } catch (error: unknown) {
        console.error("Register Error:", error);
        const message = error instanceof Error ? error.message : "Error inesperado";
        return NextResponse.json(
            { message, error: "Error al registrar el usuario" },
            { status: 500 }
        );
    }
}