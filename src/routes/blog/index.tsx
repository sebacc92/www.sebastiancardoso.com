import { component$ } from '@builder.io/qwik';
import { Link, type DocumentHead } from '@builder.io/qwik-city';
import { _ } from 'compiled-i18n';

const Blog = component$(() => {
    const articles = [
        {
            id: 1,
            title: 'Hello World',
            date: 'Oct 04',
            slug: 'hello-world'
        }
    ]
    return (
        <div class="flex-grow m-[0_auto] max-w-4xl px-6 sm:px-4 ">
            <main class="mt-4">
                <h1 class="font-bold text-2xl my-2">{_`Blog`}</h1>
                <ul class="w-96">
                    {articles.map(article => (
                        <li key={`article-${article.id}`} class="border-b border-b-gray-400 py-4">
                            <Link href={`/blog/${article.slug}`} class="flex justify-between">
                                <div>{article.title}</div>
                                <div>{article.date}</div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
});

export default Blog;

export const head: DocumentHead = {
    title: 'Sebastian Cardoso | Blog',
};
