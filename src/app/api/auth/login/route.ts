import { LoginUser } from "@/services/loginUser";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();
        if (!email || !password) {
            return NextResponse.json(
                { message: "Campos requeridos" },
                { status: 400 }
            );
        }
        const user = await LoginUser({ email, password });


        const res = NextResponse.json({
            message: "Login correcto",
            user: user.user,
            accessToken: user.accessToken
        });

        res.cookies.set("refreshToken", user.refreshToken, {
            httpOnly: true,
            path: "/",
            maxAge: 60 * 60 * 24 * 7
        });
        res.cookies.set("accessToken", user.accessToken, {
            httpOnly: true,
            path: "/",
            maxAge: 60 * 60 * 60,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
        });

        return res;

    } catch (error: unknown) {

        const message = error instanceof Error ? error.message : "Error inesperado";

        return NextResponse.json(
            { message },
            { status: 401 }
        );
    }
}