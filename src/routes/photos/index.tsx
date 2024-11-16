import { component$, useSignal, useStylesScoped$ } from '@builder.io/qwik';
import styles from './photos.css?inline';
import Photo1 from '~/media/photos/photo-1.jpg?jsx';
import Photo2 from '~/media/photos/photo-2.jpg?jsx';
import Photo3 from '~/media/photos/photo-3.jpg?jsx';
import Photo4 from '~/media/photos/photo-4.jpg?jsx';
import Photo5 from '~/media/photos/photo-5.jpg?jsx';
import Photo6 from '~/media/photos/photo-6.jpg?jsx';
import Photo7 from '~/media/photos/photo-7.jpg?jsx';
import Photo8 from '~/media/photos/photo-8.jpg?jsx';
import Photo9 from '~/media/photos/photo-9.jpg?jsx';
import Photo10 from '~/media/photos/photo-10.jpg?jsx';
import Photo11 from '~/media/photos/photo-11.jpg?jsx';
import type { DocumentHead } from '@builder.io/qwik-city';
import { _ } from 'compiled-i18n';
import { Button } from '~/components/ui';

export default component$(() => {
    useStylesScoped$(styles);
    const viewMode = useSignal('Mosaic')
    return (
        <div>
            <div class="flex justify-center">
                <Button
                    class={`my-2 mr-2 ${viewMode.value === 'Mosaic' ? 'border-2 border-gray-800 dark:border-white' : 'dark:border-gray-400'}`}
                    look="outline"
                    onClick$={() => viewMode.value = 'Mosaic'}
                >
                    {_`Mosaic`}
                </Button>
                <Button
                    class={`my-2 mr-2 ${viewMode.value === 'Carousel' ? 'border-2 border-gray-800 dark:border-white' : 'dark:border-gray-400'}`}
                    look="outline"
                    onClick$={() => viewMode.value = 'Carousel'}
                >
                    {_`Carousel`}
                </Button>
            </div>
            {viewMode.value === 'Carousel' && (
                <div class="flex justify-center mt-8">
                    <section>
                        <Photo1 />
                        <Photo2 />
                        <Photo3 />
                        <Photo5 />
                        <Photo6 />
                        <Photo7 />
                        <Photo8 />
                    </section>
                </div>
            )}
            {viewMode.value === 'Mosaic' && (
                <div class="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                    <Photo1 />
                    <Photo2 />
                    <Photo3 />
                    <Photo5 />
                    <Photo6 />
                    <Photo7 />
                    <Photo8 />
                    <Photo9 />
                    <Photo10 />
                    <Photo11 />
                    <Photo4 />
                </div>
            )}
        </div>
    );
});

export const head: DocumentHead = {
    title: 'Sebastian Cardoso | Photos',
};
