import React from 'react';
import ScrollReveal from './ScrollReveal';

const Distributors: React.FC = () => {
    const [email, setEmail] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [submitted, setSubmitted] = React.useState(false);

    // TODO: Replace with the actual Web App URL from Google Apps Script
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwf9CqoNh3vHBQWd09We0kSWyMIaWegXVI9YkLJVD7OKRsyF2szcLlafX4G2OZpYaZs/exec";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Important for Google Apps Script to avoid CORS errors
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, type: 'Tienda' }),
            });

            // Since mode is no-cors, we can't read the response, so we assume success
            setSubmitted(true);
            setEmail('');
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="distribuidores" className="py-20 bg-blue-50">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Column */}
                    <ScrollReveal className="space-y-8 order-2 md:order-1">
                        <div>
                            <span className="inline-block py-1 px-3 rounded-full bg-brand-yellow/20 text-brand-dark font-bold text-sm mb-4">
                                Para tiendas y negocios
                            </span>
                            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
                                Convierte tu tienda en un punto oficial BRIIK
                            </h2>
                            <p className="text-lg text-gray-600">
                                Ofrece a tus clientes un producto exclusivo, personalizado con el nombre del peque, que se fabrica bajo demanda en tu propia tienda, sin necesidad de stock ni complicaciones.
                            </p>
                        </div>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <i className="fa-solid fa-check text-brand-green text-sm"></i>
                                </div>
                                <span className="text-gray-700"><strong>Sin stock ni inmovilizado:</strong> solo se produce lo que se vende.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <i className="fa-solid fa-check text-brand-green text-sm"></i>
                                </div>
                                <span className="text-gray-700"><strong>Producto diferencial:</strong> personalizado con nombre, color y temática.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <i className="fa-solid fa-check text-brand-green text-sm"></i>
                                </div>
                                <span className="text-gray-700"><strong>Fabricación local:</strong> encanta a las familias ver cómo se hace.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <i className="fa-solid fa-check text-brand-green text-sm"></i>
                                </div>
                                <span className="text-gray-700"><strong>Modelo sencillo:</strong> tú vendes y entregas; nosotros ponemos el sistema.</span>
                            </li>
                        </ul>

                        <div className="pt-4">
                            {!submitted ? (
                                <form onSubmit={handleSubmit} className="w-full md:w-auto">
                                    <div className="flex flex-col md:flex-row gap-3">
                                        <input
                                            type="email"
                                            placeholder="Tu correo electrónico"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="flex-grow px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all text-lg w-full md:w-80"
                                            disabled={loading}
                                        />
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="bg-brand-blue hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none whitespace-nowrap"
                                        >
                                            {loading ? (
                                                <span className="flex items-center gap-2">
                                                    <i className="fa-solid fa-circle-notch fa-spin"></i>
                                                    Enviando...
                                                </span>
                                            ) : (
                                                "Quiero ser punto BRIIK"
                                            )}
                                        </button>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-3 text-center md:text-left">
                                        Te contactaremos sin compromiso para explicarte el modelo.
                                    </p>
                                </form>
                            ) : (
                                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center md:text-left animate-fade-in">
                                    <div className="flex items-center gap-3 text-green-700 font-bold text-lg mb-2 justify-center md:justify-start">
                                        <i className="fa-solid fa-circle-check"></i>
                                        ¡Recibido!
                                    </div>
                                    <p className="text-green-600">
                                        Nos pondremos en contacto contigo muy pronto.
                                    </p>
                                </div>
                            )}
                        </div>
                    </ScrollReveal>

                    {/* Visual Column */}
                    <ScrollReveal className="relative order-1 md:order-2" delay={200}>
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img
                                src="/images/distributor-display-minimal.jpeg"
                                alt="Expositor minimalista de BRIIK"
                                className="w-full h-auto object-cover"
                            />
                            {/* Floating badge */}
                            <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur text-brand-dark px-5 py-3 rounded-xl font-bold shadow-lg border border-gray-100">
                                🚀 Margen atractivo
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-yellow/30 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-pink/30 rounded-full blur-3xl -z-10"></div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default Distributors;
