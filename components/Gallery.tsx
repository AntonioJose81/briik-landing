import React from 'react';
import ScrollReveal from './ScrollReveal';

const Gallery: React.FC = () => {
    return (
        <section id="galeria" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <ScrollReveal className="mb-12">
                    <h2 className="text-4xl font-heading font-bold text-center">Mucho más que un soporte</h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[800px]">

                    {/* Item Grande 1 */}
                    <ScrollReveal className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden shadow-lg group h-96 md:h-full">
                        <img
                            src="/images/3.jpg"
                            alt="Diseño Verde"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                            <h3 className="text-white text-3xl font-heading font-bold mb-2">Diseño Verde</h3>
                            <p className="text-white/90">Elegante y divertido.</p>
                        </div>
                    </ScrollReveal>

                    {/* Item Pequeño 1 */}
                    <ScrollReveal delay={100} className="relative rounded-3xl overflow-hidden shadow-lg group h-64 md:h-full">
                        <img
                            src="/images/4.jpg"
                            alt="Spiderman"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                            <h3 className="text-white text-3xl font-heading font-bold mb-2">Héroe Araña</h3>
                            <p className="text-white/90">Tu amigo y vecino.</p>
                        </div>
                    </ScrollReveal>

                    {/* Item Pequeño 2 */}
                    <ScrollReveal delay={200} className="relative rounded-3xl overflow-hidden shadow-lg group h-64 md:h-full">
                        <img
                            src="/images/5.jpg"
                            alt="Batman"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                            <h3 className="text-white text-3xl font-heading font-bold mb-2">Héroe Murciélago</h3>
                            <p className="text-white/90">El caballero oscuro.</p>
                        </div>
                    </ScrollReveal>

                </div>
            </div>
        </section>
    );
};

export default Gallery;