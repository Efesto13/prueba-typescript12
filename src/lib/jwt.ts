import { SignJWT, jwtVerify, type JWTPayload as JosePayload } from 'jose';

interface JWTPayload extends JosePayload {
    id: number;
    email: string;
    role: 'ADMIN' | 'COMPANY' | 'DRIVER' | 'CUSTOMER';
}

const accessToken = new TextEncoder().encode(process.env.JWT_ACCESS_SECRET);
const refreshToken = new TextEncoder().encode(process.env.JWT_REFRESH_SECRET);

export async function generateAccessToken(payload: JWTPayload) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('15m')
        .sign(accessToken);
}

export async function generateRefreshToken(payload: JWTPayload) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(refreshToken);
}

export async function validateAccessToken(token: string) {
    try {
        const { payload } = await jwtVerify(token, accessToken);
        return payload as unknown as JWTPayload;
    } catch (error: unknown) {
        return null;
    }
}

export async function validateRefreshToken(token: string) {
    try {
        const { payload } = await jwtVerify(token, refreshToken);
        return payload as unknown as JWTPayload;
    } catch (error: unknown) {
        return null;
    }
}
