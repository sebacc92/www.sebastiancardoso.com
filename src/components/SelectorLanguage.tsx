import { component$, createContextId, type Signal, useContextProvider, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import { LuLanguages } from "@qwikest/icons/lucide";
import styles from './ThemeSwitch.css?inline';

export const LanguageContext = createContextId<Signal<string>>(
    'docs.language-context'
);

export const SelectorLanguage = component$(() => {
    useStylesScoped$(styles);
    const lang = useSignal('light');
    useContextProvider(LanguageContext, lang);

    return (
        <div class="switch">
            <label>
                <input
                    type="checkbox"
                    onClick$={() => console.log('HEY')}
                />
                <div class="py-4 px-2">
                    <span class="flex justify-center items-center">
                        <LuLanguages class="h-5 w-5" />
                    </span>
                </div>
            </label>
        </div>
    );
});
