'use client';
import { useState } from 'react';

type ShipmentModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
};

type FormData = {
    cargoType: string;
    weight: string;
    dimensions: string;
    origin: string;
    destination: string;
    timeline: 'URGENT' | 'STANDARD';
};

type FormErrors = {
    cargoType?: string;
    weight?: string;
    origin?: string;
    destination?: string;
};

export default function ShipmentModal({ isOpen, onClose, onSuccess }: ShipmentModalProps) {
    const [formData, setFormData] = useState<FormData>({
        cargoType: '',
        weight: '',
        dimensions: '',
        origin: '',
        destination: '',
        timeline: 'STANDARD',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [loading, setLoading] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);

    function validate(): boolean {
        const newErrors: FormErrors = {};
        if (!formData.cargoType.trim()) newErrors.cargoType = 'Required';
        if (!formData.weight) {
            newErrors.weight = 'Required';
        } else if (isNaN(Number(formData.weight)) || Number(formData.weight) <= 0) {
            newErrors.weight = 'Must be a valid number';
        }
        if (!formData.origin.trim()) newErrors.origin = 'Required';
        if (!formData.destination.trim()) newErrors.destination = 'Required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    function handleClose() {
        setFormData({ cargoType: '', weight: '', dimensions: '', origin: '', destination: '', timeline: 'STANDARD' });
        setErrors({});
        setServerError(null);
        onClose();
    }

    async function handleSubmit() {
        if (!validate()) return;
        setLoading(true);
        setServerError(null);

        try {
            const token = localStorage.getItem('accessToken');
            const res = await fetch('/api/shipments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    cargoType: formData.cargoType,
                    weight: Number(formData.weight),
                    dimensions: formData.dimensions || null,
                    origin: formData.origin,
                    destination: formData.destination,
                    timeline: formData.timeline,
                }),
            });

            const data = await res.json();
            if (!res.ok) {
                setServerError(data.error || 'Error creating shipment');
                return;
            }

            onSuccess();
            handleClose();
        } catch {
            setServerError('Connection error. Try again.');
        } finally {
            setLoading(false);
        }
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={handleClose} />

            {/* Modal */}
            <div className="relative z-10 bg-[#1b1b1b] border border-[#504532]/30 rounded-2xl shadow-2xl w-full max-w-lg mx-4 p-8">

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#ffbf00]/10 rounded-xl flex items-center justify-center">
                            <span className="material-symbols-outlined text-[#ffbf00]">local_shipping</span>
                        </div>
                        <div>
                            <h2 className="text-on-surface font-black text-lg tracking-tighter uppercase">New Load Request</h2>
                            <p className="text-[#e2e2e2]/40 text-[10px] uppercase tracking-widest">Load Request Protocol 04-A</p>
                        </div>
                    </div>
                    <button onClick={handleClose} className="text-[#e2e2e2]/40 hover:text-[#e2e2e2] transition-colors">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                {/* Server Error */}
                {serverError && (
                    <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-lg px-4 py-3 mb-6">
                        <span className="material-symbols-outlined text-[18px]">error</span>
                        {serverError}
                    </div>
                )}

                <div className="space-y-5">

                    {/* Cargo Type */}
                    <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-[#e2e2e2]/40 mb-2">
                            Cargo Information
                        </label>
                        <input
                            type="text"
                            value={formData.cargoType}
                            onChange={(e) => setFormData({ ...formData, cargoType: e.target.value })}
                            className={`w-full bg-[#131313] border-b py-3 px-0 text-[#e2e2e2] text-sm outline-none transition-all placeholder:text-[#e2e2e2]/20
                                ${errors.cargoType ? 'border-red-500' : 'border-[#504532]/30 focus:border-[#ffbf00]'}`}
                            placeholder="Type of Cargo (e.g. Industrial Equipment)"
                        />
                        {errors.cargoType && <p className="text-red-400 text-xs mt-1">{errors.cargoType}</p>}
                    </div>

                    {/* Weight and Dimensions */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <input
                                type="number"
                                value={formData.weight}
                                onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                                className={`w-full bg-[#131313] border-b py-3 px-0 text-[#e2e2e2] text-sm outline-none transition-all placeholder:text-[#e2e2e2]/20
                                    ${errors.weight ? 'border-red-500' : 'border-[#504532]/30 focus:border-[#ffbf00]'}`}
                                placeholder="Weight (Tons)"
                            />
                            {errors.weight && <p className="text-red-400 text-xs mt-1">{errors.weight}</p>}
                        </div>
                        <div>
                            <input
                                type="text"
                                value={formData.dimensions}
                                onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                                className="w-full bg-[#131313] border-b border-[#504532]/30 focus:border-[#ffbf00] py-3 px-0 text-[#e2e2e2] text-sm outline-none transition-all placeholder:text-[#e2e2e2]/20"
                                placeholder="Dimensions (LxWxH) optional"
                            />
                        </div>
                    </div>

                    {/* Origin */}
                    <div>
                        <input
                            type="text"
                            value={formData.origin}
                            onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                            className={`w-full bg-[#131313] border-b py-3 px-0 text-[#e2e2e2] text-sm outline-none transition-all placeholder:text-[#e2e2e2]/20
                                ${errors.origin ? 'border-red-500' : 'border-[#504532]/30 focus:border-[#ffbf00]'}`}
                            placeholder="Origin (e.g. Port Alpha, Houston TX)"
                        />
                        {errors.origin && <p className="text-red-400 text-xs mt-1">{errors.origin}</p>}
                    </div>

                    {/* Destination */}
                    <div>
                        <input
                            type="text"
                            value={formData.destination}
                            onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                            className={`w-full bg-[#131313] border-b py-3 px-0 text-[#e2e2e2] text-sm outline-none transition-all placeholder:text-[#e2e2e2]/20
                                ${errors.destination ? 'border-red-500' : 'border-[#504532]/30 focus:border-[#ffbf00]'}`}
                            placeholder="Destination (e.g. Warehouse 7, Chicago IL)"
                        />
                        {errors.destination && <p className="text-red-400 text-xs mt-1">{errors.destination}</p>}
                    </div>

                    {/* Timeline */}
                    <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-[#e2e2e2]/40 mb-3">
                            Timeline
                        </label>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setFormData({ ...formData, timeline: 'URGENT' })}
                                className={`flex-1 py-3 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${formData.timeline === 'URGENT'
                                    ? 'bg-[#ffbf00] text-black'
                                    : 'bg-[#131313] border border-[#504532]/30 text-[#e2e2e2]/60 hover:border-[#ffbf00]/40'
                                    }`}
                            >
                                Urgent (ASAP)
                            </button>
                            <button
                                onClick={() => setFormData({ ...formData, timeline: 'STANDARD' })}
                                className={`flex-1 py-3 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${formData.timeline === 'STANDARD'
                                    ? 'bg-[#ffbf00] text-black'
                                    : 'bg-[#131313] border border-[#504532]/30 text-[#e2e2e2]/60 hover:border-[#ffbf00]/40'
                                    }`}
                            >
                                Standard (24H)
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-8">
                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="w-full py-4 bg-[#ffbf00] hover:bg-[#ffbf00]/90 text-black font-black uppercase tracking-widest text-sm rounded-xl transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {loading && (
                            <span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span>
                        )}
                        {loading ? 'Submitting...' : 'Request Load'}
                    </button>
                </div>
            </div>
        </div>
    );
}