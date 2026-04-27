'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import Link from 'next/link';

export default function RegisterForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [role, setRole] = useState('CUSTOMER');
    const [nit, setNit] = useState('');
    const [adminCode, setAdminCode] = useState('')
    const router = useRouter();

    async function handleSubmit(e: React.FormEvent) {

        try {
            e.preventDefault();
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, phone, password, address, role, nit, adminCode }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "error");
            }

            await Swal.fire({
                title: '¡Registro Exitoso!',
                text: 'Tu cuenta ha sido creada.',
                icon: 'success',
                timer: 2000,
                showConfirmButton: false,
            });

            localStorage.setItem("usuario-registrado", JSON.stringify({ email }));
            router.push('/login');

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
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
            <h2 className="text-xl font-semibold text-white/90 text-center mb-2">Crea tu cuenta</h2>

            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Nombre completo</label>
                <input
                    type="text"
                    placeholder="Pepito Perez"
                    className="w-full bg-white/5 border border-white/10 p-3 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Correo Electrónico</label>
                <input
                    type="email"
                    placeholder="ejemplo@correo.com"
                    className="w-full bg-white/5 border border-white/10 p-3 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Telefono</label>
                <input
                    type="text"
                    placeholder="3333333333"
                    className="w-full bg-white/5 border border-white/10 p-3 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Dirección</label>
                <input
                    type="text"
                    placeholder="direccion"
                    className="w-full bg-white/5 border border-white/10 p-3 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                />
            </div>
            <select
                name="role"
                id="role"
                className='w-full bg-white/5 border border-white/10 p-3 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all'
                value={role}
                onChange={e => setRole(e.target.value)}
            >
                <option value="CUSTOMER" className='bg-gray-900'>Cliente</option>
                <option value="COMPANY" className='bg-gray-900'>Empresa</option>
                <option value="DRIVER" className='bg-gray-900'>Conductor</option>
                <option value="ADMIN" className='bg-gray-900'>Administrador</option>
            </select>

            {role === 'ADMIN' && (
                <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                    <label className="text-sm font-medium text-amber-400 ml-1">Código de Administrador</label>
                    <input
                        type="text"
                        placeholder="Ingrese el código secreto"
                        className="w-full bg-amber-400/5 border border-amber-400/20 p-3 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all"
                        value={adminCode}
                        onChange={e => setAdminCode(e.target.value)}
                        required
                    />
                </div>
            )}
            {role === 'COMPANY' && (
                <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                    <label className="text-sm font-medium text-amber-400 ml-1">NIT de la empresa</label>
                    <input
                        type="text"
                        placeholder="nit"
                        className="w-full bg-white/5 border border-white/10 p-3 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                        value={nit}
                        onChange={e => setNit(e.target.value)}
                    />
                </div>
            )}


            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Contraseña</label>
                <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full bg-white/5 border border-white/10 p-3 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98] mt-2"
            >
                Registrar Cuenta
            </button>

            <div className="text-center mt-2">
                <p className="text-sm text-gray-500">
                    ¿Ya tienes cuenta?{" "}
                    <Link href="/login" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                        Inicia sesión aquí
                    </Link>
                </p>
            </div>
        </form>
    );
}