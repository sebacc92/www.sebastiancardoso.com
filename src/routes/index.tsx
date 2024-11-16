import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { _ } from "compiled-i18n";
import { Hero } from "~/components/Hero";

export default component$(() => {
  return (
    <main class="content-center">
      <Hero />
      {/* <Writing /> */}
    </main>
  );
});

export const head: DocumentHead = {
  title: _`Hi I am Sebastian Cardoso`,
  meta: [
    {
      name: "description",
      content: _`I am a full-stack web developer with experience in modern technologies such as Qwik.`,
    },
  ],
};
