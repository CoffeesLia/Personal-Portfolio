import type { FC } from "react";
import * as React from "react";

const Header: FC = () => {
    return (
        <header className="max-w-4xl mx-auto p-6 lg:p-12">
            <nav className="flex items-center justify-between">
                <h1 className="text-2xl lg:text-3xl font-semibold tracking-tight">
                    🌙 Ceci — Portfólio
                </h1>
                <div className="hidden md:flex gap-4">
                    <a href="#about" className="hover:underline">
                        Sobre
                    </a>
                    <a href="#projects" className="hover:underline">
                        Projetos
                    </a>
                    <a href="#contact" className="hover:underline">
                        Contato
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;