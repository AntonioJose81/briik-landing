import React from 'react';
import ScrollReveal from './ScrollReveal';

const Sustainability: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-green-50">
            <div className="container mx-auto px-6">
                <ScrollReveal className="text-center mb-16">
                    <span className="text-green-600 font-bold tracking-wider uppercase text-sm bg-green-100 px-4 py-1 rounded-full">Eco-Friendly & Smart</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mt-4 mb-6">
                        Tecnología que cuida el planeta
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Briik no es solo un trozo de plástico. Es una nueva forma de fabricar: bajo demanda, sin desperdicios y pensando en el futuro de los que lo usan.
                    </p>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Card 1: Biodegradable */}
                    <ScrollReveal delay={100} className="bg-white p-8 rounded-3xl shadow-lg border border-green-100 hover:shadow-xl transition-shadow group">
                        <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                            <i className="fa-solid fa-leaf"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-800">100% Biodegradable</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Fabricado con PLA, un material derivado del maíz, la remolacha o la caña de azúcar. Es compostable y respetuoso con el medio ambiente.
                        </p>
                    </ScrollReveal>

                    {/* Card 2: Impresión 3D */}
                    <ScrollReveal delay={200} className="bg-white p-8 rounded-3xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow group">
                        <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                            <i className="fa-solid fa-cube"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-800">Impresión 3D</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Cada Briik se "imprime" capa a capa. Esta tecnología nos permite crear formas complejas y personalizadas sin necesidad de moldes industriales.
                        </p>
                    </ScrollReveal>

                    {/* Card 3: Sin Stock */}
                    <ScrollReveal delay={300} className="bg-white p-8 rounded-3xl shadow-lg border border-yellow-100 hover:shadow-xl transition-shadow group">
                        <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                            <i className="fa-solid fa-boxes-packing"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-800">Zero Stock</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            No acumulamos productos en almacenes gigantes. Fabricamos tu Briik cuando tú lo pides. Menos espacio, menos energía, más eficiencia.
                        </p>
                    </ScrollReveal>

                    {/* Card 4: Huella de Carbono */}
                    <ScrollReveal delay={400} className="bg-white p-8 rounded-3xl shadow-lg border border-teal-100 hover:shadow-xl transition-shadow group">
                        <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                            <i className="fa-solid fa-earth-americas"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-800">Huella Mínima</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Al fabricar bajo demanda y sin desperdicios (solo usamos el material necesario), reducimos drásticamente la huella de carbono comparado con la inyección de plástico tradicional.
                        </p>
                    </ScrollReveal>
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200 text-gray-500 text-sm">
                        <i className="fa-solid fa-recycle text-green-500"></i>
                        <span>Diseñado y fabricado en España con ❤️</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sustainability;
