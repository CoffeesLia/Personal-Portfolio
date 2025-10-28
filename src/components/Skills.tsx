import type { FC } from "react";

// Definindo a interface para um item de Habilidade
interface ISkill {
    name: string;
    level: number;
}

const skills: ISkill[] = [
    { name: "React.js", level: 70 },
    { name: "C# / .NET", level: 50 },
    { name: "Photoshop / Illustrator / Canva", level: 70 },
    { name: "Design Responsivo", level: 65 },
    { name: "Microsoft Office / Google Workspace", level: 75 },
];

const Skills: FC = () => {
    return (
        <section id="skills" className="mb-8 bg-white rounded-2xl shadow-soft p-6">
            <h3 className="text-xl font-semibold">Habilidades</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((s) => (
                    <div key={s.name} className="p-3 border rounded-lg bg-[#FBF9F6]">
                        <div className="flex justify-between items-center">
                            <div className="font-medium">{s.name}</div>
                            <div className="text-sm text-[#777]">{s.level}%</div>
                        </div>
                        <div className="mt-2 h-2 bg-[#E8E2D8] rounded-full overflow-hidden">
                            <div
                                className="h-full bg-[#C2A887] rounded-full"
                                style={{ width: `${s.level}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;