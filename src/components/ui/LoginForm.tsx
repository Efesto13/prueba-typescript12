'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import Link from 'next/link';

export default function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    async function handleSubmit(e: React.FormEvent) {

        try {
            e.preventDefault();
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "error");
            }
            await Swal.fire({
                title: `Bienvenid@ ${email}!`,
                text: 'Sesión iniciada correctamente.',
                icon: 'success',
                timer: 2000,
                showConfirmButton: false,
            });
            localStorage.setItem("accessToken", data.accessToken)
            localStorage.setItem("usuario-logueado", JSON.stringify({ 
                email: data.user.email, 
                name: data.user.name 
            }));
            //redirigir segun el rol
            const role = data.user.role;
            if (role === "ADMIN") {
                router.push('/masterAdmin');
            } else if (role === "COMPANY") {
                router.push('/company');
            } else if (role === "DRIVER") {
                router.push('/driver');
            } else if (role === "CUSTOMER") {
                router.push('/customer');
            }
            //router.push('/dasboard');

        } catch (err: unknown) {
            const errorMessage = err instanceof Error ? err.message : "Ocurrió un problema";
            Swal.fire({
                title: 'Error',
                text: errorMessage,
                icon: 'error',
                confirmButtonText: 'Reintentar',
            });
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full text-start">
            <h2 className="text-2xl font-black tracking-tighter text-[#fbbc00]">TRUX LOGISTICA</h2>
            <p className="text-on-surface-variant font-medium tracking-wide text-sm uppercase opacity-70">Enter credentials to initialize your session</p>            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Correo Electrónico</label>
                <input
                    type="email"
                    placeholder="ejemplo@correo.com"
                    className="w-full bg-transparent border-b border-gra p-3 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Contraseña</label>
                <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full bg-transparent border-b border-gray p-3 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <button className="w-full py-5 rounded-xl text-[#402d00] mt-5 font-bold uppercase tracking-widest text-sm bg-[linear-gradient(135deg,_#ffe2ab_0%,_#ffbf00_100%)] shadow-[0_0_20px_rgba(255,191,0,0.3)] transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2" type="submit">
                Iniciar Sesión
                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'wght' 700" }}>arrow_forward</span>
            </button>

            <div className="text-center mt-2">
                <p className="text-sm text-gray-500">
                    ¿No tienes cuenta?{" "}
                    <Link href="/register" className="text-[#fbbc00] hover:text-[#e3ab14] font-medium transition-colors">
                        Regístrate aquí
                    </Link>
                </p>
            </div>
        </form>
    );
}