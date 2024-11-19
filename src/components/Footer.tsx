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
        <footer aria-label={_`Site Footer`} class="flex flex-col sm:flex-row justify-between items-center py-4 border-t-2 border-b-slate-300">
            {/* Bloque 1: Texto de Copyright */}
            <span class="mb-2 sm:mb-0">
                © {year} Sebastian Cardoso
            </span>
            
            {/* Bloque 2: Enlace "Source" */}
            <a href="https://github.com/sebacc92/www.sebastiancardoso.com" target="_blank" class="text-xs mb-2 sm:mb-0 hover:underline">
                Source
            </a>
            
            {/* Bloque 3: Redes Sociales */}
            <ul class="flex justify-center items-center gap-8 lg:gap-10">
                <li>
                    <Link href="https://github.com/sebacc92" aria-label="GitHub">
                        <LuGithub class="h-5 w-5 transition-transform duration-300 ease-in-out transform hover:scale-125" />
                    </Link>
                </li>
                <li>
                    <Link href="https://twitter.com/sebacc92" aria-label="Twitter">
                        <LuTwitter class="h-5 w-5 transition-transform duration-300 ease-in-out transform hover:scale-125" />
                    </Link>
                </li>
                <li>
                    <Link href="https://www.linkedin.com/in/sebastiancardoso92/" aria-label="LinkedIn">
                        <LuLinkedin class="h-5 w-5 transition-transform duration-300 ease-in-out transform hover:scale-125" />
                    </Link>
                </li>
                <li>
                    <Link href="https://instagram.com/sebacc92/" aria-label="Instagram">
                        <LuInstagram class="h-5 w-5 transition-transform duration-300 ease-in-out transform hover:scale-125" />
                    </Link>
                </li>
                <li>
                    <Link href="https://www.youtube.com/watch?v=0sqIXDJ546w&t" aria-label="YouTube">
                        <LuYoutube class="h-5 w-5 transition-transform duration-300 ease-in-out transform hover:scale-125" />
                    </Link>
                </li>
            </ul>
        </footer>
    );
});
