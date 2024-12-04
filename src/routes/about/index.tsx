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
            <h2 class="text-2xl mt-8 ml-2">🕐 {_`Timeline de mi vida`}</h2>
            <ul class="list-timeline ml-4">
                <li>🔸<strong>1992</strong>: 👶 {_`Nazco en Montevideo, Uruguay`} 🇺🇾.</li>
                <li>🔸<strong>1996</strong>: 🧳 {_`Nos mudamos a Buenos Aires, Argentina`} 🇦🇷.</li>
                <li>🔸<strong>2001</strong>: 🖥️ {_`Me regalan mi primera computadora Pentium IV con 4GB de disco y 256MB de Ram.`}</li>
                <li>🔸<strong>2002</strong>: 🎮 {_`Instalo un emulador de SEGA con mas 500 juegos y los juego a todos.`}</li>
                <li>🔸<strong>2003</strong>: 📞 {_`Conecto la computadora por dial-up al teléfono de casa y descubro Internet. Busco letras de canciones y trucos para los juegos.`}</li>
                <li>🔸<strong>2004</strong>: 💿 {_`Descubro Internet por ADSL. Aprendo a descargar música mp3 por P2P (Ares) y a grabar CDs vírgenes.`}</li>
                <li>🔸<strong>2005</strong>: 🖨️ {_`Me regalan mi primer impresora y la uso para imprimir fotos y tapas de los CDs con canciones.`}</li>
                <li>🔸<strong>2006</strong>: 👨‍🎓 {_`Termino la primaria. En aquel tiempo 9° grado.`}</li>
                <li>🔸<strong>2009</strong>: 👨‍🎓 {_`Termino la secundaria con orientación a EGEOR (Economía y Gestión de las Organizaciones).`}</li>
                <li>🔸<strong>2010</strong>: 🏃 {_`Empiezo la carrera de Licenciatura en Sistemas en la UNLP.`}</li>
                <li>🔸<strong>2011</strong>: 💻 {_`Me regalan mi primera notebook (Lenovo G470).`}</li>
                <li>🔸<strong>2012</strong>: 💻 {_`Adios Windows 🪟 Hola Linux 🐧💚.`}</li>
                <li>🔸<strong>2013</strong>: 🥬 {_`Dejo de comer animales y adopto una dieta vegana.`}</li>
                <li>🔸<strong>2014</strong>: {_`Abandono la carrera universitaria.`}</li>
                <li>🔸<strong>2015</strong>: {_`Me independizo y trabajo un tiempo como ayudante de cocina, mozo, playero y cajero de una farmacia.`}</li>
                <li>🔸<strong>2016</strong>: {_`✈️ Viajo en avión por primera vez.`}</li>
                <li>🔸<strong>2017</strong>: 🐈🐈‍⬛ {_` Adopto a`} <a href="https://www.instagram.com/p/BtLw5MOHutO/" target="_blank" class="text-blue-500 hover:text-blue-700">Sol & Pante</a>.</li>
                <li>🔸<strong>2018</strong>: {_`Me registro en`} <a href="https://platzi.com/c/seba/" target="_blank" class="text-blue-500 hover:text-blue-700">Platzi</a> {_`y empiezo a estudiar programación de forma autodidacta.`}</li>
                <li>🔸<strong>2019</strong>: {_`Comienzo a trabajar presencial en`} <a href="https://arzion.com/" target="_blank" class="text-blue-500 hover:text-blue-700">Arzion</a> {_`como programador React para un sistema de`} <a href="https://www.anantara.com/es" target="_blank" class="text-blue-500 hover:text-blue-700">{_`booking de hoteles`}</a>.</li>
                <li>
                    🔸<strong>2020</strong>
                    :
                    <ul>
                        <li>🔹{_`Llega la pandemia y empiezo a trabajar remoto.`}</li>
                        <li>🔹👫 <a href="https://www.instagram.com/dai_lentz/" target="_blank" class="text-blue-500 hover:text-blue-700">Daiana</a> {_`y yo empezamos nuestra relación.`}</li>
                        <li>🔹{_`Compro mi notebook Asus Vivobook Ryzen 7 4700u.`}</li>
                    </ul>
                </li>
                <li>🔸<strong>2021</strong>: 🏠 {_`Daiana y yo empezamos a convivir juntos.`} 🐶 <a href="https://www.instagram.com/p/BGsbWgXupX8UO2EibELFj8v5Wcjv35BN3xUGJ80/" target="_blank" class="text-blue-500 hover:text-blue-700">Tori</a> {_`viene con nosotros.`}</li>
                <li>🔸<strong>2022</strong>: 👶 {_`Nace Ciro, nuestro hijo.`}</li>
                <li>🔸<strong>2023</strong>: {_`Nos mudamos a`} <a href="https://www.google.com/maps/place/Miramar,+Provincia+de+Buenos+Aires/@-38.2477663,-57.9116171,12z" target="_blank" class="text-blue-500 hover:text-blue-700">Miramar</a>.</li>
                <li>🔸
                    <span class="inline-block text-gray-900 text-opacity-50 animate-pulse duration-2000 dark:text-white"><strong>{_`Escribiendo mi presente`}</strong></span>
                    <span class="inline-block text-2xl text-gray-900 text-opacity-50 animate-pulse duration-2000 dark:text-white"><strong>. </strong></span>
                    <span class="inline-block text-2xl text-gray-900 text-opacity-50 animate-pulse duration-2000 dark:text-white"><strong>. </strong></span>
                    <span class="inline-block text-2xl text-gray-900 text-opacity-50 animate-pulse duration-2000 dark:text-white"><strong>. </strong></span>
                </li>
            </ul>
            <div class="my-8"></div>
        </div>
    );
});

export const head: DocumentHead = {
    title: 'Sebastian Cardoso | About me',
};
