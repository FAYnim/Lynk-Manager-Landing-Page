import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section id="hero-section" className="bg-white">
            <div className="container mx-auto px-6 py-20 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-brand-dark leading-tight mb-4">
                        Otomatisasi Follow-Up Pelanggan Lynk.id dengan Lynk Manager
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 mb-8">
                        Kelola data pembeli dan kirim promosi otomatis langsung dari Gmail & Spreadsheet.
                    </p>
                    <a 
                        href="https://lynk.id/faynim/x36v36p5zw3y"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-brand-dark text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-slate-700 transition-all duration-300 transform hover:scale-105"
                    >
                        Coba Sekarang
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;