import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from './logos.css?inline';

export default component$(() => {
    useStylesScoped$(styles);
    return (
        <div class="flex justify-center items-center gap-4">
            <div class="logo-instagram"><span></span></div>
            <div class="logo-netflix"><span></span></div>
            <div class="logo-tiktok"></div>
        </div>
    );
});
