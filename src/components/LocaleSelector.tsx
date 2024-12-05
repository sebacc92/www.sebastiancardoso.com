import { component$, getLocale, useStylesScoped$ } from "@builder.io/qwik";
import { LuCheck, LuLanguages } from "@qwikest/icons/lucide";
// import { Dropdown } from "@qwik-ui/headless";
import styles from './ThemeSwitch.css?inline';
import { _, locales } from "compiled-i18n";
import { Dropdown } from "flowbite-qwik";

export const LuLanguagesIcon = component$(() => {
    return <LuLanguages class="h-5 w-5" />
})

export const LuCheckIcon = component$(() => {
    return <LuCheck class="h-5 w-5" />
})

export const LocaleSelector = component$(() => {
    useStylesScoped$(styles);
    
    const currentLocale = getLocale()
    
    const languages: { [key: string]: string } = {
        en_US: '🇬🇧 English',
        es_AR: '🇪🇸 Español',
    };

    return (
        <Dropdown as={<LuLanguagesIcon />} class="mt-2">
            <Dropdown.Item>{_`Languages`}</Dropdown.Item>
            <Dropdown.Item divider />
            {locales.map((locale) => (
                <Dropdown.Item key={locale}>
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
                        <span>{locale === currentLocale && <LuCheckIcon />}</span>
                    </a>
                </Dropdown.Item>
            ))}
        </Dropdown>
    )
});
