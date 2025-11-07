
import React from 'react';
import { GmailIcon, SpreadsheetIcon, BroadcastIcon } from './icons';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
        <div className="inline-block bg-brand-green/10 text-brand-green p-4 rounded-full mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-brand-dark mb-2">{title}</h3>
        <p className="text-slate-600">{children}</p>
    </div>
);

const SolutionSection: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
                        Solusi Otomatis, Aman, dan Tanpa Ribet
                    </h2>
                    <p className="text-lg text-slate-600">
                        Lynk Manager adalah alat berbasis Google AppScript yang mengotomatiskan pengambilan data pelanggan dari Gmail Anda dan memungkinkan broadcast promosi langsung dari Spreadsheet.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <FeatureCard icon={<GmailIcon className="w-8 h-8"/>} title="Scrape Otomatis dari Gmail">
                        Secara otomatis menarik data pembeli dari notifikasi email Lynk.id tanpa perlu copy-paste manual.
                    </FeatureCard>
                    <FeatureCard icon={<SpreadsheetIcon className="w-8 h-8"/>} title="Integrasi Spreadsheet">
                        Semua data terorganisir rapi dalam Google Spreadsheet, mudah diakses dan dikelola kapan saja.
                    </FeatureCard>
                    <FeatureCard icon={<BroadcastIcon className="w-8 h-8"/>} title="Auto Broadcast Promosi">
                        Kirim email promosi, update, atau newsletter ke seluruh database pelanggan dengan sekali klik dari Spreadsheet.
                    </FeatureCard>
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
