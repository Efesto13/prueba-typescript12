import { NextResponse } from "next/server";

export async function POST() {
    const res = NextResponse.json({ message: "Sesión cerrada" });

    res.cookies.set("refreshToken", "", {
        httpOnly: true,
        path: "/",
        expires: new Date(0)
    });

    // Agregar esta:
    res.cookies.set("accessToken", "", {
        httpOnly: true,
        path: "/",
        expires: new Date(0)
    });

    return res;
}