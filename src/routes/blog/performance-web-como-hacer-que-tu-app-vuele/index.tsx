import { component$ } from '@builder.io/qwik';
import { Link, type DocumentHead } from '@builder.io/qwik-city';
import { LuArrowLeft } from '@qwikest/icons/lucide';
import { Button } from '~/components/ui';

export default component$(() => {
    return (
        <main class="mt-8 mx-auto max-w-3xl px-4">
            <Button look="link" class="mb-8">
                <Link href="/blog" class="flex items-center">
                    <LuArrowLeft class="h-5 w-5" />
                    <span>Volver al Blog</span>
                </Link>
            </Button>
            <article class="prose lg:prose-xl">
                <h1 class="text-4xl font-bold mb-4">
                    🏎️ Performance Web: Cómo Hacer que tu App Vuele
                </h1>
                <p>
                    En el mundo digital actual, la velocidad lo es todo. Los usuarios esperan que las aplicaciones web sean rápidas y responsivas. Una aplicación lenta no solo frustra a los usuarios, sino que también puede afectar negativamente al SEO y a la tasa de conversión. En este artículo, exploraremos estrategias y técnicas para optimizar el rendimiento de tu aplicación web y hacer que vuele. ¡Prepárate para acelerar! 🚀
                </p>

                <h2 class="text-2xl font-semibold mt-8 mb-4">1. Optimización de Recursos 📦</h2>
                <p>
                    Los recursos como imágenes, scripts y estilos pueden ralentizar significativamente tu aplicación si no se gestionan adecuadamente.
                </p>
                <h3 class="text-xl font-semibold mt-6 mb-3">1.1. Compresión de Imágenes 🖼️</h3>
                <p>
                    Las imágenes suelen ser los recursos más pesados en una página web. Reducir su tamaño sin comprometer la calidad es esencial.
                </p>
                <ul class="list-disc list-inside">
                    <li>
                        <strong>Usa formatos modernos</strong>: Formatos como <code class="bg-gray-200 px-1 rounded">WebP</code> y <code class="bg-gray-200 px-1 rounded">AVIF</code> ofrecen mejor compresión.
                    </li>
                    <li>
                        <strong>Herramientas de compresión</strong>: Utiliza herramientas como ImageOptim, TinyPNG o Squoosh para optimizar imágenes.
                    </li>
                    <li>
                        <strong>Implementa imágenes responsivas</strong>: Utiliza el atributo <code class="bg-gray-200 px-1 rounded">srcset</code> para servir imágenes de diferentes resoluciones según el dispositivo.
                    </li>
                </ul>
                <h3 class="text-xl font-semibold mt-6 mb-3">1.2. Minificación y Concatenación 📄</h3>
                <p>
                    Reducir el tamaño de tus archivos CSS y JavaScript mejora los tiempos de carga.
                </p>
                <ul class="list-disc list-inside">
                    <li>
                        <strong>Minifica los archivos</strong>: Elimina espacios, comentarios y caracteres innecesarios.
                    </li>
                    <li>
                        <strong>Concatena archivos</strong>: Reduce el número de solicitudes HTTP combinando archivos.
                    </li>
                    <li>
                        <strong>Utiliza herramientas de build</strong>: Webpack, Rollup o Parcel pueden automatizar este proceso.
                    </li>
                </ul>
                <h3 class="text-xl font-semibold mt-6 mb-3">1.3. Carga Diferida (Lazy Loading) 💤</h3>
                <p>
                    Cargar recursos solo cuando sean necesarios mejora el rendimiento inicial.
                </p>
                <p>Ejemplo de carga diferida de una imagen:</p>
                <pre class="bg-gray-100 p-4 rounded-md overflow-x-auto">
                    <code class="language-html">
                        {`<img src="imagen.webp" alt="Descripción de la imagen" loading="lazy" />`}
                    </code>
                </pre>
                <p>Implementación de carga diferida en un componente React:</p>
                <pre class="bg-gray-100 p-4 rounded-md overflow-x-auto">
                    <code class="language-jsx">
                        {`const LazyComponent = React.lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <LazyComponent />
    </Suspense>
  );
}`}
                    </code>
                </pre>

                <h2 class="text-2xl font-semibold mt-8 mb-4">2. Optimización del Rendimiento de JavaScript ⚙️</h2>
                <p>
                    El código JavaScript puede ser una fuente importante de problemas de rendimiento si no se maneja adecuadamente.
                </p>
                <h3 class="text-xl font-semibold mt-6 mb-3">2.1. Evita el Código Bloqueante 🚧</h3>
                <p>
                    El código que bloquea el hilo principal puede causar tiempos de respuesta lentos.
                </p>
                <ul class="list-disc list-inside">
                    <li>
                        <strong>Usa <code class="bg-gray-200 px-1 rounded">async</code> y <code class="bg-gray-200 px-1 rounded">defer</code> en scripts</strong>: Permite que el navegador procese otros elementos mientras carga los scripts.
                    </li>
                    <li>
                        <strong>Divide el código</strong>: Implementa code splitting para cargar solo lo necesario.
                    </li>
                </ul>
                <h3 class="text-xl font-semibold mt-6 mb-3">2.2. Eliminación de Código Muerto 🗑️</h3>
                <p>
                    Elimina el código que no se utiliza para reducir el tamaño de los archivos.
                </p>
                <ul class="list-disc list-inside">
                    <li>
                        <strong>Herramientas como Tree Shaking</strong>: Webpack y Rollup pueden eliminar código no utilizado automáticamente.
                    </li>
                    <li>
                        <strong>Analiza tus dependencias</strong>: Evita importar librerías enteras si solo necesitas una parte.
                    </li>
                </ul>
                <h3 class="text-xl font-semibold mt-6 mb-3">2.3. Uso Eficiente del DOM 🧩</h3>
                <p>
                    Manipular el DOM es costoso; optimiza las interacciones con él.
                </p>
                <ul class="list-disc list-inside">
                    <li>
                        <strong>Agrupa actualizaciones</strong>: Realiza cambios en lotes para minimizar reflows y repaints.
                    </li>
                    <li>
                        <strong>Virtual DOM</strong>: Utiliza frameworks como React o Vue que optimizan las actualizaciones del DOM.
                    </li>
                    <li>
                        <strong>Web Workers</strong>: Desplaza tareas pesadas fuera del hilo principal.
                    </li>
                </ul>

                <h2 class="text-2xl font-semibold mt-8 mb-4">3. Mejora la Experiencia del Usuario 🎯</h2>
                <p>
                    La percepción de velocidad es tan importante como la velocidad real.
                </p>
                <h3 class="text-xl font-semibold mt-6 mb-3">3.1. Prioriza el Contenido por Encima del Doblez 📑</h3>
                <p>
                    Asegúrate de que el contenido visible inicialmente cargue rápidamente.
                </p>
                <ul class="list-disc list-inside">
                    <li>
                        <strong>CSS crítico en línea</strong>: Incluye estilos esenciales directamente en el HTML.
                    </li>
                    <li>
                        <strong>Diferir CSS no crítico</strong>: Carga los estilos menos importantes de forma asíncrona.
                    </li>
                    <li>
                        <strong>Preload y Prefetch</strong>: Indica al navegador qué recursos cargar con prioridad.
                    </li>
                </ul>
                <h3 class="text-xl font-semibold mt-6 mb-3">3.2. Utiliza Indicadores de Carga ⏳</h3>
                <p>
                    Proporciona feedback al usuario mientras se carga el contenido.
                </p>
                <ul class="list-disc list-inside">
                    <li>
                        <strong>Skeleton screens</strong>: Muestra marcadores de posición en lugar de un spinner.
                    </li>
                    <li>
                        <strong>Progress bars</strong>: Indica el progreso de la carga de manera visual.
                    </li>
                    <li>
                        <strong>Animaciones sutiles</strong>: Mantén al usuario comprometido durante la espera.
                    </li>
                </ul>
                <h3 class="text-xl font-semibold mt-6 mb-3">3.3. Evita los Saltos de Contenido 📌</h3>
                <p>
                    El Cumulative Layout Shift (CLS) afecta negativamente la experiencia del usuario.
                </p>
                <ul class="list-disc list-inside">
                    <li>
                        <strong>Reserva espacio para imágenes y anuncios</strong>: Define las dimensiones para evitar cambios inesperados.
                    </li>
                    <li>
                        <strong>Evita la inserción tardía de contenido</strong>: Planifica la estructura del DOM para cargar contenido en orden.
                    </li>
                    <li>
                        <strong>Utiliza fuentes locales</strong>: Reduce el retraso en la carga de fuentes externas.
                    </li>
                </ul>

                <h2 class="text-2xl font-semibold mt-8 mb-4">4. Implementa Caché y CDN 🌐</h2>
                <p>
                    Utilizar mecanismos de caché y distribución de contenido mejora significativamente la velocidad.
                </p>
                <h3 class="text-xl font-semibold mt-6 mb-3">4.1. Configura el Caché del Navegador 🗄️</h3>
                <p>
                    Permite que el navegador almacene recursos para evitar descargas repetidas.
                </p>
                <ul class="list-disc list-inside">
                    <li>
                        <strong>Usa cabeceras de caché</strong>: Controla cuánto tiempo se deben almacenar los recursos.
                    </li>
                    <li>
                        <strong>Versiona tus archivos</strong>: Cambia el nombre de los archivos cuando se actualicen para forzar una recarga.
                    </li>
                    <li>
                        <strong>Implementa Service Workers</strong>: Para un control más granular sobre el caché.
                    </li>
                </ul>
                <h3 class="text-xl font-semibold mt-6 mb-3">4.2. Utiliza una CDN 🚀</h3>
                <p>
                    Una Red de Distribución de Contenido acerca tus recursos al usuario.
                </p>
                <ul class="list-disc list-inside">
                    <li>
                        <strong>Reducción de latencia</strong>: Los servidores distribuidos entregan contenido más rápido.
                    </li>
                    <li>
                        <strong>Escalabilidad</strong>: Maneja mejor el tráfico alto al distribuir la carga.
                    </li>
                    <li>
                        <strong>Seguridad Mejorada</strong>: Muchas CDN ofrecen protección DDoS y certificados SSL.
                    </li>
                </ul>

                <h2 class="text-2xl font-semibold mt-8 mb-4">5. Monitoreo y Análisis 🔍</h2>
                <p>
                    No puedes mejorar lo que no mides. Utiliza herramientas para analizar el rendimiento y detectar cuellos de botella.
                </p>
                <h3 class="text-xl font-semibold mt-6 mb-3">5.1. Herramientas de Desarrollo del Navegador 🛠️</h3>
                <p>
                    Los navegadores modernos ofrecen herramientas integradas para analizar el rendimiento.
                </p>
                <ul class="list-disc list-inside">
                    <li>
                        <strong>Audit</strong>: Usa Lighthouse para obtener informes detallados.
                    </li>
                    <li>
                        <strong>Performance</strong>: Analiza el tiempo de carga y ejecución de scripts.
                    </li>
                    <li>
                        <strong>Coverage</strong>: Identifica código CSS y JavaScript no utilizado.
                    </li>
                </ul>
                <h3 class="text-xl font-semibold mt-6 mb-3">5.2. Servicios Externos 🌐</h3>
                <p>
                    Herramientas como Google Analytics o New Relic proporcionan insights valiosos.
                </p>
                <ul class="list-disc list-inside">
                    <li>
                        <strong>Real User Monitoring (RUM)</strong>: Analiza el rendimiento desde la perspectiva del usuario real.
                    </li>
                    <li>
                        <strong>Alertas y Reportes</strong>: Configura alertas para problemas de rendimiento.
                    </li>
                    <li>
                        <strong>Heatmaps y Session Recordings</strong>: Comprende cómo interactúan los usuarios con tu sitio.
                    </li>
                </ul>

                <h2 class="text-2xl font-semibold mt-8 mb-4">6. Optimización del Servidor 🖥️</h2>
                <p>
                    No olvides que el backend también juega un papel crucial en el rendimiento.
                </p>
                <ul class="list-disc list-inside">
                    <li>
                        <strong>Usa HTTP/2 o HTTP/3</strong>: Mejoran la velocidad de transferencia de datos.
                    </li>
                    <li>
                        <strong>Compresión Gzip/Brotli</strong>: Comprime los archivos antes de enviarlos.
                    </li>
                    <li>
                        <strong>Optimiza las consultas a la base de datos</strong>: Reduce el tiempo de respuesta del servidor.
                    </li>
                    <li>
                        <strong>Implementa cacheo en el servidor</strong>: Utiliza Redis o Memcached para almacenar en caché respuestas frecuentes.
                    </li>
                </ul>

                <h2 class="text-2xl font-semibold mt-8 mb-4">7. Adopta Buenas Prácticas de Código 📝</h2>
                <p>
                    Un código limpio y eficiente es la base de una aplicación de alto rendimiento.
                </p>
                <ul class="list-disc list-inside">
                    <li>
                        <strong>Evita loops innecesarios</strong>: Reduce operaciones costosas.
                    </li>
                    <li>
                        <strong>Usa memoización</strong>: Almacena resultados de funciones costosas si se llaman con frecuencia.
                    </li>
                    <li>
                        <strong>Escribe código asíncrono</strong>: No bloquees el hilo principal.
                    </li>
                    <li>
                        <strong>Sigue estándares de código</strong>: Facilita el mantenimiento y la colaboración.
                    </li>
                </ul>

                <h2 class="text-2xl font-semibold mt-8 mb-4">8. Optimización para Dispositivos Móviles 📱</h2>
                <p>
                    Cada vez más usuarios acceden a internet desde dispositivos móviles. Optimizar para móviles es crucial.
                </p>
                <ul class="list-disc list-inside">
                    <li>
                        <strong>Diseño Responsive</strong>: Asegúrate de que tu sitio se vea y funcione bien en todas las pantallas.
                    </li>
                    <li>
                        <strong>Optimiza el tiempo de carga</strong>: Las conexiones móviles pueden ser más lentas; minimiza los recursos necesarios.
                    </li>
                    <li>
                        <strong>Usa AMP (Accelerated Mobile Pages)</strong>: Mejora la velocidad en dispositivos móviles con páginas optimizadas.
                    </li>
                </ul>

                <h2 class="text-2xl font-semibold mt-8 mb-4">Conclusión 🏁</h2>
                <p>
                    Optimizar el rendimiento web es un esfuerzo continuo que requiere atención a los detalles y un enfoque integral. Al aplicar las técnicas y estrategias mencionadas, puedes mejorar significativamente la velocidad y la experiencia del usuario en tu aplicación. Recuerda que cada milisegundo cuenta. ¡Es hora de poner en práctica estos consejos y hacer que tu app vuele! 🦅
                </p>

                <p>---</p>

                <p class="mt-8">
                    💬{' '}
                    <em>
                        ¿Conoces otras técnicas para mejorar el rendimiento web? ¡Compártelas en Twitter mencionándome{' '}
                        <a
                            href="https://twitter.com/intent/tweet?text=Mis%20consejos%20para%20mejorar%20el%20rendimiento%20web%20son...&hashtags=WebPerformance&via=sebacc92"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-blue-500 hover:underline"
                        >
                            @sebacc92
                        </a>{' '}
                        y usando el hashtag{' '}
                        <a
                            href="https://twitter.com/intent/tweet?text=%23WebPerformance&hashtags=WebPerformance&via=sebacc92"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-blue-500 hover:underline"
                        >
                            #WebPerformance
                        </a>
                        !
                    </em>
                </p>
            </article>
            <Button look="link" class="my-8">
                <Link href="/blog" class="flex items-center">
                    <LuArrowLeft class="h-5 w-5" />
                    <span>Volver al Blog</span>
                </Link>
            </Button>
        </main>
    );
});

export const head: DocumentHead = {
    title: 'Performance Web: Cómo Hacer que tu App Vuele',
};
