import { component$, createContextId, type Signal, useContextProvider, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import { LuMoon, LuSun } from "@qwikest/icons/lucide";
import styles from './ThemeSwitch.css?inline';

export const ThemeContext = createContextId<Signal<string>>(
    'docs.theme-context'
);

export const ThemeSwitch = component$(() => {
    useStylesScoped$(styles);
    const theme = useSignal('light');
    useContextProvider(ThemeContext, theme);

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
                <span>
                    <span class="theme-icon">{theme.value === "light" ? <LuSun /> : <LuMoon />}</span>
                </span>
            </label>
        </div>
    );
});
