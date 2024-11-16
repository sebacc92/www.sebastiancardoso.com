import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from './spinner.css?inline';

export default component$(() => {
    useStylesScoped$(styles);
    return (
        <div class="spinner"></div>
    );
});
