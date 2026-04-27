'use client';
import { useEffect, useState } from 'react';
import ShipmentModal from '@/components/shipments/shipmentsModal';

type ShipmentStatus = 'PENDING' | 'ASSIGNED' | 'IN_TRANSIT' | 'DELIVERED' | 'CANCELLED';

type Shipment = {
    id: number;
    cargoType: string;
    weight: number;
    origin: string;
    destination: string;
    timeline: string;
    status: ShipmentStatus;
    driver: { id: number; name: string; email: string } | null;
    createdAt: string;
};

function formatDate(date: string): string {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
}

function StatusBadge({ status }: { status: ShipmentStatus }) {
    const styles: Record<ShipmentStatus, string> = {
        PENDING: 'text-amber-400',
        ASSIGNED: 'text-blue-400',
        IN_TRANSIT: 'text-[#ffbf00]',
        DELIVERED: 'text-green-400',
        CANCELLED: 'text-red-400',
    };
    return (
        <span className={`text-[10px] font-black uppercase tracking-widest ${styles[status]}`}>
            {status.replace('_', ' ')}
        </span>
    );
}

export default function Company() {
    const [shipments, setShipments] = useState<Shipment[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    async function fetchShipments() {
        try {
            setLoading(true);
            const token = localStorage.getItem('accessToken');
            const res = await fetch('/api/shipments', {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (!res.ok) throw new Error();
            const data = await res.json();
            setShipments(data);
        } catch {
            console.error('Error loading shipments');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchShipments();
    }, []);

    const activeShipments = shipments.filter(s => ['PENDING', 'ASSIGNED', 'IN_TRANSIT'].includes(s.status));
    const inTransit = shipments.filter(s => s.status === 'IN_TRANSIT');

    return (
        <div className="overflow-x-hidden" style={{ backgroundColor: '#131313', color: '#e2e2e2', fontFamily: "'Inter', sans-serif" }}>

            {/* Side Navigation */}
            <aside className="h-screen w-72 fixed left-0 top-0 border-r border-[#504532]/15 bg-[#1b1b1b] flex flex-col py-8 z-50 shadow-[0_0_20px_rgba(255,191,0,0.05)]">
                <div className="px-8 mb-10">
                    <h1 className="text-3xl font-black italic text-[#ffbf00] tracking-tighter">TRUX</h1>
                    <p className="font-['Inter'] text-[10px] tracking-[0.2em] uppercase opacity-50 mt-1">Precision Logistics</p>
                </div>
                <nav className="flex-1 space-y-1">
                    <a className="bg-[#353535] text-[#ffbf00] border-r-4 border-[#ffbf00] flex items-center gap-4 px-8 py-4 transition-all" href="#">
                        <span className="material-symbols-outlined">dashboard</span>
                        <span className="font-['Inter'] text-sm tracking-[0.05em] uppercase font-bold">Dashboard</span>
                    </a>
                    <a className="text-[#e2e2e2] opacity-60 flex items-center gap-4 px-8 py-4 hover:bg-[#353535] hover:text-[#ffbf00] transition-all hover:translate-x-1" href="#">
                        <span className="material-symbols-outlined">local_shipping</span>
                        <span className="font-['Inter'] text-sm tracking-[0.05em] uppercase">My Shipments</span>
                    </a>
                    <a className="text-[#e2e2e2] opacity-60 flex items-center gap-4 px-8 py-4 hover:bg-[#353535] hover:text-[#ffbf00] transition-all hover:translate-x-1" href="#">
                        <span className="material-symbols-outlined">receipt_long</span>
                        <span className="font-['Inter'] text-sm tracking-[0.05em] uppercase">Billing</span>
                    </a>
                    <a className="text-[#e2e2e2] opacity-60 flex items-center gap-4 px-8 py-4 hover:bg-[#353535] hover:text-[#ffbf00] transition-all hover:translate-x-1" href="#">
                        <span className="material-symbols-outlined">contact_support</span>
                        <span className="font-['Inter'] text-sm tracking-[0.05em] uppercase">Support</span>
                    </a>
                </nav>
                <div className="px-6 mt-auto">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="w-full py-4 bg-[#ffbf00] text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_12px_rgba(255,191,0,0.3)] transition-all active:scale-95"
                    >
                        <span className="material-symbols-outlined">add</span>
                        <span className="uppercase tracking-widest text-xs">New Request</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="ml-72 min-h-screen">

                {/* Header */}
                <header className="bg-[#131313] text-[#ffbf00] font-['Inter'] uppercase tracking-[0.05em] text-sm font-bold border-b border-[#504532]/15 flex justify-between items-center w-full px-8 h-16 sticky top-0 z-40">
                    <div className="flex items-center gap-4">
                        <span className="opacity-50">Portal</span>
                        <span className="material-symbols-outlined text-[10px] opacity-30">arrow_forward_ios</span>
                        <span className="text-on-surface">Client Overview</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <span className="material-symbols-outlined text-[#e2e2e2] opacity-70 hover:text-[#ffbf00] cursor-pointer transition-colors">notifications</span>
                        <span className="material-symbols-outlined text-[#e2e2e2] opacity-70 hover:text-[#ffbf00] cursor-pointer transition-colors">settings</span>
                    </div>
                </header>

                <div className="p-10 space-y-12 max-w-7xl mx-auto">

                    {/* Welcome Section */}
                    <section className="flex flex-col md:flex-row justify-between items-end gap-8">
                        <div>
                            <h2 className="text-4xl font-black text-on-surface tracking-tight mb-2">Welcome Company</h2>
                            <p className="text-on-surface-variant font-medium tracking-wide uppercase text-xs opacity-80">Logistics Command Center • Real-time Operations</p>
                        </div>
                        <div className="flex gap-10 border-l border-outline-variant/20 pl-10">
                            <div>
                                <p className="font-['Inter'] text-[10px] tracking-[0.1em] uppercase text-outline mb-1">Active Shipments</p>
                                <p className="text-3xl font-black text-[#ffbf00] tracking-tighter">
                                    {loading ? '...' : activeShipments.length}
                                </p>
                            </div>
                            <div>
                                <p className="font-['Inter'] text-[10px] tracking-[0.1em] uppercase text-outline mb-1">In Transit</p>
                                <p className="text-3xl font-black text-on-surface tracking-tighter">
                                    {loading ? '...' : inTransit.length}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Quick Actions */}
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div
                            onClick={() => setIsModalOpen(true)}
                            className="group col-span-1 lg:col-span-2 bg-[#ffbf00] p-8 rounded-xl relative overflow-hidden cursor-pointer active:scale-[0.98] transition-transform"
                        >
                            <div className="relative z-10">
                                <span className="material-symbols-outlined text-black text-4xl mb-4 block">local_shipping</span>
                                <h3 className="text-2xl font-black text-black tracking-tighter leading-tight">
                                    START NEW LOAD<br />REQUEST
                                </h3>
                                <p className="text-black/70 mt-2 font-medium text-sm">Calculate rates and book instant logistics capacity.</p>
                            </div>
                            <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-[180px] text-black opacity-10 group-hover:rotate-12 transition-transform duration-700">
                                rocket_launch
                            </span>
                        </div>
                        <div className="group bg-[#1b1b1b] p-8 rounded-xl cursor-pointer hover:bg-surface-container-highest transition-colors active:scale-[0.98]">
                            <span className="material-symbols-outlined text-[#ffbf00] text-4xl mb-4 block">support_agent</span>
                            <h3 className="text-2xl font-black text-on-surface tracking-tighter leading-tight">
                                CONTACT<br />PRIORITY SUPPORT
                            </h3>
                            <p className="text-on-surface-variant mt-2 font-medium text-sm">Connect with your dedicated account manager.</p>
                        </div>
                    </section>

                    {/* Active Telemetry - In Transit Shipments */}
                    {inTransit.length > 0 && (
                        <section>
                            <div className="flex justify-between items-center mb-6">
                                <h4 className="font-['Inter'] text-[11px] tracking-[0.2em] uppercase font-bold text-outline">Active Telemetry</h4>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {inTransit.slice(0, 2).map((shipment) => (
                                    <div key={shipment.id} className="bg-[#1b1b1b] rounded-xl p-6 cursor-pointer hover:shadow-[0_0_30px_rgba(255,191,0,0.03)] transition-shadow">
                                        <div className="flex justify-between items-start mb-6">
                                            <div>
                                                <span className="bg-[#ffbf00]/10 text-[#ffbf00] text-[10px] font-black px-2 py-1 rounded uppercase tracking-tighter mb-2 inline-block">
                                                    In Transit
                                                </span>
                                                <p className="text-on-surface font-black text-lg tracking-tight">
                                                    SHP-{String(shipment.id).padStart(4, '0')}
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-[10px] text-outline uppercase font-bold">Driver</p>
                                                <p className="text-on-surface font-bold text-sm">{shipment.driver?.name ?? 'Unassigned'}</p>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-4">
                                                <div className="flex flex-col items-center gap-1">
                                                    <div className="w-2 h-2 rounded-full bg-outline"></div>
                                                    <div className="w-0.5 h-6 bg-outline/20"></div>
                                                    <div className="w-2 h-2 rounded-full bg-[#ffbf00]"></div>
                                                </div>
                                                <div className="flex-1 space-y-3">
                                                    <div>
                                                        <p className="text-[10px] text-outline uppercase font-bold leading-none">Origin</p>
                                                        <p className="text-sm font-bold text-on-surface">{shipment.origin}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] text-outline uppercase font-bold leading-none">Destination</p>
                                                        <p className="text-sm font-bold text-on-surface">{shipment.destination}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-6 pt-6 border-t border-outline-variant/10 flex justify-between items-center">
                                            <p className="text-[10px] text-[#ffbf00] font-bold uppercase">{shipment.cargoType}</p>
                                            <p className="text-[10px] text-outline font-bold">{shipment.weight} Tons</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Shipment History Table */}
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h4 className="font-['Inter'] text-[11px] tracking-[0.2em] uppercase font-bold text-outline">Shipment History</h4>
                        </div>
                        <div className="bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/5">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-surface-container-high/50 border-b border-outline-variant/10">
                                        <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-outline font-black">Date</th>
                                        <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-outline font-black">Route</th>
                                        <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-outline font-black">Status</th>
                                        <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-outline font-black">Driver</th>
                                        <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-outline font-black text-right">Weight</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-outline-variant/5">

                                    {/* Cargando */}
                                    {loading && (
                                        <tr>
                                            <td colSpan={5} className="px-6 py-12 text-center text-[#e2e2e2]/40">
                                                <span className="material-symbols-outlined animate-spin block mx-auto mb-2">progress_activity</span>
                                                Loading shipments...
                                            </td>
                                        </tr>
                                    )}

                                    {/* Vacío */}
                                    {!loading && shipments.length === 0 && (
                                        <tr>
                                            <td colSpan={5} className="px-6 py-12 text-center text-[#e2e2e2]/40">
                                                <span className="material-symbols-outlined block mx-auto mb-2 text-4xl">inventory_2</span>
                                                <p className="text-xs uppercase tracking-widest font-bold">No shipments yet</p>
                                                <button
                                                    onClick={() => setIsModalOpen(true)}
                                                    className="mt-4 px-6 py-2 bg-[#ffbf00] text-black text-xs font-black uppercase tracking-widest rounded-lg"
                                                >
                                                    Create First Shipment
                                                </button>
                                            </td>
                                        </tr>
                                    )}

                                    {/* Filas reales */}
                                    {!loading && shipments.map((shipment) => (
                                        <tr key={shipment.id} className="hover:bg-surface-container-highest/20 transition-colors">
                                            <td className="px-6 py-5 text-sm font-medium text-on-surface">
                                                {formatDate(shipment.createdAt)}
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="text-sm font-bold text-on-surface">{shipment.origin} → {shipment.destination}</div>
                                                <p className="text-[10px] text-outline">{shipment.cargoType}</p>
                                            </td>
                                            <td className="px-6 py-5">
                                                <StatusBadge status={shipment.status} />
                                            </td>
                                            <td className="px-6 py-5 text-sm text-[#e2e2e2]/60">
                                                {shipment.driver?.name ?? '—'}
                                            </td>
                                            <td className="px-6 py-5 text-right text-sm font-bold text-[#e2e2e2]/60">
                                                {shipment.weight} Tons
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>

            {/* Modal */}
            <ShipmentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSuccess={() => {
                    setIsModalOpen(false);
                    fetchShipments();
                }}
            />
        </div>
    );
}