import React, { useState } from 'react';

const SavingsCalculator: React.FC = () => {
    const [spillsPerWeek, setSpillsPerWeek] = useState(3);

    // Constants for calculation (Annual basis)
    const WEEKS_PER_YEAR = 52;
    const MINUTES_PER_SPILL = 20; // Cleaning + changing clothes + soothing child
    const LOADS_PER_SPILL = 0.25; // 1 extra laundry load every 4 spills
    const LITERS_PER_LOAD = 50;
    const COST_PER_SPILL = 2.5; // Laundry energy + water + detergent + wipes + potential stained clothes value

    // Calculations
    const annualSpills = spillsPerWeek * WEEKS_PER_YEAR;
    const hoursSaved = Math.round((annualSpills * MINUTES_PER_SPILL) / 60);
    const moneySaved = Math.round(annualSpills * COST_PER_SPILL);
    const loadsSaved = Math.round(annualSpills * LOADS_PER_SPILL);
    const waterSaved = Math.round(loadsSaved * LITERS_PER_LOAD);

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-brand-yellow/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6">
                        ¿Cuánto te cuesta <span className="text-brand-pink">NO</span> tener un Briik?
                    </h2>
                    <p className="text-xl text-gray-600">
                        Los "accidentes" con el zumo no solo manchan... también gastan tu tiempo y tu dinero.
                        Calcula cuánto podrías ahorrarte al año.
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden max-w-5xl mx-auto flex flex-col md:flex-row">

                    {/* Input Section */}
                    <div className="p-8 md:p-12 bg-gray-50 md:w-2/5 flex flex-col justify-center">
                        <label htmlFor="spills-slider" className="block text-xl font-bold text-gray-700 mb-8 text-center">
                            ¿Cuántas veces se cae el zumo o la leche a la semana?
                        </label>

                        <div className="flex items-center justify-center mb-6">
                            <span className="text-6xl font-heading font-bold text-brand-blue">{spillsPerWeek}</span>
                            <span className="text-xl text-gray-500 ml-2 font-bold">veces</span>
                        </div>

                        <input
                            id="spills-slider"
                            type="range"
                            min="0"
                            max="10"
                            step="1"
                            value={spillsPerWeek}
                            onChange={(e) => setSpillsPerWeek(parseInt(e.target.value))}
                            className="w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-blue hover:accent-brand-pink transition-all"
                        />
                        <div className="flex justify-between text-xs text-gray-400 mt-2 font-bold">
                            <span>0 (¡Imposible!)</span>
                            <span>10 (¡Socorro!)</span>
                        </div>

                        <p className="mt-8 text-sm text-gray-500 text-center italic">
                            *Basado en estimaciones medias de limpieza, lavadoras y ropa estropeada.
                        </p>
                    </div>

                    {/* Results Section */}
                    <div className="p-8 md:p-12 md:w-3/5 bg-brand-blue text-white flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-30"></div>

                        <h3 className="text-2xl font-bold mb-8 text-center relative z-10">Con Briik, al año ahorras:</h3>

                        <div className="grid grid-cols-2 gap-6 relative z-10">
                            {/* Money */}
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 text-center transform hover:scale-105 transition-transform">
                                <div className="text-3xl mb-2">💰</div>
                                <div className="text-3xl md:text-4xl font-heading font-bold text-brand-yellow">{moneySaved}€</div>
                                <div className="text-sm md:text-base opacity-90">en ropa y limpieza</div>
                            </div>

                            {/* Time */}
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 text-center transform hover:scale-105 transition-transform">
                                <div className="text-3xl mb-2">⏳</div>
                                <div className="text-3xl md:text-4xl font-heading font-bold text-brand-yellow">{hoursSaved}h</div>
                                <div className="text-sm md:text-base opacity-90">de tiempo libre</div>
                            </div>

                            {/* Laundry */}
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 text-center transform hover:scale-105 transition-transform">
                                <div className="text-3xl mb-2">🧺</div>
                                <div className="text-3xl md:text-4xl font-heading font-bold text-brand-yellow">{loadsSaved}</div>
                                <div className="text-sm md:text-base opacity-90">lavadoras menos</div>
                            </div>

                            {/* Water */}
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 text-center transform hover:scale-105 transition-transform">
                                <div className="text-3xl mb-2">💧</div>
                                <div className="text-3xl md:text-4xl font-heading font-bold text-brand-yellow">{waterSaved}L</div>
                                <div className="text-sm md:text-base opacity-90">de agua potable</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SavingsCalculator;
