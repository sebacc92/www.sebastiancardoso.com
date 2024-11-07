import { component$, getLocale, useStylesScoped$ } from "@builder.io/qwik";
import { LuCheck, LuLanguages } from "@qwikest/icons/lucide";
import { Dropdown } from "@qwik-ui/headless";
import styles from './ThemeSwitch.css?inline';
import { _, locales } from "compiled-i18n";

export const LocaleSelector = component$(() => {
    useStylesScoped$(styles);
    
    const currentLocale = getLocale()
    
    const languages: { [key: string]: string } = {
        en_US: '🇬🇧 English',
        es_AR: '🇪🇸 Español',
    };

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
                {locales.map((locale) => (
                    <Dropdown.Item
                        key={locale}
                        class="py-2 px-3 cursor-pointer hover:bg-slate-300 rounded-sm"
                    >
                        <a
                            key={locale}
                            href={`?locale=${locale}`}
                            aria-disabled={locale === currentLocale}
                            class={
                                'btn btn-ghost btn-sm flex items-center gap-1' +
                                (locale === currentLocale
                                    ? ' bg-neutralContent text-neutral pointer-events-none'
                                    : ' bg-base-100 text-base-content')
                            }
                        >
                            <span>{languages[locale]}</span>
                            <span>{locale === currentLocale && <LuCheck />}</span>
                        </a>
                    </Dropdown.Item>
                ))}
            </Dropdown.Popover>
        </Dropdown.Root>
    )
});
