import { NextRequest, NextResponse } from 'next/server';
import { validateAccessToken } from './lib/jwt';

const PUBLIC_PAGE = ['/login', '/register'];
const PROTECTED_PAGE = [
    '/masterAdmin',
    '/company',
    '/customer',
    '/driver',
    '/shipments'
]

export async function proxy(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const method = req.method;

    //PROTECCION DE PAGINAS (frontend)
    const isProtectedPage = PROTECTED_PAGE.some(p => pathname.startsWith(p));
    const isPublicPage = PUBLIC_PAGE.some(p => pathname.startsWith(p));

    if (isProtectedPage || isPublicPage) {
        //las paginas usan cookie, no header Authorization
        const token = req.cookies.get('accessToken')?.value;
        const user = token ? await validateAccessToken(token) : null;

        if (isProtectedPage && !user) {
            // Sin sesión → redirige al login
            return NextResponse.redirect(new URL('/login', req.url));
        }

        if (isPublicPage && user) {
            // Con sesión → redirige a masterAdmin
            return NextResponse.redirect(new URL('/masterAdmin', req.url));
        }
        return NextResponse.next();
    }
    //PROTECCION DE API 

    const authHeader = req.headers.get('authorization');
    let token = authHeader?.split(' ')[1];

    if (!token) {
        token = req.cookies.get('accessToken')?.value;
    }

    if (!token) {
        return NextResponse.json({ message: 'No autorizado' }, { status: 401 });
    }

    const user = await validateAccessToken(token);
    if (!user) {
        return NextResponse.json({ message: 'Sesión expirada' }, { status: 401 });
    }

    const isWriteAction = ['POST', 'PUT', 'DELETE'].includes(method);

    if (pathname.startsWith('/api/agents')) {
        if (isWriteAction && user.role !== 'ADMIN') {
            return NextResponse.json({ message: 'Acceso restringido a administradores' }, { status: 403 });
        }
    }

    const requestHeaders = new Headers(req.headers);
    requestHeaders.set('x-user-id', user.id.toString());
    requestHeaders.set('x-user-role', user.role);

    return NextResponse.next({
        request: { headers: requestHeaders },
    });
}

export const config = {
    matcher: [
        '/masterAdmin/:path*', // Protege masterAdmin y sus hijos
        '/masterAdmin',        // Protege la ruta base
        '/company/:path*',     // Si quieres proteger estas también
        '/customer/:path*',
        '/driver/:path*',
        '/login',
        '/register',
        '/api/agents/:path*',
        '/api/agents',         // <--- Importante agregar la base
        '/api/admin/:path*',
        '/api/users/:path*',
        '/api/users',
        '/api/shipments/:path*',
        '/api/shipments',
    ],
};
