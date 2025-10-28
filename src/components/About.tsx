import type { FC } from "react";
import * as React from "react";

const About: FC = () => {
    return (
        <section id="about" className="mb-8 bg-white rounded-2xl shadow-soft p-6">
            <h3 className="text-xl font-semibold">Sobre mim</h3>
            <p className="mt-3 text-[#444] leading-relaxed">
                Profissional em início de carreira, com experiência como Jovem Aprendiz na
                Stellantis. Tenho facilidade para aprender novas tecnologias e gosto de unir
                design e tecnologia para criar experiências limpas e acessíveis.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h4 className="font-medium">Interesses</h4>
                    <ul className="mt-2 text-sm text-[#555]">
                        <li>Desenvolvimento Web</li>
                        <li>Design</li>
                        <li>Administração</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-medium">Idiomas</h4>
                    <ul className="mt-2 text-sm text-[#555]">
                        <li>Português — Nativo</li>
                        <li>Inglês — Avançado</li>
                        <li>Espanhol — Avançado</li>
                        <li>Alemão/Italiano/Francês — Básico</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;