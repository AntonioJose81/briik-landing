import React, { useState } from 'react';

interface FooterProps {
    onOpenPrivacyPolicy?: () => void;
    onNavigateToStory?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenPrivacyPolicy, onNavigateToStory }) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    // TODO: Replace with the actual Web App URL from Google Apps Script
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwf9CqoNh3vHBQWd09We0kSWyMIaWegXVI9YkLJVD7OKRsyF2szcLlafX4G2OZpYaZs/exec";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, type: 'Particular' }),
            });

            setStatus('success');
            setEmail('');
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
            alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
            setStatus('idle');
        }
    };

    return (
        <footer className="bg-brand-blue text-white pt-20 pb-10 clip-wave relative mt-10">
            <div className="container mx-auto px-6 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">¿Listo para decir adiós a las manchas?</h2>
                <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                    Únete a la revolución Briik y haz que tus hijos beban su zumo con estilo y seguridad.
                </p>

                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl max-w-lg mx-auto border border-white/20">
                    <h3 className="text-2xl font-bold mb-4">🚀 ¡Lanzamiento Inminente!</h3>
                    <p className="mb-6 text-blue-100">
                        Nuestra tienda online está a punto de abrir. Déjanos tu email y consigue un <span className="text-brand-yellow font-bold">20% de DESCUENTO</span> en tu primer pedido.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                        <input
                            type="email"
                            required
                            placeholder="tu@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={status === 'success' || status === 'loading'}
                            className="w-full px-6 py-4 rounded-xl text-gray-800 font-bold focus:outline-none focus:ring-4 ring-brand-yellow disabled:opacity-70"
                        />
                        <button
                            type="submit"
                            disabled={status === 'success' || status === 'loading'}
                            className={`w-full font-heading font-extrabold text-xl py-4 rounded-xl shadow-lg transform transition-all ${status === 'success'
                                ? 'bg-green-500 text-white cursor-default'
                                : 'bg-brand-yellow hover:bg-yellow-400 hover:scale-105 text-brand-dark'
                                }`}
                        >
                            {status === 'success' ? (
                                <span><i className="fa-solid fa-check mr-2"></i> ¡APUNTADO!</span>
                            ) : (
                                status === 'loading' ? (
                                    <span><i className="fa-solid fa-circle-notch fa-spin mr-2"></i> ENVIANDO...</span>
                                ) : (
                                    '¡AVISADME!'
                                )
                            )}
                        </button>
                    </form>
                    <p className="mt-4 text-xs text-blue-200 opacity-70">No hacemos spam. Solo bricks felices.</p>
                </div>

                <div className="mt-20 border-t border-blue-400 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 opacity-80 text-sm">
                    <div className="flex items-center gap-2 text-xl">
                        <span className="font-heading font-bold">Briik</span>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex gap-6">
                            <a href="https://instagram.com/Briik_3D" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition-colors"><i className="fa-brands fa-instagram text-2xl"></i></a>
                            <a href="mailto:artesalaser@gmail.com" className="hover:text-brand-yellow transition-colors"><i className="fa-regular fa-envelope text-2xl"></i></a>
                        </div>
                        <div className="flex gap-4">
                            {onNavigateToStory && (
                                <button
                                    onClick={onNavigateToStory}
                                    className="text-blue-200 hover:text-white underline decoration-dotted underline-offset-4 transition-colors text-xs md:text-sm"
                                >
                                    Así nació Briik
                                </button>
                            )}
                            {onOpenPrivacyPolicy && (
                                <button
                                    onClick={onOpenPrivacyPolicy}
                                    className="text-blue-200 hover:text-white underline decoration-dotted underline-offset-4 transition-colors text-xs md:text-sm"
                                >
                                    Política de Privacidad
                                </button>
                            )}
                        </div>
                    </div>

                    <p>Creado por Antonio J. Alonso</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;