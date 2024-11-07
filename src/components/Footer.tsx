import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { LuGithub, LuInstagram, LuLinkedin, LuTwitter, LuYoutube } from '@qwikest/icons/lucide';
import { _ } from 'compiled-i18n';
import { useServerTimeLoader } from '~/routes/layout';

export const Footer = component$(() => {
    const serverTime = useServerTimeLoader();
    const dateString = serverTime.value.date;
    let year = new Date().getFullYear();
    if (dateString) {
        const date = new Date(dateString);
        if (!isNaN(date.getTime())) { // Verifica que la fecha sea válida
            year = date.getFullYear();
        }
    }
    return (
        <footer aria-label={_`Site Footer`} class="flex justify-between items-center py-4 border-t-2 border-b-slate-300">
            <h6>Sebastian Cardoso © {year}</h6>
            <ul class="flex justify-center items-center gap-4 md:gap-8 lg:gap-10">
                <li><Link href="https://instagram.com/sebacc92/"><LuInstagram class="h-5 w-5" /></Link></li>
                <li><Link href="https://twitter.com/sebacc92"><LuTwitter class="h-5 w-5" /></Link></li>
                <li><Link href="https://www.youtube.com/watch?v=0sqIXDJ546w&t"><LuYoutube class="h-5 w-5" /></Link></li>
                <li><Link href="https://github.com/sebacc92"><LuGithub class="h-5 w-5" /></Link></li>
                <li><Link href="https://www.linkedin.com/in/sebastiancardoso92/"><LuLinkedin class="h-5 w-5" /></Link></li>
            </ul>
        </footer>
    );
});