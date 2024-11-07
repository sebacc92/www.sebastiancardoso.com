import { component$ } from '@builder.io/qwik';
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

export default component$(() => {
    return (
        <div>
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
        </div>
    );
});