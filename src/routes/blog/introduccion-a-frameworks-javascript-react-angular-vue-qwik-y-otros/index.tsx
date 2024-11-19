import { component$ } from '@builder.io/qwik';
import { Link, type DocumentHead } from '@builder.io/qwik-city';
import { Button } from '~/components/ui';
import { LuArrowLeft } from '@qwikest/icons/lucide';

export default component$(() => {
    return (
        <>
            <Button
                look="link"
                class="mb-8"
            >
                <Link
                    href="/blog"
                    class="flex items-center"
                >
                    <LuArrowLeft class="h-5 w-5" />
                    <span>Volver al Blog</span>
                </Link>
            </Button>
            <main class="mt-8 mb-24 px-4">
                <article class="prose lg:prose-xl">
                    <h1 class="text-4xl font-bold mb-4">
                        📚 Introducción a Frameworks JavaScript: React, Angular, Vue, Qwik, y otros
                    </h1>
                    <p>
                        El ecosistema de JavaScript ha evolucionado enormemente en la última década, dando lugar a una variedad de frameworks y bibliotecas que facilitan el desarrollo de aplicaciones web dinámicas e interactivas. En este artículo, exploraremos algunos de los frameworks más populares: <strong>React</strong>, <strong>Angular</strong>, <strong>Vue</strong>, <strong>Qwik</strong>, y otros. Analizaremos sus características, ventajas y casos de uso para ayudarte a elegir el más adecuado para tu próximo proyecto. 🚀
                    </p>

                    <h2 class="text-2xl font-semibold mt-8 mb-4">React ⚛️</h2>
                    <p>
                        <strong>React</strong> es una biblioteca de JavaScript para construir interfaces de usuario, creada por Facebook en 2013. Su enfoque se basa en componentes reutilizables y un flujo de datos unidireccional. Es ampliamente utilizado en la industria y ha sido fundamental en la adopción del desarrollo basado en componentes.
                    </p>
                    <ul class="list-disc list-inside">
                        <li>
                            <strong>Virtual DOM</strong>: React utiliza un DOM virtual para mejorar el rendimiento al actualizar solo los componentes que cambian, reduciendo las manipulaciones directas del DOM real.
                        </li>
                        <li>
                            <strong>JSX</strong>: Combina HTML y JavaScript en un solo archivo, facilitando la escritura y comprensión de componentes.
                        </li>
                        <li>
                            <strong>Comunidad y Ecosistema</strong>: Amplia comunidad, numerosos recursos y una gran cantidad de bibliotecas complementarias, como React Router y Redux.
                        </li>
                    </ul>
                    <p>
                        Además, React es altamente flexible y puede integrarse con otras bibliotecas o frameworks, lo que lo hace adecuado para una amplia variedad de proyectos, desde pequeñas aplicaciones hasta grandes plataformas empresariales.
                    </p>
                    <p>Ejemplo básico de un componente en React:</p>
                    <pre class="bg-gray-100 p-4 rounded-md overflow-x-auto">
                        <code class="language-js">
                            {`import React from 'react';

function HelloWorld() {
  return <h1>¡Hola, mundo!</h1>;
}

export default HelloWorld;`}
                        </code>
                    </pre>

                    <h2 class="text-2xl font-semibold mt-8 mb-4">Angular 🅰️</h2>
                    <p>
                        <strong>Angular</strong>, desarrollado por Google, es un framework completo para construir aplicaciones web de una sola página (SPA). Lanzado inicialmente en 2010 como AngularJS, fue reescrito completamente en 2016 (Angular 2+) para mejorar el rendimiento y la modularidad.
                    </p>
                    <ul class="list-disc list-inside">
                        <li>
                            <strong>TypeScript</strong>: Angular está escrito en TypeScript, proporcionando tipado estático y características orientadas a objetos, lo que ayuda a detectar errores en tiempo de compilación.
                        </li>
                        <li>
                            <strong>Arquitectura MVC</strong>: Sigue el patrón Modelo-Vista-Controlador, separando claramente la lógica de negocio de la presentación.
                        </li>
                        <li>
                            <strong>Inyección de Dependencias</strong>: Angular tiene un sistema robusto de inyección de dependencias para mejorar la modularidad y la testabilidad del código.
                        </li>
                    </ul>
                    <p>
                        Angular es ideal para aplicaciones a gran escala donde se requiere una estructura sólida y un conjunto completo de herramientas integradas. Su CLI facilita la generación de componentes y servicios, acelerando el desarrollo.
                    </p>
                    <p>Ejemplo básico de un componente en Angular:</p>
                    <pre class="bg-gray-100 p-4 rounded-md overflow-x-auto">
                        <code class="language-typescript">
                            {`import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: '<h1>¡Hola, mundo!</h1>',
})
export class HelloWorldComponent {}`}
                        </code>
                    </pre>

                    <h2 class="text-2xl font-semibold mt-8 mb-4">Vue.js 🖖</h2>
                    <p>
                        <strong>Vue.js</strong> es un framework progresivo para construir interfaces de usuario, creado por Evan You en 2014. Combina lo mejor de React y Angular en un paquete ligero y fácil de usar. Vue es conocido por su enfoque incrementable, permitiendo a los desarrolladores adoptarlo gradualmente en proyectos existentes.
                    </p>
                    <ul class="list-disc list-inside">
                        <li>
                            <strong>Facilidad de Aprendizaje</strong>: Sintaxis intuitiva y documentación clara, ideal para principiantes y proyectos que requieren una curva de aprendizaje suave.
                        </li>
                        <li>
                            <strong>Reactividad</strong>: Sistema reactivo eficiente que actualiza el DOM automáticamente cuando cambian los datos, mejorando la experiencia del usuario.
                        </li>
                        <li>
                            <strong>Escalabilidad</strong>: Puede usarse para proyectos pequeños y ampliarse para aplicaciones complejas gracias a su ecosistema de herramientas como Vuex y Vue Router.
                        </li>
                    </ul>
                    <p>
                        Vue.js ha ganado popularidad por su equilibrio entre simplicidad y funcionalidad, ofreciendo una alternativa ligera a otros frameworks más pesados.
                    </p>
                    <p>Ejemplo básico de un componente en Vue.js:</p>
                    <pre class="bg-gray-100 p-4 rounded-md overflow-x-auto">
                        <code class="language-html">
                            {`<template>
  <h1>¡Hola, mundo!</h1>
</template>

<script>
export default {
  name: 'HelloWorld',
};
</script>`}
                        </code>
                    </pre>

                    <h2 class="text-2xl font-semibold mt-8 mb-4">Qwik 🌐</h2>
                    <p>
                        <strong>Qwik</strong> es un framework emergente que se centra en la entrega instantánea de aplicaciones web, minimizando la carga y ejecución de JavaScript. Fue creado por Miško Hevery, el fundador de Angular, con el objetivo de resolver los problemas de rendimiento asociados con la hidratación en aplicaciones renderizadas en el servidor.
                    </p>
                    <ul class="list-disc list-inside">
                        <li>
                            <strong>Reanudabilidad</strong>: Permite que las aplicaciones se reanuden en el cliente sin necesidad de hidratación, lo que significa que la aplicación es interactiva inmediatamente.
                        </li>
                        <li>
                            <strong>JavaScript bajo demanda</strong>: Descarga y ejecuta solo el código necesario cuando el usuario interactúa, reduciendo significativamente el tiempo de carga inicial.
                        </li>
                        <li>
                            <strong>Alto Rendimiento</strong>: Optimizado para tiempos de carga rápidos y excelente experiencia de usuario, especialmente en dispositivos móviles y conexiones lentas.
                        </li>
                    </ul>
                    <p>
                        Qwik es especialmente útil para aplicaciones que requieren el mejor rendimiento posible y buscan minimizar la cantidad de JavaScript que se envía al cliente.
                    </p>
                    <p>Ejemplo básico de un componente en Qwik:</p>
                    <pre class="bg-gray-100 p-4 rounded-md overflow-x-auto">
                        <code class="language-tsx">
                            {`import { component$ } from '@builder.io/qwik';

export const HelloWorld = component$(() => {
  return <h1>¡Hola, mundo!</h1>;
});`}
                        </code>
                    </pre>

                    <h2 class="text-2xl font-semibold mt-8 mb-4">Otros Frameworks y Bibliotecas 🧩</h2>
                    <p>
                        Además de los mencionados, existen otros frameworks y bibliotecas que pueden ser adecuados según las necesidades de tu proyecto:
                    </p>
                    <ul class="list-disc list-inside">
                        <li>
                            <strong>Svelte</strong>: Ofrece una experiencia de desarrollo fluida, compilando los componentes en JavaScript puro, lo que resulta en aplicaciones rápidas y ligeras.
                        </li>
                        <li>
                            <strong>Ember.js</strong>: Un framework completo que sigue convenciones estrictas para proyectos de gran escala, proporcionando una estructura sólida.
                        </li>
                        <li>
                            <strong>Preact</strong>: Una alternativa ligera a React con la misma API pero menor tamaño, ideal para proyectos donde el rendimiento es crítico.
                        </li>
                        <li>
                            <strong>Lit</strong>: Facilita la creación de web components con una sintaxis simple y eficiente, promoviendo la interoperabilidad.
                        </li>
                    </ul>
                    <p>
                        Cada uno de estos frameworks tiene su propia filosofía y enfoque, y es importante evaluarlos en el contexto de los requisitos específicos de tu proyecto.
                    </p>

                    <h2 class="text-2xl font-semibold mt-8 mb-4">Comparación y Análisis 📝</h2>
                    <p>
                        Elegir el framework adecuado depende de varios factores: el tamaño y complejidad del proyecto, el rendimiento, la curva de aprendizaje y la comunidad de soporte. A continuación, se presenta una tabla comparativa:
                    </p>
                    <table class="table-auto w-full text-left mt-4">
                        <thead>
                            <tr>
                                <th class="px-4 py-2">Framework</th>
                                <th class="px-4 py-2">Ventajas</th>
                                <th class="px-4 py-2">Consideraciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="border px-4 py-2">React</td>
                                <td class="border px-4 py-2">Gran comunidad, flexible, amplio ecosistema.</td>
                                <td class="border px-4 py-2">Necesita configuración adicional para proyectos grandes.</td>
                            </tr>
                            <tr class="bg-gray-100">
                                <td class="border px-4 py-2">Angular</td>
                                <td class="border px-4 py-2">Framework completo, TypeScript integrado.</td>
                                <td class="border px-4 py-2">Curva de aprendizaje pronunciada, puede ser pesado para proyectos pequeños.</td>
                            </tr>
                            <tr>
                                <td class="border px-4 py-2">Vue.js</td>
                                <td class="border px-4 py-2">Fácil de aprender, flexible, documentación excelente.</td>
                                <td class="border px-4 py-2">Comunidad más pequeña que React o Angular.</td>
                            </tr>
                            <tr class="bg-gray-100">
                                <td class="border px-4 py-2">Qwik</td>
                                <td class="border px-4 py-2">Alto rendimiento, carga rápida, innovador.</td>
                                <td class="border px-4 py-2">Comunidad emergente, menos recursos disponibles.</td>
                            </tr>
                        </tbody>
                    </table>

                    <h2 class="text-2xl font-semibold mt-8 mb-4">Conclusión 🎯</h2>
                    <p>
                        Cada framework tiene sus fortalezas y debilidades. <strong>React</strong> es ideal para proyectos que requieren flexibilidad y tienen necesidades cambiantes. <strong>Angular</strong> es adecuado para aplicaciones empresariales de gran escala que se benefician de un framework completo. <strong>Vue.js</strong> es perfecto para quienes buscan una sintaxis sencilla y una curva de aprendizaje suave. <strong>Qwik</strong> se presenta como una opción interesante para proyectos que priorizan el rendimiento y la experiencia del usuario.
                    </p>
                    <p>
                        La elección dependerá de tus necesidades específicas, el tamaño del equipo, los plazos y las preferencias personales. Lo más importante es sentirse cómodo con la herramienta y que ésta se adapte al proyecto. ¡Explora, experimenta y encuentra el framework que mejor se ajuste a tu visión! 🌟
                    </p>

                    <p>---</p>

                    <p class="mt-8">
                        💬{' '}
                        <em>
                            ¿Cuál es tu framework favorito y por qué? ¡Compártelo en Twitter mencionándome{' '}
                            <a
                                href="https://twitter.com/intent/tweet?text=Mi%20framework%20favorito%20es...&hashtags=JSFrameworks&via=sebacc920"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="text-blue-500 hover:underline"
                            >
                                @sebacc920
                            </a>{' '}
                            y usando el hashtag{' '}
                            <a
                                href="https://twitter.com/intent/tweet?text=%23JSFrameworks&hashtags=JSFrameworks&via=sebacc920"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="text-blue-500 hover:underline"
                            >
                                #JSFrameworks
                            </a>
                            !
                        </em>
                    </p>
                </article>
            </main>
            <Button
                look="link"
                class="mb-8"
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
    title: 'Introducción a Frameworks JavaScript: React, Angular, Vue, Qwik, y otros',
};
