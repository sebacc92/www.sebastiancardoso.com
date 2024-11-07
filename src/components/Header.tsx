import { component$ } from '@builder.io/qwik';
import { NavLink } from '~/components/NavLink';
import { _ } from 'compiled-i18n';
import { ThemeSwitch } from './ThemeSwitch';
import { SelectorLanguage } from './SelectorLanguage';

export const Header = component$(() => {
    return (
        <header aria-label={_`Site Header`} class="flex justify-between items-center border-b border-b-slate-300">
            <NavLink class="py-4 px-3 hover:bg-slate-200 transition-colors duration-300 ease-in-out" href="/" activeClass="font-bold border-b-2 border-b-black dark:border-b-white"><h1>{_`Home`}</h1></NavLink>
            <nav class="flex justify-center items-center gap-2">
                <NavLink class="py-4 px-3 hover:bg-slate-200 transition-colors duration-300 ease-in-out" href="/about/" activeClass="font-bold border-b-2 border-b-black dark:border-b-white">
                    <div>{_`About`}</div>
                </NavLink>
                <NavLink class="py-4 px-3 hover:bg-slate-200 transition-colors duration-300 ease-in-out" href="/blog/" activeClass="font-bold border-b-2 border-b-black dark:border-b-white">
                    <div>{_`Blog`}</div>
                </NavLink>
                <NavLink class="py-4 px-3 hover:bg-slate-200 transition-colors duration-300 ease-in-out" href="/photos/" activeClass="font-bold border-b-2 border-b-black dark:border-b-white">
                    <div>{_`Photos`}</div>
                </NavLink>
                <ThemeSwitch />
                <SelectorLanguage />
            </nav>
        </header>
    );
});