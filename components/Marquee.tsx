import React from 'react';

const Marquee: React.FC = () => {
    return (
        <div className="bg-brand-dark py-4 overflow-hidden transform -rotate-1 origin-left scale-105 border-y-4 border-brand-yellow">
            <div className="whitespace-nowrap animate-marquee flex gap-8 text-white font-heading font-bold text-xl uppercase tracking-widest w-max">
                {Array(6).fill(null).map((_, i) => (
                    <React.Fragment key={i}>
                        <span>⚡ Antiderrames ⚡</span>
                        <span>🌿 Biodegradable 🌿</span>
                        <span>🎨 Personalizable 🎨</span>
                        <span>💪 Irrompible 💪</span>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Marquee;