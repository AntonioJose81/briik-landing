import React, { useState, useEffect } from 'react';

interface NavbarProps {
    onNavigateHome?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateHome }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        if (onNavigateHome) {
            onNavigateHome();
            // Wait a bit for the view to switch before scrolling if we were on another page
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setMobileMenuOpen(false);
    };

    const handleLogoClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (onNavigateHome) onNavigateHome();
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
            }`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" onClick={handleLogoClick} className="text-3xl font-heading font-bold text-brand-blue tracking-wider flex items-center gap-2">
                    <i className="fa-solid fa-cube text-brand-yellow"></i> BRIIK
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8 font-bold text-gray-600">
                    <button onClick={() => scrollToSection('ventajas')} className="hover:text-brand-pink transition-colors">Ventajas</button>
                    <button onClick={() => scrollToSection('galeria')} className="hover:text-brand-pink transition-colors">Galería</button>
                    <button onClick={() => scrollToSection('personalizar')} className="hover:text-brand-pink transition-colors">Personalízalo</button>
                </div>

                <button
                    onClick={() => scrollToSection('preorder-area')}
                    className="hidden md:block bg-brand-pink hover:bg-pink-500 text-white font-heading font-bold py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all"
                >
                    ¡Lo Quiero!
                </button>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl text-brand-blue"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center space-y-4 font-bold text-gray-600 border-t border-gray-100">
                    <button onClick={() => scrollToSection('ventajas')} className="hover:text-brand-pink">Ventajas</button>
                    <button onClick={() => scrollToSection('galeria')} className="hover:text-brand-pink">Galería</button>
                    <button onClick={() => scrollToSection('personalizar')} className="hover:text-brand-pink">Personalízalo</button>
                    <button
                        onClick={() => scrollToSection('preorder-area')}
                        className="bg-brand-pink text-white py-2 px-6 rounded-full shadow-md w-3/4"
                    >
                        ¡Lo Quiero!
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;