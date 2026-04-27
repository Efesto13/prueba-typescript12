import { NextRequest } from "next/server";

type Role = "ADMIN" | "COMPANY" | "DRIVER" | "CUSTOMER";

interface AuthUser {
    id: number;
    role: Role;
}

export function getAuthUserFromHeaders(request: NextRequest): AuthUser | null {
    const id = request.headers.get('x-user-id');
    const role = request.headers.get('x-user-role') as Role | null;

    if (!id || !role) {
        return null;
    }
    return { id: Number(id), role: role as Role };
}