import { component$ } from "@builder.io/qwik";
import { Link } from '@builder.io/qwik-city';

type Tech = 'React' | 'Redux' | 'TypeScript' | 'JavaScript' | 'Qwik.js'

function getColorStack(tech: Tech): string {
    const colors: Record<Tech, string> = {
        React: 'bg-[#61dafb]',
        Redux: 'bg-[#764abc]',
        TypeScript: 'bg-[#3178c6]',
        JavaScript: 'bg-[#f7df1e]',
        'Qwik.js': 'bg-[#f7df1e]',
    }
    return colors[tech] || '#3178c6';
}

interface ProjectProps {
    title: string;
    description: string;
    github?: string;
    demo?: string;
    stack?: Tech[];
}

export default component$<ProjectProps>((props) => {
    return (
        <Link
            class="border-neutral-150 grid gap-2.5 rounded-lg border p-4 transition-colors shadow hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
            href={props.demo || props.github}
        >
            <p class="font-semibold">{props.title}</p>
            <p class="text-sm opacity-70">{props.description}</p>
            <div class="flex items-center gap-2">
                {props.stack?.map((tech) => (
                    <>
                        <div class={`h-2 w-2 rounded-full ${getColorStack(tech)}`}></div>
                        <span class="opacity-70">{tech}</span>
                    </>
                ))}
            </div>
        </Link>
    );
});
