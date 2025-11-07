import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-slate-200">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-slate-500 text-center md:text-left">&copy; {new Date().getFullYear()} Lynk Manager. All rights reserved.</p>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="flex items-center space-x-4">
                            <a href="https://www.threads.net/@faris.a.y" target="_blank" rel="noopener noreferrer" aria-label="Threads" className="text-slate-500 hover:text-brand-dark transition-colors">
                                <i className="fa-brands fa-threads text-2xl"></i>
                            </a>
                            <a href="https://www.instagram.com/faris.a.y" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-500 hover:text-brand-dark transition-colors">
                                <i className="fa-brands fa-instagram text-2xl"></i>
                            </a>
                        </div>
                        <a href="https://faynim.my.id" target="_blank" rel="noopener noreferrer" className="text-slate-500 font-semibold hover:text-brand-dark transition-colors">
                           Faydev
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;