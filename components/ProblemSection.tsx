
import React from 'react';
import { XCircleIcon } from './icons';

const ProblemSection: React.FC = () => {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-6 text-center max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                    Kenapa Banyak Kreator Kehilangan Peluang Promosi?
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                    Pengguna Lynk.id seringkali menyalin data pelanggan secara manual, membuang waktu berharga, dan akhirnya tidak sempat melakukan follow-up. Ini mengakibatkan hilangnya potensi penjualan berulang.
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-left">
                    <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                        <XCircleIcon className="w-6 h-6 text-red-500 flex-shrink-0" />
                        <span className="text-slate-700">Salin data manual & repetitif</span>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                        <XCircleIcon className="w-6 h-6 text-red-500 flex-shrink-0" />
                        <span className="text-slate-700">Data pelanggan tercecer</span>
                    </div>
                     <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                        <XCircleIcon className="w-6 h-6 text-red-500 flex-shrink-0" />
                        <span className="text-slate-700">Kehilangan pelanggan lama</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
