/* eslint-disable qwik/no-use-visible-task */
import { component$, createContextId, type Signal, useContextProvider, useSignal, useStylesScoped$, useVisibleTask$ } from "@builder.io/qwik";
import { LuMoon, LuSun } from "@qwikest/icons/lucide";
import styles from './ThemeSwitch.css?inline';

export const ThemeContext = createContextId<Signal<string>>(
    'docs.theme-context'
);

export const ThemeSwitch = component$(() => {
    useStylesScoped$(styles);
    const theme = useSignal('light');
    useContextProvider(ThemeContext, theme);

    useVisibleTask$(() => {
        theme.value = localStorage.getItem('theme') || 'light';
    });

    return (
        <div class="switch">
            <label>
                <input
                    type="checkbox"
                    onClick$={() => {
                        if (theme.value === "light") {
                            document.documentElement.className = "dark";
                            localStorage.setItem("theme", "dark");
                            theme.value = "dark";
                        } else {
                            document.documentElement.className = "light";
                            localStorage.setItem("theme", "light");
                            theme.value = "light";
                        }
                    }}
                />
                <span class="py-4 px-2">
                    <span class="theme-icon bg-blue-400a">{theme.value === "light" ? <LuSun /> : <LuMoon />}</span>
                </span>
            </label>
        </div>
    );
});
