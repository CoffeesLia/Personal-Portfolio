import type { FC } from "react";

const Hero: FC = () => {
    return (
        <section className="bg-white rounded-2xl shadow-soft p-8 lg:p-12 mb-8">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex-1">
                    <p className="text-sm">Olá — eu sou</p>
                    <h2 className="text-3xl lg:text-4xl font-bold mt-2">Cecília Pereira</h2>
                    <p className="mt-4 text-[#555] leading-relaxed">
                        Profissional em início de carreira — desenvolvimento web e design.
                        Experiência como Jovem Aprendiz na Stellantis. Comunicativa, organizada
                        e com vontade de aprender e crescer.
                    </p>
                    <div className="mt-6 flex gap-3">
                        <a
                            href="#projects"
                            className="px-4 py-2 rounded-lg shadow-sm text-sm border border-transparent hover:bg-[#EFE6D9]"
                        >
                            Ver projetos
                        </a>
                        <a
                            href="#contact"
                            className="px-4 py-2 rounded-lg text-sm border border-[#D8C7B0] hover:bg-[#F0E9DD]"
                        >
                            Me contrate
                        </a>
                    </div>
                </div>

                <div className="w-48 h-48 rounded-2xl bg-[#F1E9E2] flex items-center justify-center">
                    <div className="text-center p-4">
                        <div className="w-20 h-20 rounded-full bg-[#E7DFD5] mx-auto mb-2"></div>
                        <small className="block text-xs text-[#666]">Avatar aqui</small>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;