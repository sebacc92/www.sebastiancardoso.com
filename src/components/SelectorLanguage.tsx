import { component$, createContextId, type Signal, useContextProvider, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import { LuCheck, LuLanguages } from "@qwikest/icons/lucide";
import { Dropdown } from "@qwik-ui/headless";
import styles from './ThemeSwitch.css?inline';
import { _ } from "compiled-i18n";

export const LanguageContext = createContextId<Signal<string>>(
    'docs.language-context'
);

export const SelectorLanguage = component$(() => {
    useStylesScoped$(styles);

    const actions = [
        { key: 'es', label: "🇪🇸 Español", disabled: false },
        { key: 'en', label: "🇬🇧 English", disabled: false },
    ];

    const lang = useSignal('en');
    useContextProvider(LanguageContext, lang);

    return (
        <Dropdown.Root class="">
            <Dropdown.Trigger class="py-4 px-2">
                <LuLanguages class="h-5 w-5" />
            </Dropdown.Trigger>
            <Dropdown.Popover class="p-2 round-edsm" gutter={8}>
                <Dropdown.Group class="mb-2">
                    <Dropdown.GroupLabel class="dropdown-group-label">
                        {_`Languages`}
                    </Dropdown.GroupLabel>
                </Dropdown.Group>
                <Dropdown.Separator />
                {actions.map((action) => (
                    <Dropdown.Item
                        key={action.label}
                        class="py-2 px-3 cursor-pointer hover:bg-slate-300 rounded-sm flex items-center gap-2"
                        disabled={action.disabled}
                    >
                        {action.label}
                        {lang.value === action.key && <LuCheck />}
                    </Dropdown.Item>
                ))}
            </Dropdown.Popover>
        </Dropdown.Root>
    )
});
