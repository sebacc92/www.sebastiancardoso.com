import { component$ } from "@builder.io/qwik";
import { _ } from "compiled-i18n";
import { Card, Heading } from 'flowbite-qwik'

type Tech = 'React' | 'Redux' | 'TypeScript' | 'JavaScript' | 'Qwik.js'

interface ProjectProps {
    title: string;
    description: string;
    github?: string;
    demo?: string;
    stack?: Tech[];
    imgSrc?: string;
    additionalLinks?: { label: string; url: string }[];
}

export default component$<ProjectProps>((props) => {
    return (
        <Card
            class="max-w-sm border border-gray-200 shadow-lg dark:border-gray-700 dark:shadow-md"
            imgAlt="Project image"
            imgSrc={props.imgSrc}
            theme={{
                root: 'bg-white dark:bg-gray-900',
                image: 'h-48 object-cover rounded-t-lg',
                content: 'p-4',
            }}
        >
            <Heading tag="h4" class="text-xl font-bold text-gray-900 dark:text-white">
                {props.title}
            </Heading>
            <p class="font-normal text-gray-700 dark:text-gray-400 mb-4">
                {props.description}
            </p>
            <div class="flex gap-4">
                {props.demo && (
                    <a
                        class="text-blue-600 dark:text-blue-400 hover:underline"
                        href={props.demo}
                    >
                        {_`Ver demo`}
                    </a>
                )}
                {props.github && (
                    <a
                        class="text-blue-600 dark:text-blue-400 hover:underline"
                        href={props.github}
                    >
                        {_`Ver código`}
                    </a>
                )}
            </div>
        </Card>

    );
});

