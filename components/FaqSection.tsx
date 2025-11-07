
import React, { useState } from 'react';
import { ChevronDownIcon } from './icons';

interface FaqItemProps {
    question: string;
    children: React.ReactNode;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-slate-200 py-6">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left"
            >
                <h3 className="text-lg font-semibold text-brand-dark">{question}</h3>
                <ChevronDownIcon className={`w-6 h-6 text-slate-500 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                <div className="text-slate-600 leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
    );
};

const FaqSection: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
                        Pertanyaan Umum
                    </h2>
                </div>
                <div>
                    <FaqItem question="Apakah Lynk Manager aman?">
                        <p>Sangat aman. Script ini berjalan sepenuhnya di dalam akun Google Anda melalui Google AppScript. Data Anda tidak pernah meninggalkan ekosistem Google dan tidak dikirim ke server pihak ketiga manapun, termasuk kami.</p>
                    </FaqItem>
                    <FaqItem question="Apakah butuh akses API tambahan?">
                        <p>Tidak. Lynk Manager hanya menggunakan layanan bawaan Google seperti GmailApp dan SpreadsheetApp yang sudah tersedia di Google AppScript. Anda tidak perlu mengurus kunci API atau proses otorisasi yang rumit.</p>
                    </FaqItem>
                    <FaqItem question="Apakah script-nya bisa dimodifikasi?">
                        <p>Tentu saja. Versi Pro memberikan Anda akses ke kode sumber yang tidak terenkripsi, sehingga Anda bisa memodifikasinya sesuai kebutuhan. Anda bisa mengubah template email, menambahkan logika segmentasi, atau mengintegrasikannya dengan script lain.</p>
                    </FaqItem>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
