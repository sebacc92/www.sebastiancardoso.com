import { component$, createContextId, type Signal, useContextProvider, useSignal, useStylesScoped$, useVisibleTask$ } from "@builder.io/qwik";
import { LuMoon, LuSun } from "@qwikest/icons/lucide";
import styles from './ThemeSwitch.css?inline';

export const ThemeContext = createContextId<Signal<string>>(
    'docs.theme-context'
);

export const ThemeSwitch = component$(() => {
    useStylesScoped$(styles);
    const theme = useSignal<string>((typeof window !== "undefined" && window.localStorage.theme) || undefined);
    useContextProvider(ThemeContext, theme);

    useVisibleTask$(() => {
        theme.value = document.documentElement.classList.contains("dark")
            ? "dark"
            : "light";
    });

    return (
        <div class="switch">
            <label>
                <button
                    type="button"
                    class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
                    onClick$={() => {
                        if (theme.value === "dark") {
                            document.documentElement.classList.remove("dark");
                            theme.value = window.localStorage.theme = "light";
                        } else {
                            document.documentElement.classList.add("dark");
                            theme.value = window.localStorage.theme = "dark";
                        }
                    }}
                >
                    <span class="theme-icon bg-blue-400a">{theme.value === "light" ? <LuSun /> : <LuMoon />}</span>
                </button>
            </label>
        </div>
    );
});
