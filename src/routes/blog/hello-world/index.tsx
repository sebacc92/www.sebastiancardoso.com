import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
    return (
        <main class="mt-8 mx-auto max-w-3xl px-4">
            <article class="prose lg:prose-xl">
                <h1 class="text-4xl font-bold mb-4">🚀 Construyendo Interfaces Ultrarrápidas con Qwik y Tailwind</h1>
                <p>
                    Si alguna vez has sentido que tus aplicaciones web podrían ser más rápidas, más eficientes y ofrecer una mejor experiencia al usuario, estás en el lugar correcto. Hoy quiero compartir contigo mi experiencia con <strong>Qwik</strong>, un framework que está revolucionando la forma en que construimos interfaces de usuario, y cómo combinarlo con <strong>Tailwind CSS</strong> puede llevar tus proyectos al siguiente nivel. 💡
                </p>

                <h2 class="text-2xl font-semibold mt-8 mb-4">¿Qué es Qwik y por qué debería importarte? 🤔</h2>
                <p>
                    Imagina un framework que te permita crear aplicaciones web de alto rendimiento sin tener que preocuparte por la carga inicial de JavaScript. <strong>Qwik</strong>, creado por Miško Hevery (sí, el mismo detrás de Angular), Adam Bradley y Manu Almeida, es esa herramienta. Su objetivo principal es reducir la carga y ejecución de JavaScript al mínimo, entregando solo el código que el usuario necesita en el momento en que lo necesita.
                </p>

                <h3 class="text-xl font-semibold mt-6 mb-3">Reanudabilidad vs. Hidratación 💧</h3>
                <p>
                    La mayoría de los frameworks modernos utilizan la hidratación para hacer que las aplicaciones sean interactivas en el cliente. Esto implica cargar y ejecutar todo el JavaScript de la aplicación, lo cual puede ser costoso en términos de tiempo y rendimiento. <strong>Qwik</strong> introduce el concepto de <em>reanudabilidad</em>, que permite pausar la ejecución en el servidor y reanudarla en el cliente sin tener que volver a cargar y ejecutar todo el código. 🛑➡️▶️
                </p>

                <h3 class="text-xl font-semibold mt-6 mb-3">Ventajas de usar Qwik 🌟</h3>
                <ul class="list-disc list-inside">
                    <li>
                        <strong>Carga ultrarrápida</strong>: Al retrasar la ejecución y descarga de JavaScript, las aplicaciones se vuelven interactivas casi al instante. ⚡
                    </li>
                    <li>
                        <strong>JavaScript bajo demanda</strong>: Qwik utiliza "JavaScript Streaming", cargando los fragmentos de código necesarios solo cuando el usuario interactúa con la aplicación. 📶
                    </li>
                    <li>
                        <strong>Escalabilidad</strong>: La cantidad de código descargado es proporcional a la interacción del usuario, no al tamaño total de la aplicación. 📈
                    </li>
                    <li>
                        <strong>Experiencia de usuario mejorada</strong>: Menos tiempo de carga y respuesta más rápida a las interacciones del usuario. 😊
                    </li>
                </ul>

                <h2 class="text-2xl font-semibold mt-8 mb-4">Combinando Qwik con Tailwind CSS 🎨</h2>
                <p>
                    Si Qwik es el motor que impulsa tu aplicación, <strong>Tailwind CSS</strong> es el diseño aerodinámico que la hace atractiva y funcional. Tailwind es un framework de CSS utility-first que permite construir interfaces personalizadas de manera eficiente y sin escribir CSS personalizado.
                </p>

                <h3 class="text-xl font-semibold mt-6 mb-3">¿Por qué Tailwind CSS? 🧐</h3>
                <ul class="list-disc list-inside">
                    <li>
                        <strong>Productividad</strong>: Con clases predefinidas, puedes construir diseños complejos sin salir de tu HTML. ⌨️
                    </li>
                    <li>
                        <strong>Personalización</strong>: A diferencia de otros frameworks CSS, Tailwind no te limita con componentes prehechos; te da las herramientas para crear tu propio diseño. 🎨
                    </li>
                    <li>
                        <strong>Consistencia</strong>: Facilita mantener un estilo coherente a lo largo de toda la aplicación. 🧩
                    </li>
                </ul>

                <h2 class="text-2xl font-semibold mt-8 mb-4">Manos a la obra: Construyendo una aplicación ultrarrápida 🛠️</h2>

                <h3 class="text-xl font-semibold mt-6 mb-3">Paso 1: Configuración del proyecto 🏁</h3>
                <p>
                    Primero, necesitamos configurar nuestro entorno con Qwik y Tailwind CSS. Afortunadamente, Qwik cuenta con herramientas que facilitan este proceso.
                </p>
                <pre class="bg-gray-100 p-4 rounded-md overflow-x-auto">
                    <code class="language-bash">
                        npm create qwik@latest
                        <br />
                        cd mi-app-ultrarrapida
                        <br />
                        npm install
                    </code>
                </pre>

                <h3 class="text-xl font-semibold mt-6 mb-3">Paso 2: Integrando Tailwind CSS 🌐</h3>
                <p>
                    Dentro de tu proyecto Qwik, instala Tailwind CSS y sus dependencias.
                </p>
                <pre class="bg-gray-100 p-4 rounded-md overflow-x-auto">
                    <code class="language-bash">
                        npm install -D tailwindcss postcss autoprefixer
                        <br />
                        npx tailwindcss init
                    </code>
                </pre>
                <p>
                    Configura Tailwind para que funcione con Qwik modificando los archivos{' '}
                    <code class="bg-gray-200 px-1 rounded">tailwind.config.js</code> y{' '}
                    <code class="bg-gray-200 px-1 rounded">postcss.config.js</code> según sea necesario.
                </p>

                <h3 class="text-xl font-semibold mt-6 mb-3">Paso 3: Creando componentes reanudables 🔄</h3>
                <p>
                    Con Qwik, los componentes se crean de manera similar a otros frameworks, pero con una diferencia clave: el uso de la función{' '}
                    <code class="bg-gray-200 px-1 rounded">component$</code>.
                </p>
                <pre class="bg-gray-100 p-4 rounded-md overflow-x-auto">
                    <code data-language="jsx" data-theme="Sprinkles Dark Sprinkles Light">
                        import {'{ component$ }'} from '@builder.io/qwik';

                        <br />
                        <br />
                        export const MiComponente = component$(() => {'{'}
                        <br />
                        &nbsp;&nbsp;return (
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1 class="text-2xl font-bold"&gt;¡Hola, mundo!&lt;/h1&gt;
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                        <br />
                        &nbsp;&nbsp;);
                        <br />
                        {'}'}); 
                    </code>
                </pre>

                <p>
                    El sufijo <code class="bg-gray-200 px-1 rounded">$</code> indica que el componente es reanudable y puede ser cargado de forma diferida.
                </p>

                <h3 class="text-xl font-semibold mt-6 mb-3">Paso 4: Añadiendo interactividad inteligente 🧠</h3>
                <p>
                    Gracias a la reactividad de Qwik, podemos manejar el estado de nuestra aplicación de forma eficiente.
                </p>
                <pre class="bg-gray-100 p-4 rounded-md overflow-x-auto">
                    <code class="language-jsx">
                        import {'{ component$, useSignal }'} from '@builder.io/qwik';

                        <br />
                        <br />
                        export const Contador = component$(() => {'{'}
                        <br />
                        &nbsp;&nbsp;const count = useSignal(0);
                        <br />
                        <br />
                        &nbsp;&nbsp;return (
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;button
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;class="px-4 py-2 bg-blue-500 text-white rounded"
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onClick${'() => count.value++'}
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&gt;
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contador: {'{count.value}'}
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;
                        <br />
                        &nbsp;&nbsp;);
                        <br />
                        {'}'}); 
                    </code>
                </pre>

                <p>
                    En este ejemplo, el estado <code class="bg-gray-200 px-1 rounded">count</code> se actualiza solo cuando es necesario, y Qwik se encarga de minimizar la cantidad de código JavaScript que se descarga y ejecuta.
                </p>

                <h2 class="text-2xl font-semibold mt-8 mb-4">Beneficios reales en rendimiento 🏎️</h2>
                <p>
                    Al implementar una aplicación con Qwik y Tailwind, notarás mejoras significativas en:
                </p>
                <ul class="list-disc list-inside">
                    <li>
                        <strong>Tiempo de carga inicial</strong>: La aplicación es interactiva más rápidamente, incluso en dispositivos móviles con conexiones lentas. 📲
                    </li>
                    <li>
                        <strong>Respuesta a la interacción del usuario</strong>: Solo se descarga y ejecuta el código necesario para la acción específica del usuario. 🎯
                    </li>
                    <li>
                        <strong>Optimización para SEO</strong>: Mejores tiempos de carga pueden mejorar tu posición en los resultados de búsqueda. 🔍
                    </li>
                </ul>

                <h2 class="text-2xl font-semibold mt-8 mb-4">Despedida a la hidratación tradicional 👋</h2>
                <p>
                    La hidratación es como tratar de encender un cohete con fósforos mojados: consume tiempo y recursos. Con Qwik, nos despedimos de ese enfoque y damos la bienvenida a una forma más eficiente de construir aplicaciones web. 🚀
                </p>

                <h2 class="text-2xl font-semibold mt-8 mb-4">Conclusión 📝</h2>
                <p>
                    La combinación de <strong>Qwik</strong> y <strong>Tailwind CSS</strong> ofrece una potente herramienta para desarrollar aplicaciones web ultrarrápidas y centradas en la experiencia del usuario. Al adoptar este enfoque, no solo optimizas el rendimiento, sino que también te posicionas a la vanguardia de las tecnologías web emergentes. 🌐
                </p>
                <p>
                    Si estás buscando llevar tus habilidades al siguiente nivel y construir aplicaciones que destaquen por su velocidad y eficiencia, te animo a que le des una oportunidad a Qwik. Quién sabe, tal vez descubras que es la pieza que faltaba en tu caja de herramientas de desarrollo. 🧰
                </p>

                <p>---</p>

                <p class="mt-8">
                    💬 <em>¿Has tenido alguna experiencia con Qwik o Tailwind CSS? ¡Me encantaría leer tus comentarios y experiencias!</em>
                </p>
            </article>
        </main>
    );
});

export const head: DocumentHead = {
    title: 'Construyendo Interfaces Ultrarrápidas con Qwik y Tailwind',
};
