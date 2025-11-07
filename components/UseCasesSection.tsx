
import React from 'react';

const UseCaseCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
        <h3 className="text-xl font-bold text-brand-dark mb-3">{title}</h3>
        <p className="text-slate-600">{children}</p>
    </div>
);

const UseCasesSection: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
                        Siapa yang Bisa Menggunakan?
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <UseCaseCard title="Penjual E-book">
                        Melakukan follow-up kepada pembeli lama untuk menawarkan produk baru atau diskon eksklusif.
                    </UseCaseCard>
                    <UseCaseCard title="Kreator Template Notion">
                        Mengirimkan notifikasi update template atau tips penggunaan kepada semua pengguna.
                    </UseCaseCard>
                    <UseCaseCard title="Developer & Penjual Script">
                        Membangun mailing list pelanggan organik untuk peluncuran produk atau update versi terbaru.
                    </UseCaseCard>
                </div>
            </div>
        </section>
    );
};

export default UseCasesSection;
