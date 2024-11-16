/* eslint-disable qwik/no-use-visible-task */
import { component$, useSignal, useStylesScoped$, useVisibleTask$ } from "@builder.io/qwik";
import styles from './writing.css?inline';
import { _ } from "compiled-i18n";

export default component$(() => {
    useStylesScoped$(styles);

    const phrases = [
        _`Transformando ideas en realidades digitales con JavaScript.`,
        _`Construyendo el futuro de la web con cada línea de código.`,
        _`Optimización y eficiencia en cada proyecto de desarrollo web.`,
        _`Integrando tecnologías modernas para experiencias digitales óptimas.`,
        _`Impulsando la creatividad con código limpio y funcional.`,
        _`Conectando ideas con implementaciones técnicas efectivas.`,
        _`Facilitando el crecimiento digital mediante desarrollo full-stack.`,
        _`Diseñando interfaces intuitivas con backends escalables.`,
        _`Transformando desafíos en oportunidades a través del código.`,
        _`Creando sistemas inteligentes para una web más eficiente.`,
    ];

    const currentPhraseIndex = useSignal(0)

    useVisibleTask$(({ cleanup }) => {
        const typing = () => {
            console.log('typing')
            console.log(currentPhraseIndex.value)
            if(currentPhraseIndex.value === phrases.length - 1) {
                currentPhraseIndex.value = 0
            } else {
                currentPhraseIndex.value++
            }
        }
        const id = setInterval(typing, 7000);
        cleanup(() => clearInterval(id));
    })

    return (
        <div>
            <span class={`phrase${currentPhraseIndex.value}`}>{phrases[currentPhraseIndex.value]}</span>
        </div>
    );
});
