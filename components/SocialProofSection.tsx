import React, { useEffect, useRef } from 'react';

// Inform TypeScript that Swiper is a global variable from the CDN
declare var Swiper: any;

const testimonials = [
    {
        quote: "Alat ini benar-benar game-changer! Saya bisa menghemat jam kerja setiap minggu dan fokus pada pembuatan konten baru. Sangat direkomendasikan!",
        name: "Dina",
        role: "Penjual E-book"
    },
    {
        quote: "Awalnya saya ragu, tapi setelah mencoba, prosesnya sangat mudah. Sekarang saya bisa mengirim update template ke semua pelanggan dengan satu klik.",
        name: "Rian",
        role: "Kreator Template Notion"
    },
    {
        quote: "Sebagai developer, saya suka karena script-nya open-source. Saya bisa memodifikasinya sesuai kebutuhan. Sangat powerful!",
        name: "Budi",
        role: "Developer Independen"
    }
];

const SocialProofSection: React.FC = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            new Swiper(swiperRef.current, {
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                slidesPerView: 1,
                spaceBetween: 30,
            });
        }
    }, []);

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6 max-w-3xl relative">
                <style>{`
                    .swiper-button-next, .swiper-button-prev {
                        color: #2D3E50; /* brand-dark */
                    }
                    .swiper-pagination-bullet-active {
                        background-color: #2ECC71; /* brand-green */
                    }
                `}</style>
                <div className="swiper" ref={swiperRef}>
                    <div className="swiper-wrapper">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="swiper-slide text-center px-8 md:px-12 pb-12">
                                <p className="text-xl md:text-2xl text-slate-600 italic mb-6">
                                    “{testimonial.quote}”
                                </p>
                                <div className="font-bold text-brand-dark">{testimonial.name}</div>
                                <div className="text-slate-500">{testimonial.role}</div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="swiper-pagination"></div>
                    
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </div>
            </div>
        </section>
    );
};

export default SocialProofSection;