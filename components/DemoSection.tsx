import React from 'react';

const DemoSection: React.FC = () => {
    return (
        <section id="demo" className="py-16 md:py-24">
            <div className="container mx-auto px-6 text-center max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
                    Lihat Cara Kerjanya
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                    Tonton demo singkat untuk melihat betapa mudahnya mengelola pelanggan, atau unduh script gratisnya untuk mulai menggunakan Lynk Manager sekarang juga.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                     <a 
                        href="https://lynk.id/faynim/x36v36p5zw3y"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto bg-brand-dark text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-slate-700 transition-all duration-300 transform hover:scale-105"
                    >
                        Lihat Demo
                    </a>
                     <a 
                        href="https://lynk.id/faynim/x36v36p5zw3y"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto bg-white text-brand-dark border-2 border-slate-300 font-bold py-3 px-8 rounded-lg text-lg hover:bg-slate-100 transition-all duration-300"
                    >
                        Dapatkan Script Gratis
                    </a>
                </div>
            </div>
        </section>
    );
};

export default DemoSection;
