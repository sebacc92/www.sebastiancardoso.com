import { component$, Slot } from '@builder.io/qwik';
import { Link, type DocumentHead } from '@builder.io/qwik-city';
import { _ } from 'compiled-i18n';
import { Breadcrumb } from '~/components/ui';

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
            <Slot />
        </div>
    );
});

export default Blog;

export const head: DocumentHead = {
    title: 'Sebastian Cardoso | Blog',
};
