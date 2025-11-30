import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('briik_cookie_consent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('briik_cookie_consent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 p-4 md:p-6 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] animate-fade-in-up">
            <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex-1">
                    <p className="text-gray-600 text-sm md:text-base">
                        🍪 <strong>¡Hola! Usamos cookies</strong> para mejorar tu experiencia y asegurarnos de que todo funcione como la seda.
                        Al continuar navegando, aceptas nuestra política de privacidad.
                    </p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={handleAccept}
                        className="bg-brand-blue text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-blue-700 transition-colors shadow-md"
                    >
                        Aceptar todo
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
