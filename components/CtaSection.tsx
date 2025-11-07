import React from 'react';

const CtaSection: React.FC = () => {
    return (
        <section className="py-20 md:py-28">
            <div className="container mx-auto px-6 text-center max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6">
                    Bangun Database Pelangganmu Sekarang
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                    Berhenti kehilangan peluang. Mulai otomatisasi follow-up dan ubah pembeli satu kali menjadi pelanggan setia.
                </p>
                <a
                    href="https://lynk.id/faynim/x36v36p5zw3y"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-brand-dark text-white font-bold py-4 px-10 rounded-lg text-xl hover:bg-slate-700 transition-all duration-300 transform hover:scale-105"
                >
                    Mulai Gunakan Lynk Manager
                </a>
            </div>
        </section>
    );
};

export default CtaSection;
