'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Aside } from '@/components/ui/Aside';
import { User } from '@/types/user';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/ui/Header';

type ShipmentStatus = 'PENDING' | 'PENDING_SUPERADMIN_REVIEW' | 'ASSIGNED' | 'IN_TRANSIT' | 'DELIVERED' | 'CANCELLED';

type Shipment = {
    id: number;
    cargoType: string;
    weight: number;
    dimensions: string | null;
    origin: string;
    destination: string;
    timeline: string;
    status: ShipmentStatus;
    sender: { id: number; name: string; email: string };
    driver: { id: number; name: string; email: string } | null;
    createdAt: string;
};

type Driver = {
    id: number;
    name: string;
    email: string;
    role: string;
    isActive: boolean;
};

function getInitials(name: string): string {
    if (!name) return '?';
    return name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2);
}

export default function DriverCommandCenter() {
    const router = useRouter();
    const [shipments, setShipments] = useState<Shipment[]>([]);
    const [drivers, setDrivers] = useState<Driver[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedShipment, setSelectedShipment] = useState<Shipment | null>(null);
    const [assigning, setAssigning] = useState(false);
    const [warning, setWarning] = useState<string | null>(null);
    const [userName, setUserName] = useState<string>('ADMIN');
    const [users, setUsers] = useState<User[]>([]);



    async function handleLogout() {
        try {
            await fetch('/api/auth/logout', { method: 'POST' });
        } catch (e) {
            console.error('Error cerrando sesión', e);
        } finally {
            localStorage.clear();
            router.push('/login');
        }
    }


    async function fetchData() {
        try {
            setLoading(true);
            const token = localStorage.getItem('accessToken');
            const storedUser = JSON.parse(localStorage.getItem('usuario-logueado') || '{}');

            const headers = { 'Authorization': `Bearer ${token}`, 'x-user-id': storedUser.id?.toString() || '', 'x-user-role': storedUser.role || '' };

            const [shipmentsRes, usersRes] = await Promise.all([
                fetch('/api/shipments', { headers }),
                fetch('/api/users', { headers }),
            ]);

            const shipmentsData = await shipmentsRes.json();
            const usersData = await usersRes.json();


            setShipments(shipmentsData.filter((s: Shipment) => s.status === 'PENDING' || s.status === 'PENDING_SUPERADMIN_REVIEW'));
            setDrivers(usersData.filter((u: Driver) => u.role === 'DRIVER' && u.isActive));
            setUsers(usersData);
        } catch {
            console.error('Error al cargar datos');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
        const storedUser = localStorage.getItem('usuario-logueado');
        if (storedUser) {
            try {
                const { name } = JSON.parse(storedUser);
                if (name) setUserName(name);
            } catch (e) {
                console.error("Error parsing stored user", e);
            }
        }
    }, []);


    async function handleAssign(driverId: number) {
        if (!selectedShipment) {
            setWarning('Select a shipment first before assigning a driver');
            setTimeout(() => setWarning(null), 3000);
            return;
        }

        setAssigning(true);
        try {
            const storedUser = JSON.parse(localStorage.getItem('usuario-logueado') || '{}');
            const token = localStorage.getItem('accessToken');
            const res = await fetch(`/api/shipments/${selectedShipment.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`, 'x-user-id': storedUser.id?.toString() || '', 'x-user-role': storedUser.role || ''
                },
                body: JSON.stringify({ driverId }),
            });

            if (!res.ok) throw new Error();

            setSelectedShipment(null);
            fetchData();
        } catch {
            console.error('Error al asignar driver');
        } finally {
            setAssigning(false);
        }
    }

    return (
        <div className="flex min-h-screen overflow-hidden" style={{ backgroundColor: '#131313', color: '#e2e2e2', fontFamily: "'Inter', sans-serif" }}>

            <Aside
                userName={userName}
                users={users}
                handleLogout={() => { handleLogout(); }}
            />

            {/* Main */}
            <main className="md:ml-64 flex-1 flex flex-col min-w-0 bg-[#131313] relative overflow-hidden">

                <Header />

                {/* Warning */}
                {warning && (
                    <div className="mx-6 mt-4 flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs rounded-lg px-4 py-3">
                        <span className="material-symbols-outlined text-[18px]">warning</span>
                        {warning}
                    </div>
                )}

                {/* Content */}
                <div className="flex-1 flex flex-col md:flex-row gap-6 p-6 overflow-hidden">

                    {/* Left: Unassigned Shipments */}
                    <div className="flex-1 flex flex-col gap-6 min-w-0">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-3xl font-black text-on-background tracking-tighter uppercase italic">
                                    Unassigned Shipments
                                </h2>
                                <p className="text-[#e2e2e2]/40 text-xs tracking-[0.2em] font-semibold uppercase mt-1">
                                    {loading ? '...' : `${shipments.length} Pending Rapid Deployment`}
                                </p>
                            </div>
                            <span className="bg-[#ffbf00]/10 text-[#ffbf00] px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase flex items-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#ffbf00] mr-2 animate-pulse"></span>
                                Priority: High
                            </span>
                        </div>

                        {/* Shipments Grid */}
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 overflow-y-auto pb-24 md:pb-6" style={{ scrollbarWidth: 'none' }}>

                            {/* Cargando */}
                            {loading && (
                                <div className="xl:col-span-2 flex items-center justify-center py-12 text-[#e2e2e2]/40">
                                    <span className="material-symbols-outlined animate-spin mr-2">progress_activity</span>
                                    Loading shipments...
                                </div>
                            )}

                            {/* Vacío */}
                            {!loading && shipments.length === 0 && (
                                <div className="xl:col-span-2 flex flex-col items-center justify-center py-12 text-[#e2e2e2]/40">
                                    <span className="material-symbols-outlined text-4xl mb-2">inventory_2</span>
                                    <p className="text-xs uppercase tracking-widest font-bold">No pending shipments</p>
                                </div>
                            )}

                            {/* Shipment Cards */}
                            {!loading && shipments.map((shipment) => (
                                <div
                                    key={shipment.id}
                                    onClick={() => setSelectedShipment(
                                        selectedShipment?.id === shipment.id ? null : shipment
                                    )}
                                    className={`group bg-[#1b1b1b] rounded-xl p-6 border transition-all duration-300 relative overflow-hidden cursor-pointer ${selectedShipment?.id === shipment.id
                                        ? 'border-[#ffbf00] shadow-[0_0_20px_rgba(255,191,0,0.15)]'
                                        : 'border-transparent hover:border-[#ffbf00]/20'
                                        }`}
                                >
                                    {selectedShipment?.id === shipment.id && (
                                        <div className="absolute top-3 right-3 w-5 h-5 bg-[#ffbf00] rounded-full flex items-center justify-center">
                                            <span className="material-symbols-outlined text-black text-[14px]">check</span>
                                        </div>
                                    )}
                                    <div className="flex flex-col h-full gap-4 relative z-10">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-[#353535] flex items-center justify-center">
                                                <span className={`material-symbols-outlined ${shipment.timeline === 'URGENT' ? 'text-[#ffbf00]' : 'text-[#e2e2e2]/60'}`}>
                                                    {shipment.timeline === 'URGENT' ? 'local_fire_department' : 'inventory'}
                                                </span>
                                            </div>
                                            <div>
                                                <h3 className="text-[#e2e2e2] font-bold tracking-tight">
                                                    SHP-{String(shipment.id).padStart(4, '0')}
                                                </h3>
                                                <p className={`text-[10px] font-black tracking-widest uppercase ${shipment.timeline === 'URGENT' ? 'text-[#ffbf00]' : 'text-[#e2e2e2]/40'}`}>
                                                    {shipment.timeline === 'URGENT' ? 'URGENT: 24H WINDOW' : 'STANDARD EXPEDITE'}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 mt-2">
                                            <div>
                                                <label className="text-[#e2e2e2]/30 text-[9px] font-bold tracking-widest uppercase">Origin</label>
                                                <p className="text-on-background font-semibold text-sm">{shipment.origin}</p>
                                            </div>
                                            <div>
                                                <label className="text-[#e2e2e2]/30 text-[9px] font-bold tracking-widest uppercase">Destination</label>
                                                <p className="text-on-background font-semibold text-sm">{shipment.destination}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/10">
                                            <div className="flex gap-4">
                                                <div>
                                                    <label className="text-[#e2e2e2]/30 text-[9px] font-bold tracking-widest uppercase block">Cargo</label>
                                                    <span className="text-on-background text-xs font-medium italic">{shipment.cargoType}</span>
                                                </div>
                                                <div>
                                                    <label className="text-[#e2e2e2]/30 text-[9px] font-bold tracking-widest uppercase block">Weight</label>
                                                    <span className="text-on-background text-xs font-medium">{shipment.weight} Tons</span>
                                                </div>
                                            </div>
                                            <div className={`h-10 px-4 rounded-lg font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 ${selectedShipment?.id === shipment.id
                                                ? 'bg-[#ffbf00] text-black'
                                                : 'bg-[#353535] text-[#ffbf00]'
                                                }`}>
                                                {selectedShipment?.id === shipment.id ? 'Selected' : 'Select'}
                                                <span className="material-symbols-outlined text-sm">chevron_right</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Active Drivers Panel */}
                    <aside className="w-full md:w-96 flex flex-col gap-6">
                        <div className="rounded-2xl p-6 h-full flex flex-col border border-outline-variant/10 shadow-2xl" style={{ background: 'rgba(53,53,53,0.6)', backdropFilter: 'blur(20px)' }}>
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h2 className="text-xl font-bold tracking-tight uppercase italic">Active Drivers</h2>
                                    <p className="text-[#e2e2e2]/40 text-[10px] font-black tracking-widest uppercase">
                                        {loading ? '...' : `${drivers.length} Available`}
                                    </p>
                                </div>
                                <div className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[#e2e2e2]/60">filter_list</span>
                                </div>
                            </div>

                            {/* Selected shipment indicator */}
                            {selectedShipment && (
                                <div className="mb-4 p-3 bg-[#ffbf00]/10 border border-[#ffbf00]/20 rounded-lg">
                                    <p className="text-[#ffbf00] text-[10px] font-black uppercase tracking-widest">Shipment Selected</p>
                                    <p className="text-[#e2e2e2] text-xs font-semibold mt-1">
                                        SHP-{String(selectedShipment.id).padStart(4, '0')} — {selectedShipment.origin} → {selectedShipment.destination}
                                    </p>
                                </div>
                            )}

                            <div className="flex-1 overflow-y-auto space-y-4 pr-1" style={{ scrollbarWidth: 'none' }}>

                                {/* Loading drivers */}
                                {loading && (
                                    <div className="flex items-center justify-center py-8 text-[#e2e2e2]/40">
                                        <span className="material-symbols-outlined animate-spin mr-2">progress_activity</span>
                                        Loading drivers...
                                    </div>
                                )}

                                {/* No drivers */}
                                {!loading && drivers.length === 0 && (
                                    <div className="flex flex-col items-center justify-center py-8 text-[#e2e2e2]/40">
                                        <span className="material-symbols-outlined text-4xl mb-2">person_off</span>
                                        <p className="text-[10px] uppercase tracking-widest font-bold">No active drivers</p>
                                    </div>
                                )}

                                {/* Driver Cards */}
                                {!loading && drivers.map((driver) => (
                                    <div key={driver.id} className="bg-[#131313] rounded-xl p-4 border border-outline-variant/10 hover:bg-[#353535]/40 transition-colors cursor-pointer group">
                                        <div className="flex items-center gap-4">
                                            <div className="relative">
                                                <div className="w-12 h-12 rounded-full bg-[#353535] flex items-center justify-center text-[#ffbf00] font-bold text-sm">
                                                    {getInitials(driver.name)}
                                                </div>
                                                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#131313] rounded-full"></span>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex justify-between items-center">
                                                    <h4 className="font-bold text-sm text-[#e2e2e2]">{driver.name}</h4>
                                                </div>
                                                <p className="text-[#e2e2e2]/40 text-[10px] font-bold uppercase tracking-widest mt-1">{driver.email}</p>
                                            </div>
                                        </div>
                                        <div className="mt-4 flex items-center justify-between pt-3 border-t border-outline-variant/5">
                                            <div>
                                                <p className="text-[#e2e2e2]/30 text-[9px] font-bold uppercase tracking-widest">Driver</p>
                                                <p className="text-on-background text-[11px] font-semibold italic">ID: #{String(driver.id).padStart(4, '0')}</p>
                                            </div>
                                            <button
                                                onClick={() => handleAssign(driver.id)}
                                                disabled={assigning}
                                                className="h-8 px-4 bg-[#ffbf00] text-black text-[9px] font-black uppercase tracking-widest rounded-lg active:scale-95 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {assigning ? '...' : 'Assign'}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}