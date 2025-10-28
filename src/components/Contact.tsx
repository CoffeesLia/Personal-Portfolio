import type { FC } from "react";

const Contact: FC = () => {
    return (
        <section id="contact" className="mb-12 bg-white rounded-2xl shadow-soft p-6">
            <h3 className="text-xl font-semibold">Contato</h3>
            <p className="mt-3 text-sm text-[#555]">Belo Horizonte, MG</p>
            <p className="mt-1 text-sm">
                Email: <a href="mailto:cpm72@proton.me" className="underline">cpm72@proton.me</a>
            </p>
            <div className="mt-6 flex gap-3">
                <a href="#" className="text-sm underline">GitHub</a>
                <a href="#" className="text-sm underline">LinkedIn</a>
                <a href="#" className="text-sm underline">Instagram</a>
            </div>
        </section>
    );
};

export default Contact;