import React from 'react';
import ScrollReveal from './ScrollReveal';

const Hero: React.FC = () => {
    const scrollToPreorder = () => {
        const element = document.getElementById('preorder-area');
        if(element) element.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToHowItWorks = () => {
        const element = document.getElementById('como-funciona');
        if(element) element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-50">
            {/* Blobs */}
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-200 rounded-full blur-[40px] opacity-60 animate-blob z-0"></div>
            <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/4 w-80 h-80 bg-blue-200 rounded-full blur-[40px] opacity-60 animate-blob z-0" style={{ animationDirection: 'reverse', animationDelay: '2s' }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    
                    {/* Text */}
                    <ScrollReveal className="lg:w-1/2 text-center lg:text-left">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-brand-blue font-bold text-sm mb-4">
                            🚀 La revolución de las meriendas
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight mb-6 text-gray-900">
                            ¡Tu Peque,<br />Su Zumo,<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-yellow">
                                Sin Manchas!
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            El primer portabrick impreso en 3D, biodegradable y con asas ergonómicas. Evita los "estrujones" accidentales y haz que beber sea divertido.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button onClick={scrollToPreorder} className="bg-brand-blue hover:bg-blue-600 text-white font-heading font-bold text-lg py-4 px-8 rounded-2xl shadow-xl transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                                <span>Reserva el tuyo</span>
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                            <button onClick={scrollToHowItWorks} className="bg-white hover:bg-gray-100 text-gray-700 font-bold text-lg py-4 px-8 rounded-2xl shadow-md border border-gray-200 transition-all flex items-center justify-center gap-2">
                                <i className="fa-solid fa-play text-brand-pink"></i>
                                <span>Ver cómo funciona</span>
                            </button>
                        </div>

                        <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500 font-semibold">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full bg-green-400 border-2 border-white"></div>
                                <div className="w-8 h-8 rounded-full bg-yellow-400 border-2 border-white"></div>
                                <div className="w-8 h-8 rounded-full bg-red-400 border-2 border-white"></div>
                            </div>
                            <p>+500 padres felices</p>
                        </div>
                    </ScrollReveal>

                    {/* Image */}
                    <ScrollReveal delay={200} className="lg:w-1/2 relative">
                        <div className="relative z-10 animate-float">
                            <img 
                                src="/images/1.png" 
                                alt="Colección de portabricks de colores" 
                                className="w-full rounded-3xl shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-all duration-500 object-cover"
                            />
                            
                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border-l-4 border-brand-green hidden md:block animate-bounce" style={{ animationDuration: '3s' }}>
                                <div className="flex items-center gap-3">
                                    <i className="fa-solid fa-leaf text-green-500 text-2xl"></i>
                                    <div>
                                        <p className="font-bold text-gray-800">100% Biodegradable</p>
                                        <p className="text-xs text-gray-500">Material PLA Ecológico</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Background Decoration */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-yellow-100 to-pink-100 rounded-full opacity-50 z-0 pointer-events-none"></div>
                    </ScrollReveal>
                </div>
            </div>
        </header>
    );
};

export default Hero;