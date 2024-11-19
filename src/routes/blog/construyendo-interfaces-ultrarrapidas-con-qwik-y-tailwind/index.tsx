import { component$ } from '@builder.io/qwik';
import { Link, type DocumentHead } from '@builder.io/qwik-city';
import { LuArrowLeft } from '@qwikest/icons/lucide';
import { Button } from '~/components/ui';

export default component$(() => {
    return (
        <>
            <Button
                look="link"
                class="mt-8"
            >
                <Link
                    href="/blog"
                    class="flex items-center"
                >
                    <LuArrowLeft class="h-5 w-5" />
                    <span>Volver al Blog</span>
                </Link>
            </Button>
            <main class="mt-8 mb-24 mx-auto max-w-4xl">
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
                    <h4 class="text-lg font-semibold mt-6 mb-3">¿Qué es la Hidratación? 💧</h4>
                    <p>
                        Imagina que estás construyendo una aplicación web usando un framework tradicional como React o Vue. Cuando un usuario visita tu sitio, el servidor envía el HTML pre-renderizado de la página al navegador. Sin embargo, este HTML por sí solo no es interactivo; es como una foto estática de tu aplicación.
                    </p>
                    <p>
                        Para hacer que esa página sea interactiva (es decir, que los botones funcionen, que puedas escribir en los campos de texto, etc.), el navegador necesita descargar y ejecutar todo el JavaScript asociado a tu aplicación. Este proceso de tomar el HTML estático y "darle vida" en el navegador se llama <strong>hidratación</strong>.
                    </p>
                    <h4 class="text-lg font-semibold mt-6 mb-3">Pasos en la hidratación:</h4>
                    <ol class="list-decimal list-inside">
                        <li><strong>Descarga del HTML estático</strong>: El navegador recibe el HTML generado por el servidor.</li>
                        <li><strong>Descarga del JavaScript</strong>: Se descarga todo el código JavaScript necesario para la aplicación.</li>
                        <li><strong>Ejecución del JavaScript</strong>: El navegador ejecuta el JavaScript para reconstruir el estado de la aplicación y adjuntar los manejadores de eventos.</li>
                        <li><strong>Interactividad</strong>: La página ahora es interactiva y el usuario puede interactuar con ella.</li>
                    </ol>
                    <h4 class="text-lg font-semibold mt-6 mb-3">Problemas con la hidratación:</h4>
                    <ul class="list-disc list-inside">
                        <li><strong>Carga inicial lenta</strong>: Descargar y ejecutar todo el JavaScript desde el inicio puede hacer que la página tarde en ser interactiva, especialmente en conexiones lentas o dispositivos menos potentes.</li>
                        <li><strong>Duplicación de trabajo</strong>: El servidor ya generó el HTML, pero el navegador necesita volver a procesar y recrear todo el estado de la aplicación.</li>
                    </ul>

                    <h4 class="text-lg font-semibold mt-6 mb-3">¿Qué es la Reanudabilidad? 🔄</h4>
                    <p>
                        Ahora, imagina un enfoque diferente. En lugar de tener que descargar y ejecutar todo el JavaScript para que la página sea interactiva, ¿qué pasaría si pudiéramos simplemente "reanudar" la aplicación en el navegador exactamente donde el servidor la dejó? Aquí es donde entra el concepto de <strong>reanudabilidad</strong> que introduce Qwik.
                    </p>
                    <p>
                        <strong>Qwik</strong> permite que la aplicación se inicie inmediatamente sin necesidad de cargar todo el JavaScript desde el principio. Solo cuando el usuario interactúa con la página, se descarga y ejecuta el código necesario para esa interacción específica.
                    </p>
                    <h4 class="text-lg font-semibold mt-6 mb-3">Cómo funciona la reanudabilidad:</h4>
                    <ol class="list-decimal list-inside">
                        <li><strong>Renderizado en el servidor con estado incluido</strong>: El servidor envía el HTML con el estado de la aplicación y los manejadores de eventos ya serializados en él.</li>
                        <li><strong>Carga mínima en el cliente</strong>: El navegador recibe el HTML y muestra la página inmediatamente, sin necesidad de descargar todo el JavaScript.</li>
                        <li><strong>Interactividad bajo demanda</strong>: Cuando el usuario interactúa (por ejemplo, hace clic en un botón), el navegador descarga y ejecuta solo el código JavaScript necesario para manejar esa interacción.</li>
                        <li><strong>Reanudación del estado</strong>: La aplicación continúa desde el punto en que el servidor la dejó, sin tener que reconstruir todo el estado desde cero.</li>
                    </ol>
                    <h4 class="text-lg font-semibold mt-6 mb-3">Ventajas de la reanudabilidad:</h4>
                    <ul class="list-disc list-inside">
                        <li><strong>Inicio instantáneo</strong>: La página es interactiva casi al instante, mejorando la experiencia del usuario.</li>
                        <li><strong>Menor uso de recursos</strong>: Se descarga y ejecuta menos JavaScript, lo que es ideal para dispositivos con recursos limitados.</li>
                        <li><strong>Carga progresiva</strong>: El código se carga bajo demanda, optimizando el rendimiento de la aplicación.</li>
                    </ul>

                    <h4 class="text-lg font-semibold mt-6 mb-3">Una Analogía para Entenderlo Mejor 🧠</h4>
                    <p>
                        <strong>Hidratación</strong> es como si recibieras un libro en blanco (el HTML estático) y tuvieras que escribir todo el contenido (ejecutar el JavaScript) antes de poder leerlo (interactuar con la página). Es un proceso que consume tiempo y esfuerzo antes de que puedas disfrutar del libro.
                    </p>
                    <p>
                        <strong>Reanudabilidad</strong> es como recibir el libro ya escrito y listo para leer, pero con capítulos adicionales que solo se te entregan si decides leerlos. No tienes que esperar ni trabajar más; simplemente abres el libro y comienzas a leer, y si quieres más detalles, los obtienes en el momento.
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

                    {/* Continuar con el resto del artículo */}

                    {/* ... */}

                    <p>---</p>

                    <p class="mt-8">
                        💬 <em>
                            ¿Has tenido alguna experiencia con Qwik o Tailwind CSS? ¡Compártela
                            en Twitter mencionándome{' '}
                            <a
                            href="https://twitter.com/intent/tweet?text=He%20leído%20el%20artículo%20sobre%20Qwik%20y%20Tailwind%20de%20@sebacc920%20%23QwikTailwind&hashtags=QwikTailwind&via=sebacc920"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-blue-500 hover:underline"
                            >
                            @sebacc92
                            </a>{' '}
                            y usando el hashtag{' '}
                            <a
                            href="https://twitter.com/intent/tweet?text=%23QwikTailwind&hashtags=QwikTailwind&via=sebacc920"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-blue-500 hover:underline"
                            >
                            #QwikTailwind
                            </a>
                        </em>
                    </p>
                </article>
            </main>
            <Button
                look="link"
                class="mt-8"
            >
                <Link
                    href="/blog"
                    class="flex items-center"
                >
                    <LuArrowLeft class="h-5 w-5" />
                    <span>Volver al Blog</span>
                </Link>
            </Button>
        </>
    );
});

export const head: DocumentHead = {
    title: 'Construyendo Interfaces Ultrarrápidas con Qwik y Tailwind',
};
