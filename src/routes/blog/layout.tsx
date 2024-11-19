import { component$, Slot } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';

const Blog = component$(() => {
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
