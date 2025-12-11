import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { ProductColor } from '../types';

const COLORS: ProductColor[] = [
    { id: 'neo-green', name: 'Neo Green', hex: '#2ECA5F', className: 'bg-[#2ECA5F]', borderColorClass: 'border-[#2ECA5F]', ringColorClass: 'ring-[#2ECA5F]', imageSrc: '/images/6.jpg' },
    { id: 'neo-pink', name: 'Neo Pink', hex: '#FF3D9E', className: 'bg-[#FF3D9E]', borderColorClass: 'border-[#FF3D9E]', ringColorClass: 'ring-[#FF3D9E]', imageSrc: '/images/6.jpg' },
    { id: 'mint', name: 'Mint', hex: '#C6F2D5', className: 'bg-[#C6F2D5]', borderColorClass: 'border-[#C6F2D5]', ringColorClass: 'ring-[#C6F2D5]', imageSrc: '/images/6.jpg' },
    { id: 'quartz', name: 'Quartz', hex: '#F4C7D7', className: 'bg-[#F4C7D7]', borderColorClass: 'border-[#F4C7D7]', ringColorClass: 'ring-[#F4C7D7]', imageSrc: '/images/6.jpg' },
    { id: 'blue-glitter', name: 'Blue Glitter', hex: '#416D91', className: 'bg-[#416D91]', borderColorClass: 'border-[#416D91]', ringColorClass: 'ring-[#416D91]', imageSrc: '/images/6.jpg' },
    { id: 'silver-glitter', name: 'Silver Glitter', hex: '#C0C4CC', className: 'bg-[#C0C4CC]', borderColorClass: 'border-[#C0C4CC]', ringColorClass: 'ring-[#C0C4CC]', imageSrc: '/images/6.jpg' },
];

// Mensaje genérico para WhatsApp
const WHATSAPP_MESSAGE = '¡Hola! Me interesa comprar un Briik. ¿Podrían darme más información?';
const WHATSAPP_NUMBER = '34690639712';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const Customizer: React.FC = () => {
    const [selectedColor, setSelectedColor] = useState<ProductColor>(COLORS[0]);

    const handleColorChange = (color: ProductColor) => {
        if (selectedColor.id === color.id) return;
        setSelectedColor(color);
    };

    // Handler genérico para abrir WhatsApp
    const openWhatsApp = () => {
        window.open(WHATSAPP_URL, '_blank');
    };

    return (
        <section id="personalizar" className="py-20 bg-white relative overflow-hidden">
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Interactive Preview */}
                    <ScrollReveal className="order-2 lg:order-1">
                        <div className="relative">
                            <div className={`relative overflow-hidden rounded-2xl shadow-xl border-4 border-white transition-all duration-300`}>
                                <img
                                    src="/images/6.jpg"
                                    alt="Preview Personalizada"
                                    className={`w-full h-auto object-cover aspect-[4/3] transform transition-all duration-300`}
                                />
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Controls */}
                    <ScrollReveal delay={200} className="order-1 lg:order-2">
                        <span className="text-brand-pink font-bold tracking-wider uppercase text-sm">Hazlo Único</span>
                        <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 text-gray-900">Totalmente <br />Personalizable</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            No hay dos niños iguales, ¡ni dos Briiks iguales! Elige su color favorito y añade su nombre o su personaje preferido.
                        </p>

                        {/* Color Picker */}
                        <div className="mb-8">
                            <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <i className="fa-solid fa-palette text-gray-400"></i> Elige un color:
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {COLORS.map((color) => (
                                    <button
                                        key={color.id}
                                        onClick={() => handleColorChange(color)}
                                        aria-label={`Select ${color.name}`}
                                        className={`w-12 h-12 rounded-full border-4 border-white shadow-md hover:scale-110 transition-transform focus:outline-none focus:ring-4 ${color.className} ${color.ringColorClass} ${selectedColor.id === color.id ? 'scale-110 ring-4' : ''}`}
                                    ></button>
                                ))}
                            </div>
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200 inline-block mb-6">
                            <p className="text-sm text-yellow-800 flex items-center gap-2">
                                <i className="fa-solid fa-leaf"></i> <strong>Material PLA:</strong> Plástico biodegradable a base de maíz.
                            </p>
                        </div>

                        <div id="preorder-area" className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            {/* Pack Individual */}
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white border-2 border-gray-100 hover:border-brand-yellow p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all flex flex-col justify-between text-left h-full relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 bg-green-100 text-green-700 text-xs font-bold px-4 py-1 rounded-bl-2xl">
                                    Envío Gratis
                                </div>

                                <div className="mb-4">
                                    <h3 className="text-2xl font-heading font-bold text-gray-800 mb-2">Pack Individual</h3>
                                    <p className="text-gray-500 font-medium">1 Briik Personalizado</p>
                                </div>

                                <div className="mt-auto">
                                    <div className="text-4xl font-heading font-bold text-gray-900 mb-4">19,90€</div>
                                    <div className="w-full bg-brand-yellow text-brand-dark font-bold py-3 rounded-xl text-center group-hover:scale-105 transition-transform flex items-center justify-center gap-2">
                                        <i className="fa-brands fa-whatsapp text-xl"></i>
                                        <span>Pedir por WhatsApp</span>
                                    </div>
                                </div>
                            </a>

                            {/* Pack Amigos */}
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-brand-blue border-4 border-brand-blue hover:border-brand-pink p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between text-left h-full relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 bg-brand-pink text-white text-xs font-bold px-4 py-1 rounded-bl-2xl z-10">
                                    ¡Mejor Opción!
                                </div>
                                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

                                <div className="mb-4 relative z-10">
                                    <h3 className="text-2xl font-heading font-bold text-white mb-2">Pack Amigos</h3>
                                    <p className="text-blue-100 font-medium">3 Briiks Personalizados</p>
                                    <span className="inline-block mt-2 bg-white/20 text-white text-xs font-bold px-2 py-1 rounded-lg">Envío Gratis</span>
                                </div>

                                <div className="mt-auto relative z-10">
                                    <div className="text-4xl font-heading font-bold text-white mb-4">49,90€</div>
                                    <div className="w-full bg-white text-brand-blue font-bold py-3 rounded-xl text-center group-hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-lg">
                                        <i className="fa-brands fa-whatsapp text-xl"></i>
                                        <span>Pedir por WhatsApp</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default Customizer;