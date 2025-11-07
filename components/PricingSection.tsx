import React from 'react';

const PricingCard: React.FC<{ title: string; price: string; description: string; features: string[]; isPro?: boolean; }> = ({ title, price, description, features, isPro }) => (
    <div className={`border rounded-2xl p-8 flex flex-col ${isPro ? 'bg-brand-dark text-white border-brand-dark' : 'bg-white border-slate-200'}`}>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className={`mt-2 ${isPro ? 'text-slate-300' : 'text-slate-600'}`}>{description}</p>
        <div className="mt-6">
            <span className="text-4xl font-bold">{price}</span>
            {isPro && <span className="text-lg text-slate-300"> /sekali bayar</span>}
        </div>
        <ul className="mt-8 space-y-4 flex-grow">
            {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${isPro ? 'bg-brand-green' : 'bg-brand-green text-white'}`}>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <span className={isPro ? 'text-slate-200' : 'text-slate-700'}>{feature}</span>
                </li>
            ))}
        </ul>
        <a href="https://lynk.id/faynim/x36v36p5zw3y" target="_blank" rel="noopener noreferrer" className="block w-full">
            <button className={`w-full mt-10 font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 ${isPro ? 'bg-brand-green text-brand-dark hover:bg-green-300' : 'bg-brand-dark text-white hover:bg-slate-700'}`}>
                {isPro ? 'Dapatkan Versi Pro' : 'Mulai Gratis'}
            </button>
        </a>
    </div>
);

const PricingSection: React.FC = () => {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
                        Mulai Gratis, Upgrade Kapan Saja
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <PricingCard 
                        title="Versi Gratis" 
                        price="Rp0" 
                        description="Akses kode dasar dan panduan lengkap."
                        features={["Script utama Google AppScript", "Panduan instalasi & penggunaan"]}
                    />
                    <PricingCard 
                        title="Versi Pro" 
                        price="Rp35.000" 
                        description="Source code penuh untuk kustomisasi."
                        features={["Semua fitur versi gratis", "Support admin jika perlu dicustom", "Dapat update lifetime"]}
                        isPro
                    />
                </div>
            </div>
        </section>
    );
};

export default PricingSection;