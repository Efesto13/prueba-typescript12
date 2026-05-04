export default function authLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex min-h-screen w-full">
            {/* Panel izquierdo - Formulario */}
            <section className="w-full lg:w-[40%] flex flex-col justify-center px-8 sm:px-16 lg:px-24 bg-[#121212] relative z-10">
                {/* Branding */}
                <div className="mb-10">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-[linear-gradient(135deg,_#ffe2ab_0%,_#ffbf00_100%)] rounded-lg rotate-45 flex items-center justify-center">
                            <span className="material-symbols-outlined -rotate-45 text-[#402d00] text-lg font-bold">rocket_launch</span>
                        </div>
                        <span className="text-white font-black text-xl tracking-tight">TRUX</span>
                    </div>
                    <p className="text-xs text-neutral-500 uppercase tracking-[0.2em]">Logística Inteligente</p>
                </div>

                {children}

                <p className="mt-12 text-xs text-neutral-600">
                    &copy; 2026 TRUX Logística
                </p>
            </section>

            {/* Panel derecho - Visual decorativo */}
            <section className="hidden lg:block lg:w-[60%] relative overflow-hidden bg-black">
                <img alt="logistics center" className="w-full h-full object-cover" data-alt="dramatic wide angle shot of a futuristic dark logistics warehouse with amber motion blur light trails of moving transport trucks" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYQ9_5YvdxS-Ypf_9Ebo07He6RUd0BUYz4hr7Ar4sz8WtK2Cw22ViuQ8To_Z5QZy6sRp1EWMG-ZfwGrHZm5tO6e9YbeUL0uJVFQESCR0L9tqxEV8PGqwMIExdE-F87JHsC7btHrpOfR5k-n1nVDD5bKJQ4fHCBlUVsxVi7jl0MMGrj_tuCZqx0NJVVEtFRIFGmgcuqaG9xMqBSH-SkBaLjo3B7mCkFZ5SaB1B4XzJYeFoV7KsWRgl2HOlmWD-B8YMn40upGo-xpv_q" />
                {/* Capa oscura sobre la imagen */}
                <div className="absolute inset-0 bg-black/50"></div>
            </section>
        </div>
    );
}
