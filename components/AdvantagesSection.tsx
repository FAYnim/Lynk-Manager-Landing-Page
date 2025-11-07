
import React from 'react';
import { CheckIcon } from './icons';

const AdvantageItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-6 h-6 bg-brand-green text-white rounded-full flex items-center justify-center mt-1">
            <CheckIcon className="w-4 h-4" />
        </div>
        <span className="text-lg text-slate-600">{children}</span>
    </li>
);

const AdvantagesSection: React.FC = () => {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
                        Kenapa Lynk Manager Lebih Unggul?
                    </h2>
                    <p className="text-lg text-slate-600">
                        Dirancang untuk memberi Anda kontrol penuh tanpa bergantung pada platform pihak ketiga yang rumit dan mahal.
                    </p>
                </div>
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
                    <ul className="space-y-6">
                        <AdvantageItem>
                            <strong>100% Milik Anda.</strong> Semua data tersimpan aman di dalam akun Google Anda, bukan di server kami.
                        </AdvantageItem>
                        <AdvantageItem>
                            <strong>Tanpa Login Pihak Ketiga.</strong> Jalankan semua proses langsung dari lingkungan Google yang sudah Anda kenal.
                        </AdvantageItem>
                        <AdvantageItem>
                            <strong>Gratis & Open-Source.</strong> Gunakan script secara gratis dan lihat kode sumbernya untuk transparansi penuh.
                        </AdvantageItem>
                        <AdvantageItem>
                            <strong>Fleksibel & Bisa Dimodifikasi.</strong> Sesuaikan script dengan kebutuhan promosi unik Anda, seperti segmentasi pelanggan atau template email custom.
                        </AdvantageItem>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AdvantagesSection;
