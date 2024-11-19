import { component$ } from '@builder.io/qwik';
import { Link, type DocumentHead } from '@builder.io/qwik-city';
import { _ } from 'compiled-i18n';

const Blog = component$(() => {
    const articles = [
        {
            id: 7,
            title: '🔥 Construyendo una Aplicación Web con Qwik y Firebase',
            date: 'Oct 11',
            slug: 'mi-experiencia-con-qwik-innovando-en-el-frontend'
        },
        {
            id: 6,
            title: '🏎️ Performance Web: Cómo Hacer que tu App Vuele',
            date: 'Oct 09',
            slug: 'performance-web-como-hacer-que-tu-app-vuele'
        },
        {
            id: 5,
            title: '🚀 Dominando Next.js: SSR, SPA y SSG Sin Complicaciones',
            date: 'Oct 08',
            slug: 'dominando-nextjs-ssr-spa-ssg-sin-complicaciones'
        },
        {
            id: 4,
            title: '📚 Introducción a Frameworks JavaScript: React, Angular, Vue, Qwik, y otros',
            date: 'Oct 07',
            slug: 'introduccion-a-frameworks-javascript-react-angular-vue-qwik-y-otros'
        },
        {
            id: 2,
            title: '🏆 Mejorando la Experiencia del Usuario: Tips desde el Frontend',
            date: 'Oct 05',
            slug: 'mejorando-la-experiencia-del-usuario-tips-desde-el-frontend'
        },
        {
            id: 1,
            title: '🚀 Construyendo Interfaces Ultrarrápidas con Qwik y Tailwind',
            date: 'Oct 04',
            slug: 'construyendo-interfaces-ultrarrapidas-con-qwik-y-tailwind'
        }
    ]
    return (
        <main class="mt-4 px-6 sm:px-4">
            <h1 class="font-bold text-2xl my-2">{_`Blog`}</h1>
            <ul>
                {articles.map(article => (
                    <li key={`article-${article.id}`} class="border-b border-b-gray-400 py-4 hover:font-black">
                        <Link href={`/blog/${article.slug}`} class="flex justify-between gap-12 sm:gap-20 md:gap-28 lg:gap-40">
                            <div>{article.title}</div>
                            <div class="text-sm whitespace-nowrap">{article.date}</div>
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
});

export default Blog;

export const head: DocumentHead = {
    title: 'Sebastian Cardoso | Blog',
};
