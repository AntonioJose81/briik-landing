import React from 'react';

const StoryPage: React.FC = () => {
    return (
        <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-blue mb-8 text-center">
                    Así nació Briik
                </h1>

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                    <div className="md:h-96 overflow-hidden relative group">
                        <img
                            src="/antonio-story.jpg"
                            alt="Antonio y el taller de Briik"
                            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                            <p className="text-white p-6 md:p-8 font-bold text-lg md:text-xl italic opacity-90">
                                "Cuando vemos un problema, nos sale la vena maker."
                            </p>
                        </div>
                    </div>

                    <div className="p-8 md:p-12 space-y-6 text-lg text-gray-700 leading-relaxed">
                        <p>
                            Soy Antonio, papá de Carla y creador de Briik (aunque la idea buena, la de verdad, fue de mi mujer, Sara).
                        </p>

                        <p>
                            Briik nació en uno de esos momentos que todos los padres conocemos: Carla, en su trona, feliz con su brick de zumo en la mano… hasta que lo apretaba con todas sus fuerzas y aquello se convertía en un pequeño desastre pegajoso sobre la mesa, la ropa y medio salón. Podíamos haber asumido que “son cosas de niños”, pero en casa tenemos un problema: cuando vemos un problema, nos sale la vena maker.
                        </p>

                        <div className="border-l-4 border-brand-yellow pl-6 py-4 my-8 bg-yellow-50 rounded-r-xl">
                            <p className="font-bold text-brand-dark italic text-xl">
                                Sara fue la primera en decirlo:<br />
                                <span className="text-brand-blue">“¿Y si hacemos algo en 3D para que no pueda apretar el brick?”</span>
                            </p>
                        </div>

                        <p>
                            Yo llevaba años diseñando y fabricando en 3D, así que esa frase fue el pistoletazo de salida. Empezamos a probar diseños, a imprimir prototipos, a ajustarlos milímetro a milímetro hasta que dimos con algo sencillo, robusto y, sobre todo, útil: un soporte para zumos y leche que evita que los peques estrujen el envase… y que los padres tengamos que salir corriendo con la bayeta cada dos minutos.
                        </p>

                        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                            <p className="mb-2">
                                <span className="font-bold text-brand-blue text-xl">Eso es Briik:</span>
                            </p>
                            <p>
                                Un pequeño invento nacido en nuestra cocina, pensado para familias reales, creado con cariño y con la cabeza de un ingeniero pero el corazón de unos padres cansados de fregar.
                            </p>
                        </div>

                        <p className="font-heading font-bold text-2xl text-brand-pink mt-8 text-center animate-pulse">
                            Si en tu casa también hay peques, bricks y misteriosas manchas pegajosas… Briik está hecho para vosotros.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoryPage;
