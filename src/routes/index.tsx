import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { _ } from "compiled-i18n";
import { Hero } from "~/components/Hero";

export default component$(() => {
  return (
    <main class="flex flex-col justify-center">
      <Hero />
    </main>
  );
});

export const head: DocumentHead = {
  title: _`Hola soy Sebastian Cardoso`,
  meta: [
    {
      name: "description",
      content: _`Soy un desarrollador web full-stack con experiencia en tecnologías modernas com Qwik.`,
    },
  ],
};
