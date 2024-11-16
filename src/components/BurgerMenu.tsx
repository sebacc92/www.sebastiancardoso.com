import { component$, useStylesScoped$ } from "@builder.io/qwik"
import type { PropFunction } from "@builder.io/qwik"
import styles from './BurgerMenu.css?inline'
import { _ } from "compiled-i18n";

type Props = {
    onClick$: PropFunction<() => void>;
    isMenuOpen: boolean;
};

export const BurgerMenu = component$((props: Props) => {
    useStylesScoped$(styles);
    return (
        <button
            aria-expanded={props.isMenuOpen}
            aria-label={_`Toggle navigation`}
            class="mt-1"
            onClick$={props.onClick$}
            role="button"
        >
            <div class="bg-black dark:bg-white"></div>
            <div class="bg-black dark:bg-white"></div>
            <div class="bg-black dark:bg-white"></div>
        </button>
    )
})