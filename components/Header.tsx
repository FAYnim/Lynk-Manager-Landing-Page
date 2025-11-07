import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.getElementById('hero-section');
            if (heroSection) {
                // Tampilkan header saat di-scroll melewati hero section
                if (window.scrollY > heroSection.offsetHeight) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Membersihkan event listener saat komponen di-unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
            }`}
            aria-hidden={!isVisible}
        >
            <div className="bg-white/80 backdrop-blur-sm shadow-md">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex justify-start items-center">
                        <span className="text-xl font-bold text-brand-dark">
                            Lynk Manager
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
