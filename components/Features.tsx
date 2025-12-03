import React from 'react';
import ScrollReveal from './ScrollReveal';

const Features: React.FC = () => {
    return (
        <section id="como-funciona" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <ScrollReveal className="text-center mb-16">
                    <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">¿Te suena esta historia?</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Zumo por la ropa, zumo por el coche, zumo por el sofá... Los peques aprietan sin querer y ¡paf!
                    </p>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <ScrollReveal className="relative group">
                        <div className="relative overflow-hidden rounded-3xl shadow-xl">
                            <img
                                src="/images/2.jpg"
                                alt="Niño bebiendo tranquilo con Briik"
                                className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                            />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-brand-dark px-4 py-2 rounded-lg font-bold shadow-sm">
                                ✨ ¡Mira qué paz!
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={200} className="space-y-8">
                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 text-red-500 text-xl">
                                <i className="fa-solid fa-xmark"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">El Problema</h3>
                                <p className="text-gray-600">
                                    Los bricks son blandos. Las manitas de los niños no controlan la fuerza y al agarrar el brick, el líquido sale disparado por la pajita.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 text-green-500 text-xl">
                                <i className="fa-solid fa-check"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">La Solución Briik</h3>
                                <p className="text-gray-600">
                                    Una carcasa rígida impresa en 3D que protege el brick. El niño agarra las asas, no el cartón. ¡Cero presión, cero derrames!
                                </p>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-2xl border-2 border-blue-100">
                            <h4 className="font-heading font-bold text-brand-blue mb-2 text-lg">Características Clave:</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2"><i className="fa-solid fa-star text-brand-yellow"></i> Asas diseñadas para manos pequeñas.</li>
                                <li className="flex items-center gap-2"><i className="fa-solid fa-star text-brand-yellow"></i> Compatible con bricks estándar.</li>
                                <li className="flex items-center gap-2"><i className="fa-solid fa-star text-brand-yellow"></i> Muy ligero y resistente.</li>
                            </ul>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default Features;