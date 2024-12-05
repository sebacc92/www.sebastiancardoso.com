import ImgYo2 from '~/media/yo2.jpg?jsx';
import { component$, getLocale, useSignal, useStylesScoped$, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { _ } from 'compiled-i18n';
import { LuPlayCircle, LuStopCircle } from '@qwikest/icons/lucide';
import styles from './about.css?inline';

const AUDIO_SRC_ES = '/audios/Presentation-ES.mp3';
const AUDIO_SRC_EN = '/audios/Presentation-EN.mp3';

export default component$(() => {
    useStylesScoped$(styles);
    const currentLocale = getLocale()

    const audioElementSignal = useSignal<HTMLAudioElement | undefined>();
    const audioPlayButtonSignal = useSignal<HTMLButtonElement | undefined>();
    const audioIsPlayingSignal = useSignal(false);
    useVisibleTask$(({ track }) => {
        track(() => audioElementSignal.value);

        const play = () =>
            audioIsPlayingSignal.value
                ? audioElementSignal.value?.pause()
                : audioElementSignal.value?.play();

        audioPlayButtonSignal.value?.removeEventListener('click', play);
        audioPlayButtonSignal.value?.addEventListener('click', play);

        return () =>
            audioPlayButtonSignal.value?.removeEventListener('click', play);
    });
    return (
        <div class="mt-4 px-2">
            {/* <h2>Aprende. Crea. Comparte!</h2> */}
            <h1 class="my-4 text-3xl font-bold">{_`Sobre mí`}</h1>
            <div class="about-me-content">
                <figure class="rounded-md">
                    <ImgYo2 alt="Foto de Seba" class="photo border-8 border-grey-500/50" />
                </figure>
                <div class="mr-4">
                    <div>
                        <span>{_`Hola! Mi nombre es`} <strong>Sebastián Cardoso</strong>.</span>
                        <button
                            class="button-audio-play h-4 w-4 text-2xl"
                            ref={audioPlayButtonSignal}
                            role="button"
                            aria-label={_`How to pronounce my name`}
                        >
                            {audioIsPlayingSignal.value ? <LuStopCircle class="h-6 w-6" /> : <LuPlayCircle class="h-6 w-6" />}
                        </button>
                        {currentLocale === 'en_US'
                            ? (
                                <audio
                                    ref={audioElementSignal}
                                    src={AUDIO_SRC_EN}
                                    onPlay$={() => (audioIsPlayingSignal.value = true)}
                                    onPause$={() => (audioIsPlayingSignal.value = false)}
                                    onEnded$={() => (audioIsPlayingSignal.value = false)}
                                />)
                            : (
                                <audio
                                    ref={audioElementSignal}
                                    src={AUDIO_SRC_ES}
                                    onPlay$={() => (audioIsPlayingSignal.value = true)}
                                    onPause$={() => (audioIsPlayingSignal.value = false)}
                                    onEnded$={() => (audioIsPlayingSignal.value = false)}
                                />
                            )
                        }
                    </div>
                    <br />
                    <p>{_`Soy un desarrollador Full-stack JavaScript con más de 5 años de experiencia en la creación de aplicaciones web modernas, eficientes y escalables. Mi pasión por la tecnología nació desde joven, siempre fascinado por resolver problemas y entender cómo funcionan los sistemas.`}</p>
                    <br />
                    <p>{_`Aunque inicié mis estudios en sistemas, gran parte de mi aprendizaje ha sido autodidacta, lo que me ha permitido adaptarme rápidamente a nuevas herramientas y frameworks como Qwik, React y Vue, aprovechando cada oportunidad para seguir evolucionando como profesional.`}</p>
                    <br />
                    <p>{_`Más allá del desarrollo, disfruto de actividades al aire libre como el ciclismo, la natación y el entrenamiento físico, que me ayudan a mantener un equilibrio entre la vida personal y profesional. Me motiva constantemente la búsqueda de nuevas ideas y retos que contribuyan a mi crecimiento integral.`}</p>
                </div>
            </div>
            <div class="my-8"></div>
        </div>
    );
});

export const head: DocumentHead = {
    title: 'Sebastian Cardoso | About me',
};
