import { component$ } from "@builder.io/qwik";
import Project from "~/components/Project";
import { _ } from "compiled-i18n";

export default component$(() => {
    const projects = [
        {
            id: 1,
            title: 'Geounity',
            description: 'Sitio web personal contruido con Qwik.js',
            github: 'https://github.com/sebacc92/sebastiancardoso.com',
            stack: ['Qwik.js', 'TypeScript', 'TailwindCSS', 'FastAPI']
        },
        {
            id: 2,
            title: 'Reversi Game',
            description: 'Classic 8x8 game with a smooth and responsive interface. 🎮',
            github: 'https://github.com/sebacc92/Reversi-Game',
            demo: 'https://reversi-game.sebastiancardoso92.now.sh',
            stack: ['React', 'Redux']
        },
        {
            id: 3,
            title: 'Resto Simple',
            description: 'Gestion de pedidos gastronomicos para restaurantes. 🍔',
            demo: 'https://restosimple.com/',
            stack: ['React', 'Redux', 'Cypress']
        }
    ]
    return (
        <div class="flex-grow m-[0_auto] max-w-4xl px-6 sm:px-4 ">
            <main class="mt-4">
                <h1 class="font-bold text-2xl my-2">{_`Projects`}</h1>
                <div class="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3">
                    {projects.map(project => (
                        <Project
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            demo={project.demo}
                            github={project.github}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
});
