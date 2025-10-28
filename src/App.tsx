import type { FC } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import * as React from "react";

const App: FC = () => {
    return (
        <div className="min-h-screen bg-[#F7F3EE] text-[#2B2B2B] antialiased">
            <Header />
            <main className="max-w-4xl mx-auto px-6 pb-24">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>
            <footer className="text-center py-8 text-sm text-[#666]">
                © {new Date().getFullYear()} Cecília Pereira • Feito com ☕ e React
            </footer>
        </div>
    );
};

export default App;