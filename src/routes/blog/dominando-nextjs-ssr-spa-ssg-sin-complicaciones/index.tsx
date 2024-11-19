import { component$ } from '@builder.io/qwik';
import { type DocumentHead, Link } from '@builder.io/qwik-city';
import { Button } from '~/components/ui';
import { LuArrowLeft } from '@qwikest/icons/lucide';

export default component$(() => {
    return (
        <main class="mt-8 mb-24 px-4">
            <Button look="link" class="mb-8">
                <Link href="/blog" class="flex items-center">
                    <LuArrowLeft class="h-5 w-5" />
                    <span>Volver al Blog</span>
                </Link>
            </Button>
            <article class="prose lg:prose-xl">
                <h1 class="text-4xl font-bold mb-4">
                    🚀 Dominando Next.js: SSR, SPA y SSG Sin Complicaciones
                </h1>
                <p>
                    Next.js se ha consolidado como uno de los frameworks más potentes y versátiles para el desarrollo de aplicaciones web en React. Ofrece una combinación única de características que facilitan la creación de aplicaciones rápidas, escalables y optimizadas para SEO. En este artículo, exploraremos en profundidad las diferencias entre <strong>SSR</strong> (Server-Side Rendering), <strong>SPA</strong> (Single Page Applications) y <strong>SSG</strong> (Static Site Generation) con Next.js. ¡Comencemos! 🌟
                </p>

                <h2 class="text-2xl font-semibold mt-8 mb-4">¿Qué es Next.js? 🧐</h2>
                <p>
                    Next.js es un framework de React que facilita la creación de aplicaciones web con renderizado del lado del servidor, generación de sitios estáticos y más. Proporciona una experiencia de desarrollo optimizada, manejo de rutas, optimización de imágenes y muchas otras características listas para usar.
                </p>
                <p>
                    Su flexibilidad permite a los desarrolladores elegir entre diferentes estrategias de renderizado según las necesidades de la aplicación, lo que lo hace ideal para una amplia gama de proyectos, desde blogs personales hasta aplicaciones empresariales de gran escala.
                </p>

                <h2 class="text-2xl font-semibold mt-8 mb-4">Server-Side Rendering (SSR) 🖥️</h2>
                <p>
                    El <strong>Server-Side Rendering (SSR)</strong> implica que el contenido de la aplicación se renderiza en el servidor antes de enviarlo al cliente. Esto mejora el rendimiento percibido y es beneficioso para el SEO, ya que los motores de búsqueda pueden indexar fácilmente el contenido renderizado.
                </p>
                <h3 class="text-xl font-semibold mt-6 mb-3">Ventajas de SSR</h3>
                <ul class="list-disc list-inside">
                    <li>
                        <strong>Mejor SEO</strong>: El contenido está disponible inmediatamente para los motores de búsqueda.
                    </li>
                    <li>
                        <strong>Tiempo hasta el primer byte (TTFB) rápido</strong>: El usuario recibe el contenido más rápido, mejorando la experiencia inicial.
                    </li>
                    <li>
                        <strong>Contenido Dinámico</strong>: Ideal para aplicaciones donde el contenido cambia con frecuencia y necesita reflejarse al instante.
                    </li>
                </ul>
                <h3 class="text-xl font-semibold mt-6 mb-3">Implementando SSR en Next.js</h3>
                <p>
                    En Next.js, para implementar SSR y obtener datos en el servidor, puedes usar la función <code class="bg-gray-200 px-1 rounded">getServerSideProps</code>.
                </p>
                <pre class="bg-gray-100 p-4 rounded-md overflow-x-auto">
                    <code class="language-js">
                        {`export async function getServerSideProps(context) {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  return { props: { data } };
}

function Page({ data }) {
  return <div>{JSON.stringify(data)}</div>;
}

export default Page;`}
                    </code>
                </pre>
                <p>
                    En este ejemplo, los datos se obtienen en el servidor y se pasan al componente como props, asegurando que el contenido esté disponible en el momento de la carga de la página.
                </p>

                <h2 class="text-2xl font-semibold mt-8 mb-4">Static Site Generation (SSG) 🗂️</h2>
                <p>
                    La <strong>Generación de Sitios Estáticos (SSG)</strong> crea páginas HTML estáticas en tiempo de compilación. Esto resulta en sitios rápidos y escalables, ideales para contenido que no cambia frecuentemente. Una vez generadas, las páginas pueden ser servidas rápidamente a los usuarios sin necesidad de renderizado adicional.
                </p>
                <h3 class="text-xl font-semibold mt-6 mb-3">Ventajas de SSG</h3>
                <ul class="list-disc list-inside">
                    <li>
                        <strong>Alto Rendimiento</strong>: Las páginas estáticas se sirven rápidamente, mejorando la velocidad del sitio.
                    </li>
                    <li>
                        <strong>Escalabilidad</strong>: Menor carga en el servidor, ya que las páginas son archivos estáticos.
                    </li>
                    <li>
                        <strong>Seguridad</strong>: Menor superficie de ataque al no tener lógica del lado del servidor en tiempo de ejecución.
                    </li>
                </ul>
                <h3 class="text-xl font-semibold mt-6 mb-3">Implementando SSG en Next.js</h3>
                <p>
                    Para generar páginas estáticas, utilizamos la función <code class="bg-gray-200 px-1 rounded">getStaticProps</code>. Si tienes rutas dinámicas, también puedes usar <code class="bg-gray-200 px-1 rounded">getStaticPaths</code>.
                </p>
                <pre class="bg-gray-100 p-4 rounded-md overflow-x-auto">
                    <code class="language-js">
                        {`export async function getStaticProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  return { props: { data } };
}

function Page({ data }) {
  return <div>{JSON.stringify(data)}</div>;
}

export default Page;`}
                    </code>
                </pre>
                <p>
                    Los datos se obtienen en tiempo de compilación, y la página se genera estáticamente.
                </p>
                <h3 class="text-xl font-semibold mt-6 mb-3">Ejemplo Real: Sitio Web Construido con SSG</h3>
                <p>
                    Un ejemplo práctico de SSG es el sitio web que construí personalmente: <a href="https://erconsrl.com.ar/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">erconsrl.com.ar</a>. Utilicé Next.js para generar un sitio estático que proporciona información sobre la empresa, sus servicios y proyectos. Al utilizar SSG, el sitio carga rápidamente y es fácilmente indexable por los motores de búsqueda, lo que mejora su visibilidad en línea.
                </p>

                <h2 class="text-2xl font-semibold mt-8 mb-4">Single Page Applications (SPA) 📱</h2>
                <p>
                    Las <strong>Aplicaciones de Página Única (SPA)</strong> cargan una sola página HTML y actualizan dinámicamente el contenido a medida que el usuario interactúa con la aplicación, sin recargar toda la página. Esto proporciona una experiencia de usuario fluida y similar a una aplicación de escritorio.
                </p>
                <h3 class="text-xl font-semibold mt-6 mb-3">Ventajas de SPA</h3>
                <ul class="list-disc list-inside">
                    <li>
                        <strong>Interactividad Mejorada</strong>: Transiciones suaves y experiencia de usuario más dinámica.
                    </li>
                    <li>
                        <strong>Menor Consumo de Ancho de Banda</strong>: Solo se cargan datos y vistas necesarias, no toda la página.
                    </li>
                    <li>
                        <strong>Desarrollo Modular</strong>: Facilitado por componentes reutilizables.
                    </li>
                </ul>
                <h3 class="text-xl font-semibold mt-6 mb-3">Implementando SPA en Next.js</h3>
                <p>
                    Aunque Next.js está optimizado para SSR y SSG, también puede utilizarse para crear aplicaciones SPA. Al deshabilitar el renderizado del lado del servidor y cargar componentes únicamente en el cliente, puedes crear una SPA con Next.js.
                </p>
                <p>
                    Sin embargo, para aplicaciones que no requieren SSR o SSG, y donde el SEO no es una prioridad, podrías considerar utilizar Create React App o frameworks similares, ya que están diseñados específicamente para SPA.
                </p>

                <h2 class="text-2xl font-semibold mt-8 mb-4">Comparación entre SSR, SSG y SPA 📝</h2>
                <p>
                    Comprender las diferencias entre SSR, SSG y SPA es crucial para elegir la estrategia adecuada para tu proyecto.
                </p>
                <table class="table-auto w-full text-left mt-4">
                    <thead>
                        <tr>
                            <th class="px-4 py-2">Estrategia</th>
                            <th class="px-4 py-2">Ventajas</th>
                            <th class="px-4 py-2">Desventajas</th>
                            <th class="px-4 py-2">Casos de Uso</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border px-4 py-2">SSR</td>
                            <td class="border px-4 py-2">
                                - Mejor SEO<br />
                                - Contenido dinámico actualizado en cada solicitud<br />
                                - Rápido TTFB
                            </td>
                            <td class="border px-4 py-2">
                                - Mayor carga en el servidor<br />
                                - Tiempo de respuesta más lento comparado con SSG
                            </td>
                            <td class="border px-4 py-2">
                                - E-commerce<br />
                                - Aplicaciones con contenido que cambia frecuentemente
                            </td>
                        </tr>
                        <tr class="bg-gray-100">
                            <td class="border px-4 py-2">SSG</td>
                            <td class="border px-4 py-2">
                                - Rendimiento excelente<br />
                                - Escalabilidad<br />
                                - Seguridad mejorada
                            </td>
                            <td class="border px-4 py-2">
                                - Contenido estático<br />
                                - Requiere regeneración para actualizar contenido
                            </td>
                            <td class="border px-4 py-2">
                                - Blogs<br />
                                - Documentación<br />
                                - Sitios corporativos
                            </td>
                        </tr>
                        <tr>
                            <td class="border px-4 py-2">SPA</td>
                            <td class="border px-4 py-2">
                                - Experiencia de usuario fluida<br />
                                - Interactividad mejorada<br />
                                - Menos solicitudes al servidor
                            </td>
                            <td class="border px-4 py-2">
                                - SEO limitado<br />
                                - Tiempo de carga inicial más largo
                            </td>
                            <td class="border px-4 py-2">
                                - Aplicaciones web complejas<br />
                                - Paneles de control<br />
                                - Herramientas internas
                            </td>
                        </tr>
                    </tbody>
                </table>

                <h2 class="text-2xl font-semibold mt-8 mb-4">Conclusión 🎯</h2>
                <p>
                    Next.js es una herramienta poderosa que te permite combinar diferentes estrategias de renderizado según las necesidades de tu aplicación. Comprender las diferencias entre <strong>SSR</strong>, <strong>SSG</strong> y <strong>SPA</strong> es esencial para tomar decisiones informadas que optimicen el rendimiento, la experiencia del usuario y el SEO.
                </p>
                <p>
                    Al dominar estas técnicas y aplicarlas adecuadamente, estarás preparado para llevar tus proyectos al siguiente nivel. Ya sea que estés construyendo un sitio de contenido estático, una aplicación dinámica o una plataforma interactiva, Next.js ofrece la flexibilidad y las herramientas necesarias para lograr tus objetivos. ¡Atrévete a experimentar y descubre todo lo que Next.js tiene para ofrecer! 🚀
                </p>

                <p>---</p>

                <p class="mt-8">
                    💬 <em>
                        ¿Tienes experiencias o consejos adicionales sobre Next.js? ¡Compártelas en Twitter mencionándome{' '}
                        <a
                            href="https://twitter.com/intent/tweet?text=Mis%20consejos%20sobre%20Next.js%20son...&hashtags=NextjsTips&via=sebacc92"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-blue-500 hover:underline"
                        >
                            @sebacc92
                        </a>{' '}
                        y usando el hashtag{' '}
                        <a
                            href="https://twitter.com/intent/tweet?text=%23NextjsTips&hashtags=NextjsTips&via=sebacc92"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-blue-500 hover:underline"
                        >
                            #NextjsTips
                        </a>
                        !
                    </em>
                </p>
            </article>
            <Button look="link" class="mt-8">
                <Link href="/blog" class="flex items-center">
                    <LuArrowLeft class="h-5 w-5" />
                    <span>Volver al Blog</span>
                </Link>
            </Button>
        </main>
    );
});

export const head: DocumentHead = {
    title: 'Dominando Next.js: SSR, SPA y SSG Sin Complicaciones',
};
