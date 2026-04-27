import { Role } from "@prisma/client";

export interface User {
    id: number;
    name: string;
    email: string;
    address?: string;
    phone?: string;
    nit?: string;
    password: string;
    role: Role;
    isActive: boolean;
    createdAt: string;
}