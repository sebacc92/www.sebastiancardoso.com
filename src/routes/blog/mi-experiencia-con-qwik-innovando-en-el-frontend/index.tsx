import { component$ } from '@builder.io/qwik';
import { type DocumentHead, Link } from '@builder.io/qwik-city';
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
                    ✨ Mi Experiencia con Qwik: Innovando en el Frontend
                </h1>
                <p>
                    El mundo del desarrollo frontend está en constante evolución, y siempre estoy en busca de herramientas que me permitan crear aplicaciones más rápidas y eficientes. Hace unos meses, descubrí <strong>Qwik</strong>, un framework que promete revolucionar la forma en que construimos aplicaciones web. Hoy quiero compartir mi experiencia con Qwik y cómo ha cambiado mi perspectiva sobre el desarrollo frontend. 🚀
                </p>

                <h2 class="text-2xl font-semibold mt-8 mb-4">Primeros Pasos con Qwik 🛠️</h2>
                <p>
                    Al comenzar con Qwik, lo primero que noté fue su enfoque en la <strong>reanudabilidad</strong>. A diferencia de otros frameworks, Qwik permite que las aplicaciones se inicien rápidamente al cargar solo el HTML y el CSS necesarios, retrasando la carga de JavaScript hasta que sea realmente necesario.
                </p>
                <p>
                    Para iniciar un nuevo proyecto, utilicé el comando oficial:
                </p>
                <pre class="bg-gray-100 p-4 rounded-md overflow-x-auto">
                    <code class="language-bash">
                        {`npm create qwik@latest
cd mi-proyecto-qwik
npm install`}
                    </code>
                </pre>
                <p>
                    La estructura del proyecto es limpia y está bien organizada, lo que facilita la comprensión y el inicio del desarrollo.
                </p>

                <h2 class="text-2xl font-semibold mt-8 mb-4">Creando Componentes Reanudables 🔄</h2>
                <p>
                    Una de las características más interesantes de Qwik es la función <code class="bg-gray-200 px-1 rounded">component$</code>, que permite crear componentes reanudables que se cargan bajo demanda.
                </p>
                <p>Ejemplo de un componente básico:</p>
                <pre class="bg-gray-100 p-4 rounded-md overflow-x-auto">
                    <code class="language-tsx">
                        {`import { component$ } from '@builder.io/qwik';

export const Saludo = component$(() => {
  return <h1>¡Hola, Qwik!</h1>;
});`}
                    </code>
                </pre>
                <p>
                    El sufijo <code class="bg-gray-200 px-1 rounded">$</code> indica que el componente es reanudable y puede ser dividido para su carga diferida.
                </p>

                <h2 class="text-2xl font-semibold mt-8 mb-4">Estado y Reactividad con Signals 📡</h2>
                <p>
                    Qwik introduce las <strong>signals</strong> para manejar el estado de manera eficiente. Las signals son referencias reactivas que notifican a los componentes cuando su valor cambia.
                </p>
                <p>Ejemplo de contador utilizando signals:</p>
                <pre class="bg-gray-100 p-4 rounded-md overflow-x-auto">
                    <code class="language-tsx">
                        {`import { component$, useSignal } from '@builder.io/qwik';

export const Contador = component$(() => {
  const count = useSignal(0);

  return (
    <button
      class="px-4 py-2 bg-green-500 text-white rounded"
      onClick$={() => count.value++}
    >
      Contador: {count.value}
    </button>
  );
});`}
                    </code>
                </pre>
                <p>
                    En este ejemplo, el estado se actualiza sin necesidad de re-renderizar todo el componente, lo que mejora el rendimiento.
                </p>

                <h2 class="text-2xl font-semibold mt-8 mb-4">Integración con Tailwind CSS 🎨</h2>
                <p>
                    Para estilizar mi aplicación, integré <strong>Tailwind CSS</strong>, aprovechando su enfoque utility-first para crear diseños modernos y responsivos.
                </p>
                <p>
                    La configuración fue sencilla y me permitió aplicar clases directamente en los componentes de Qwik.
                </p>
                <p>Ejemplo de componente estilizado:</p>
                <pre class="bg-gray-100 p-4 rounded-md overflow-x-auto">
                    <code class="language-tsx">
                        {`import { component$ } from '@builder.io/qwik';

export const Tarjeta = component$(() => {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src="/img/tarjeta.jpg" alt="Imagen de la tarjeta" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Título de la Tarjeta</div>
        <p class="text-gray-700 text-base">
          Esta es una tarjeta de ejemplo utilizando Qwik y Tailwind CSS.
        </p>
      </div>
    </div>
  );
});`}
                    </code>
                </pre>

                <h2 class="text-2xl font-semibold mt-8 mb-4">Comparación con Otros Frameworks ⚖️</h2>
                <p>
                    Al comparar Qwik con otros frameworks como React, Angular o Vue, noté que Qwik se enfoca más en la <strong>performance</strong> y la <strong>carga diferida</strong> de componentes. Mientras que otros frameworks requieren la carga completa del bundle JavaScript al inicio, Qwik retrasa la carga de código hasta que es realmente necesario, lo que mejora significativamente el tiempo de carga inicial.
                </p>
                <p>
                    Además, la sintaxis de Qwik es similar a la de React, lo que facilita la transición para desarrolladores familiarizados con JSX. Sin embargo, el concepto de reanudabilidad y las signals son características únicas que requieren un cambio de mentalidad.
                </p>

                <h2 class="text-2xl font-semibold mt-8 mb-4">Casos de Uso y Aplicaciones Prácticas 📝</h2>
                <p>
                    Qwik es especialmente útil en aplicaciones donde el <strong>rendimiento</strong> y el <strong>tiempo de carga</strong> son críticos. Por ejemplo:
                </p>
                <ul class="list-disc list-inside">
                    <li>
                        <strong>Sitios web de alto tráfico</strong>: Donde cada milisegundo cuenta para retener a los usuarios.
                    </li>
                    <li>
                        <strong>Aplicaciones móviles web</strong>: En dispositivos con recursos limitados o conexiones lentas.
                    </li>
                    <li>
                        <strong>Páginas de destino (landing pages)</strong>: Que requieren tiempos de carga ultrarrápidos para mejorar las conversiones.
                    </li>
                </ul>
                <p>
                    En uno de mis proyectos, migré una landing page de React a Qwik y noté una reducción significativa en el tiempo de carga, lo que mejoró la tasa de conversión en un 15%.
                </p>

                <h2 class="text-2xl font-semibold mt-8 mb-4">Mejoras en la Experiencia de Desarrollo 💻</h2>
                <p>
                    Qwik ofrece una excelente experiencia de desarrollo con herramientas integradas y soporte para TypeScript. Algunas de las mejoras que aprecié fueron:
                </p>
                <ul class="list-disc list-inside">
                    <li>
                        <strong>Hot Module Replacement (HMR)</strong>: Permite ver los cambios en tiempo real sin recargar la página.
                    </li>
                    <li>
                        <strong>Integración con VSCode</strong>: Soporte para autocompletado y linting, lo que acelera el desarrollo.
                    </li>
                    <li>
                        <strong>Debugging sencillo</strong>: Gracias a su estructura clara y herramientas de desarrollo.
                    </li>
                </ul>

                <h2 class="text-2xl font-semibold mt-8 mb-4">Retos Encontrados 🧐</h2>
                <p>
                    No todo fue perfecto; también encontré algunos desafíos:
                </p>
                <ul class="list-disc list-inside">
                    <li>
                        <strong>Documentación limitada</strong>: Si bien la documentación oficial es útil, aún está en crecimiento y puede faltar información detallada.
                    </li>
                    <li>
                        <strong>Comunidad emergente</strong>: Al ser relativamente nuevo, la comunidad es pequeña en comparación con otros frameworks más establecidos.
                    </li>
                    <li>
                        <strong>Integración con librerías</strong>: Algunas librerías no están optimizadas para funcionar con Qwik, lo que puede requerir soluciones alternativas.
                    </li>
                    <li>
                        <strong>Aprendizaje de nuevos conceptos</strong>: La reanudabilidad y las signals son conceptos nuevos que pueden requerir tiempo para dominar.
                    </li>
                </ul>

                <h2 class="text-2xl font-semibold mt-8 mb-4">El Futuro de Qwik 🚀</h2>
                <p>
                    Qwik está en constante desarrollo y promete seguir innovando en el mundo del frontend. Con el creciente enfoque en la performance web, creo que Qwik tiene el potencial de convertirse en una herramienta clave para desarrolladores y empresas que buscan optimizar sus aplicaciones.
                </p>
                <p>
                    Estoy entusiasmado por ver cómo evoluciona y qué nuevas características se incorporarán en el futuro. La posibilidad de una comunidad más grande y más recursos hará que sea aún más accesible para todos.
                </p>

                <h2 class="text-2xl font-semibold mt-8 mb-4">Conclusiones Finales 🎯</h2>
                <p>
                    Mi experiencia con Qwik ha sido en general positiva. Su enfoque innovador en la reanudabilidad y la optimización del rendimiento lo convierten en una opción interesante para desarrolladores que buscan nuevas formas de mejorar sus aplicaciones.
                </p>
                <p>
                    Aunque aún tiene áreas por madurar, estoy entusiasmado con su potencial y planeo seguir explorándolo en futuros proyectos. Si buscas una alternativa fresca y estás dispuesto a experimentar, te animo a darle una oportunidad a Qwik. ¡Podría ser justo lo que necesitas para llevar tus habilidades al siguiente nivel! ✨
                </p>

                <p>---</p>

                <p class="mt-8">
                    💬{' '}
                    <em>
                        ¿Has probado Qwik? ¿Qué opinas de su enfoque? ¡Compártelo en Twitter mencionándome{' '}
                        <a
                            href="https://twitter.com/intent/tweet?text=Mi%20experiencia%20con%20Qwik%20es...&hashtags=QwikFramework&via=sebacc92"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-blue-500 hover:underline"
                        >
                            @sebacc92
                        </a>{' '}
                        y usando el hashtag{' '}
                        <a
                            href="https://twitter.com/intent/tweet?text=%23QwikFramework&hashtags=QwikFramework&via=sebacc92"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-blue-500 hover:underline"
                        >
                            #QwikFramework
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
    title: 'Mi Experiencia con Qwik: Innovando en el Frontend',
};
