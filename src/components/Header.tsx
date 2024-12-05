import { $, component$, useSignal } from '@builder.io/qwik';
import { _ } from 'compiled-i18n';
import { NavLink } from '~/components/NavLink';
import { ThemeSwitch } from './ThemeSwitch';
import { LocaleSelector } from './LocaleSelector';
import { BurgerMenu } from './BurgerMenu';

export const Header = component$(() => {
    const isMenuOpen = useSignal(false);
    const toggleMenu = $(() => isMenuOpen.value = !isMenuOpen.value)

    return (
        <>
            <header aria-label={_`Site Header`} class="flex justify-between items-center border-b border-b-slate-300">
                <div class="lg:hidden px-3">
                    <BurgerMenu
                        onClick$={toggleMenu}
                        isMenuOpen={isMenuOpen.value}
                    />
                </div>
                <NavLink
                    class="hidden lg:block py-4 px-3 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors duration-300 ease-in-out"
                    href="/"
                    activeClass="font-bold border-b-2 border-b-black dark:border-b-white"
                >
                    <h1>{_`Home`}</h1>
                </NavLink>
                <nav>
                    <ul class="flex justify-center items-center gap-2">
                        <li>
                            <NavLink class="hidden lg:block py-4 px-3 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors duration-300 ease-in-out" href="/about/" activeClass="font-bold border-b-2 border-b-black dark:border-b-white">
                                <div>{_`About`}</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink class="hidden lg:block py-4 px-3 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors duration-300 ease-in-out" href="/blog/" activeClass="font-bold border-b-2 border-b-black dark:border-b-white">
                                <div>{_`Blog`}</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink class="hidden lg:block py-4 px-3 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors duration-300 ease-in-out" href="/projects/" activeClass="font-bold border-b-2 border-b-black dark:border-b-white">
                                <div>{_`Projects`}</div>
                            </NavLink>
                        </li>
                        <li>
                            <LocaleSelector />
                        </li>
                        <li>
                            <ThemeSwitch />
                        </li>
                    </ul>
                </nav>
            </header>
            <div
                class={`fixed top-0 left-0 z-40 h-full w-64 bg-gray-50 dark:bg-zinc-800 dark:text-white shadow-lg transform transition-transform duration-300 ease-in-out ${
                    isMenuOpen.value ? 'translate-x-0' : '-translate-x-full'
                } lg:hidden`}
                style={{ marginTop: '53px' }}
            >
                <nav class="p-4">
                    <ul class="space-y-2">
                        <li class="flex justify-center">
                            <NavLink
                                class="py-4 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors duration-300 ease-in-out w-full"
                                href="/"
                                activeClass="font-bold"
                            >
                                <div class="text-center">{_`Home`}</div>
                            </NavLink>
                        </li>
                        <li class="flex justify-center">
                            <NavLink
                                class="py-4 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors duration-300 ease-in-out w-full"
                                href="/about/"
                                activeClass="font-bold"
                            >
                                <div class="text-center">{_`About`}</div>
                            </NavLink>
                        </li>
                        <li class="flex justify-center">
                            <NavLink
                                class="py-4 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors duration-300 ease-in-out w-full"
                                href="/blog/"
                                activeClass="font-bold"
                            >
                                <div class="text-center">{_`Blog`}</div>
                            </NavLink>
                        </li>
                        <li class="flex justify-center">
                            <NavLink
                                class="py-4 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors duration-300 ease-in-out w-full"
                                href="/projects/"
                                activeClass="font-bold"
                            >
                                <div class="text-center">{_`Projects`}</div>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
});