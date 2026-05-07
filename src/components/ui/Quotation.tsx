"use client"
import { Aside } from "./Aside"
import { useRouter } from "next/navigation"
import { User } from '@/types/user';
import { useState, useEffect } from "react";
import { Header } from "./Header";

export default function Quotation() {
    const router = useRouter()
    const [userName, setUserName] = useState<string>('ADMIN')
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        const storedUser = localStorage.getItem('usuario-logueado')
        if (storedUser) {
            try {
                const { name } = JSON.parse(storedUser)
                if (name) setUserName(name)
            } catch (e) {
                console.error("Error parsing stored user", e)
            }
        }

        async function fetchUsers() {
            try {
                const res = await fetch('/api/users')
                const data = await res.json()
                setUsers(data)
            } catch (e) {
                console.error("Error fetching users", e)
            }
        }
        fetchUsers()
    }, [])

    async function handleLogout() {
        try {
            await fetch('/api/auth/logout', { method: 'POST' })
        } catch (e) {
            console.error('Error cerrando sesión', e)
        } finally {
            localStorage.clear()
            router.push('/login')
        }
    }

    return (
        <div className="font-body selection:bg-primary-container selection:text-on-primary">
            <Aside userName={userName} users={users} handleLogout={handleLogout} />

            <main className="flex-1 ml-64 min-h-screen relative overflow-y-auto">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.15] pointer-events-none grayscale brightness-50">
                    <img alt="Route Visualization" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2z-xUSChu2yMLNQRtapw6AOal2s1QKdEDVzZayFd8uTnmOOWM2RJ72az27_yObS-friDgCZLconsiVRqVDJHxp-YA2uIKzyosYH6c_f5DGFyyJAFqWJSCe9LgjG1_XXPVfq_MHYPhLD-UHDgYPfDoBHPb9XEkNYLkNC8V7nlku28DUonsCKEAUKX8R2OlpDtBkr6DOIEe7TX0GShuXCULRU6VUuP0HuL587JmlR9OAiVFrV7D4kjBRdr4wRl5k2gAHnsi2Zvnrfh4" />
                </div>

                {/* Header Stats */}
                <Header />

                <div className="p-12 max-w-7xl mx-auto relative z-10">
                    {/* Hero Title Section */}
                    <div className="flex justify-between items-end mb-16">
                        <div className="max-w-2xl">
                            <h2 className="text-[50px] font-black italic tracking-tighter uppercase leading-[0.85] mb-6 text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                                Confirm Shipment Quote
                            </h2>
                            <div className="flex items-center gap-6">
                                <span className="px-3 py-1 bg-[#ffbf00] text-black text-[10px] font-black uppercase tracking-[0.2em]">
                                    Valid for 24h
                                </span>
                                <span className="text-[#e2e2e2]/40 font-bold uppercase text-[10px] tracking-[0.3em]">
                                    Awaiting Client Validation
                                </span>
                            </div>
                        </div>
                        <div className="text-right pb-2">
                            <p className="text-[#e2e2e2]/20 uppercase text-[9px] tracking-[0.4em] font-black mb-3">Status</p>
                            <div className="flex flex-col items-end">
                                <div className="flex items-center gap-3 text-[#ffbf00]">
                                    <span className="w-2 h-2 rounded-full bg-[#ffbf00] animate-pulse shadow-[0_0_10px_#ffbf00]"></span>
                                    <span className="font-black tracking-[0.25em] text-xs">PENDING PAYMENT</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Selectable Shipment Items */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {[1].map((id) => (
                            <div key={id} className="bg-[#1b1b1b] p-10 border-l-[3px] border-[#ffbf00] relative overflow-hidden group hover:bg-[#222222] transition-colors duration-500 cursor-pointer">
                                <div className="absolute top-0 right-0 w-32 h-30 bg-[#ffbf00]/5 blur-3xl rounded-full -mr-16 -mt-16"></div>
                                <p className="text-[#e2e2e2]/30 uppercase text-[9px] tracking-[0.4em] font-black mb-8">Shipment Unit ID-00{id}</p>
                                <div className="flex items-baseline gap-1 mb-10">
                                    <span className="text-4xl font-black tracking-tighter text-white">$2,840.</span>
                                    <span className="text-2xl font-black text-[#e2e2e2]/20">00</span>
                                </div>
                                <div className="space-y-5 border-t border-white/5 pt-8">
                                    <div className="flex justify-between text-[11px] tracking-[0.2em] uppercase">
                                        <span className="text-[#e2e2e2]/30 font-bold">Line Haul</span>
                                        <span className="font-black text-[#e2e2e2]">$2,150.00</span>
                                    </div>
                                    <div className="flex justify-between text-[11px] tracking-[0.2em] uppercase">
                                        <span className="text-[#e2e2e2]/30 font-bold">Fuel Surcharge</span>
                                        <span className="font-black text-[#e2e2e2]">$485.00</span>
                                    </div>
                                    <div className="flex justify-between text-[11px] tracking-[0.2em] uppercase">
                                        <span className="text-[#e2e2e2]/30 font-bold">Hazmat Fee</span>
                                        <span className="font-black text-[#ffbf00] animate-pulse-subtle">$205.00</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Action Bar */}
                    <div className="flex items-center justify-between pt-16 border-t border-white/5">
                        <div className="flex items-center gap-6 max-w-xl">
                            <span className="material-symbols-outlined text-[#e2e2e2]/20 text-3xl">shield</span>
                            <p className="text-[10px] text-[#e2e2e2]/30 font-bold uppercase tracking-[0.2em] leading-loose">
                                By accepting this quote, you agree to the <span className="text-[#e2e2e2]/60">TRUX Terms of Carriage</span> and Hazmat protocols. Final price includes all mandatory surcharges and operational fees.
                            </p>
                        </div>
                        <div className="flex gap-6">
                            <button className="px-12 py-6 bg-transparent text-[#e2e2e2]/40 font-black uppercase tracking-[0.3em] text-[10px] border border-white/10 hover:bg-white/5 hover:text-white transition-all">
                                CANCELED
                            </button>
                            <button className="px-16 py-6 bg-[#ffbf00] text-black font-black uppercase tracking-[0.4em] text-[10px] shadow-[0_0_30px_rgba(255,191,0,0.3)] hover:shadow-[0_0_50px_rgba(255,191,0,0.5)] hover:bg-white transition-all transform active:scale-95">
                                Accept &amp; Proceed
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer System Stats */}
                <footer className="mt-20 border-t border-white/5 bg-black/40 backdrop-blur-xl py-12 px-12 flex justify-between items-center relative z-20">
                    <div className="flex gap-20">
                        <div>
                            <p className="text-[9px] text-[#e2e2e2]/20 font-black uppercase tracking-[0.4em] mb-3">Network Status</p>
                            <div className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]"></span>
                                <span className="text-[10px] text-[#e2e2e2]/80 font-black tracking-[0.3em] uppercase">Kinetic Optimal</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-[9px] text-[#e2e2e2]/20 font-black uppercase tracking-[0.4em] mb-3">Freight Index</p>
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] text-[#e2e2e2] font-black tracking-[0.2em]">3,124.50</span>
                                <span className="text-[10px] text-green-500 font-black">+1.2%</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-[9px] text-[#e2e2e2]/20 font-black uppercase tracking-[0.4em] mb-3">Active Nodes</p>
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] text-[#e2e2e2] font-black tracking-[0.2em]">1,482 LIVE</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-[9px] text-[#e2e2e2]/10 font-black tracking-[0.6em] uppercase">
                        © 2024 TRUX Logistics Infrastructure
                    </div>
                </footer>
            </main>
        </div>
    )
}
