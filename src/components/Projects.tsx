import type { FC } from "react";

// Definindo a interface para um item de Projeto
interface IProject {
    title: string;
    description: string;
    link: string;
}

const projects: IProject[] = [
    {
        title: "Geekie — Projeto Acadêmico",
        description:
            "Modelo educacional — pesquisa e apresentação sobre metodologias ativas.",
        link: "",
    },
    {
        title: "Cérebro e Emoções",
        description: "Trabalho interdisciplinar com design visual e narrativa.",
        link: "",
    },
    {
        title: "Empresa Júnior Escolar",
        description: "Participação em organização e gestão de um projeto estudantil.",
        link: "",
    },
];

const Projects: FC = () => {
    return (
        <section id="projects" className="mb-8 bg-white rounded-2xl shadow-soft p-6">
            <h3 className="text-xl font-semibold">Projetos</h3>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                {projects.map((p) => (
                    <article key={p.title} className="p-4 border rounded-lg bg-[#FBF9F6] flex flex-col">
                        <h4 className="font-medium">{p.title}</h4>
                        <p className="text-sm mt-2 text-[#555] flex-1">{p.description}</p>
                        <div className="mt-4">
                            {p.link ? (
                                <a href={p.link} className="text-sm underline" target="_blank" rel="noreferrer">
                                    Ver projeto
                                </a>
                            ) : (
                                <span className="text-xs text-[#999]">Link não disponível</span>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Projects;