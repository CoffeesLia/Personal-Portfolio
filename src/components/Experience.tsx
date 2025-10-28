import type { FC } from "react";
import * as React from "react";

const Experience: FC = () => {
    return (
        <section id="experience" className="mb-8 bg-white rounded-2xl shadow-soft p-6">
            <h3 className="text-xl font-semibold">Experiência</h3>
            <div className="mt-4 p-4 border rounded-lg bg-[#FBF9F6]">
                <div className="flex justify-between items-start">
                    <div>
                        <strong>Stellantis — Jovem Aprendiz</strong>
                        <div className="text-sm text-[#555]">
                            Atividades administrativas e aprendizado corporativo
                        </div>
                    </div>
                    <div className="text-sm text-[#777]">2022</div>
                </div>
            </div>
        </section>
    );
};

export default Experience;