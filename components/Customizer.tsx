import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { ProductColor } from '../types';

const COLORS: ProductColor[] = [
    { id: 'green', name: 'Verde Intenso', hex: '#22c55e', className: 'bg-green-500', borderColorClass: 'border-green-500', ringColorClass: 'ring-green-200', imageSrc: '/images/6.jpg' },
    { id: 'pink', name: 'Rosa Pastel', hex: '#f9a8d4', className: 'bg-pink-300', borderColorClass: 'border-pink-300', ringColorClass: 'ring-pink-200', imageSrc: '/images/6.jpg' },
    { id: 'blue', name: 'Azul Turquesa', hex: '#22d3ee', className: 'bg-cyan-400', borderColorClass: 'border-cyan-400', ringColorClass: 'ring-cyan-200', imageSrc: '/images/6.jpg' },
    { id: 'black', name: 'Negro Noche', hex: '#111827', className: 'bg-gray-900', borderColorClass: 'border-gray-900', ringColorClass: 'ring-gray-400', imageSrc: '/images/6.jpg' },
    { id: 'red', name: 'Rojo Fuego', hex: '#ef4444', className: 'bg-red-500', borderColorClass: 'border-red-500', ringColorClass: 'ring-red-200', imageSrc: '/images/6.jpg' },
];

const Customizer: React.FC = () => {
    const [selectedColor, setSelectedColor] = useState<ProductColor>(COLORS[0]);
    const [name, setName] = useState('');
    // const [isAnimating, setIsAnimating] = useState(false); // Removed animation state as image is static

    const handleColorChange = (color: ProductColor) => {
        if (selectedColor.id === color.id) return;
        // setIsAnimating(true);
        // setTimeout(() => {
        setSelectedColor(color);
        // setIsAnimating(false);
        // }, 300);
    };

    const scrollToPreorder = () => {
        document.getElementById('preorder-area')?.scrollIntoView({ behavior: 'smooth' });
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
                            {/* Overlay simulating product color on image if we had transparent PNGs. For now, we use different picsum images and border color */}
                            <div className={`relative overflow-hidden rounded-2xl shadow-xl border-4 border-white transition-all duration-300`}>
                                <img
                                    src="/images/6.jpg"
                                    alt="Preview Personalizada"
                                    className={`w-full h-auto object-cover aspect-[4/3] transform transition-all duration-300`}
                                />
                                {name && (
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur px-6 py-2 rounded-lg font-heading font-bold text-2xl text-gray-800 shadow-lg border-2 border-white transform -rotate-6">
                                        {name}
                                    </div>
                                )}
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

                        {/* Name Input */}
                        <div className="mb-8">
                            <h3 className="font-bold text-gray-800 mb-2">Nombre del peque:</h3>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Ej: LUCAS"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-6 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-blue focus:outline-none font-heading font-bold text-gray-700 bg-gray-50 transition-colors"
                                />
                            </div>
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200 inline-block mb-6">
                            <p className="text-sm text-yellow-800 flex items-center gap-2">
                                <i className="fa-solid fa-leaf"></i> <strong>Material PLA:</strong> Plástico biodegradable a base de maíz.
                            </p>
                        </div>

                        <button onClick={scrollToPreorder} className="w-full bg-brand-dark hover:bg-black text-white font-heading font-bold text-lg py-4 px-8 rounded-2xl shadow-xl transition-all">
                            Personalizar y Pedir Ahora
                        </button>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default Customizer;