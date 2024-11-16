import { component$ } from "@builder.io/qwik";
import Project from "~/components/Project";
import { _ } from "compiled-i18n";

export default component$(() => {
    const myProjects = [
        {
            id: 1,
            title: 'Geounity',
            description: 'Sitio web personal contruido con Qwik.js',
            github: 'https://geounity.org',
            stack: ['Qwik.js', 'TypeScript', 'TailwindCSS', 'FastAPI']
        },
        {
            id: 4,
            title: 'Reversi Game',
            description: 'Classic 8x8 game with a smooth and responsive interface. 🎮',
            github: 'https://github.com/sebacc92/Reversi-Game',
            demo: 'https://reversi-game.sebastiancardoso92.now.sh',
            stack: ['React', 'Redux']
        },
    ];

    const workProjects = [
        {
            id: 2,
            title: 'Resto Simple',
            description: 'Gestion de pedidos gastronomicos para restaurantes. 🍔',
            demo: 'https://restosimple.com/',
            stack: ['React', 'Redux', 'Cypress']
        },
        {
            id: 5,
            title: 'iglobal.co',
            description: 'Plataforma desarrollada para comercio internacional.',
            demo: 'https://iglobal.co/',
            stack: ['React', 'Node', 'MongoDB']
        },
    ];

    return (
        <div class="flex-grow m-[0_auto] max-w-4xl px-6 sm:px-4 ">
            <main class="mt-4">
                {/* Sección de mis proyectos */}
                <h2 class="font-semibold text-xl mt-4">{_`Mis Proyectos`}</h2>
                <div class="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3">
                    {myProjects.map(project => (
                        <Project
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            demo={project.demo}
                            github={project.github}
                        />
                    ))}
                </div>

                {/* Sección de experiencia laboral */}
                <h2 class="font-semibold text-xl mt-8">{_`Experiencia Laboral`}</h2>
                <div class="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3">
                    {workProjects.map(project => (
                        <Project
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            demo={project.demo}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
});
