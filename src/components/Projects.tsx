import { component$ } from "@builder.io/qwik";
import Project from "~/components/Project";
import { _ } from "compiled-i18n";

export default component$(() => {
    const myProjects = [
        {
            id: 1,
            title: 'Geounity',
            description: 'Sitio web personal construido con Qwik.js para transformar comunidades.',
            demo: 'https://geounity.org',
            stack: ['Qwik.js', 'TypeScript', 'TailwindCSS', 'FastAPI'],
            imgSrc: '/projects/geounity.webp',
            additionalLinks: [
                { label: 'Documentación', url: 'https://geounity.org/docs' },
                { label: 'Blog', url: 'https://geounity.org/blog' }
            ]
        },
        {
            id: 2,
            title: 'Reversi Game',
            description: 'Classic 8x8 game with a smooth and responsive interface. 🎮',
            github: 'https://github.com/sebacc92/Reversi-Game',
            demo: 'https://reversi-game.sebastiancardoso92.now.sh',
            stack: ['React', 'Redux'],
            imgSrc: '/projects/reversi.webp',
        },
    ];

    const workProjects = [
        {
            id: 3,
            title: 'Ercon SRL',
            description: 'Sitio web corporativo para empresa de construcción.',
            demo: 'https://erconsrl.com.ar/',
            stack: ['React', 'Redux', 'Next SSG']
        },
        {
            id: 2,
            title: 'Resto Simple',
            description: 'Gestion de pedidos gastronomicos para restaurantes. 🍔',
            demo: 'https://restosimple.com/',
            stack: ['React', 'Redux', 'Cypress']
        },
        {
            id: 5,
            title: 'Iglobal',
            description: 'Plataforma desarrollada para comercio internacional.',
            demo: 'https://iglobal.co/',
            stack: ['React', 'Node', 'MongoDB']
        }
    ];

    return (
        <div class="flex-grow m-[0_auto] max-w-4xl px-6 sm:px-4 ">
            <main class="my-8">
                {/* Sección de mis proyectos */}
                <h2 class="font-semibold text-3xl underline text-center mt-8 mb-4">{_`Mis Proyectos`}</h2>
                <div class="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3 justify-center">
                    {myProjects.map(project => (
                        <Project
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            demo={project.demo}
                            github={project.github}
                            imgSrc={project.imgSrc}
                        />
                    ))}
                </div>

                {/* Sección de experiencia laboral */}
                <h2 class="font-semibold text-xl mt-8 mb-2">{_`Experiencia Laboral`}</h2>
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