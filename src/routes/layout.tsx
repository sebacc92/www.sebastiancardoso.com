import { $, component$, Slot, useOnDocument } from "@builder.io/qwik";
import { routeLoader$, type RequestHandler } from "@builder.io/qwik-city";
import { guessLocale } from 'compiled-i18n';
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const onRequest: RequestHandler = async ({query, headers, locale}) => {
	// Allow overriding locale with query param `locale`
	const maybeLocale = query.get('locale') || headers.get('accept-language')
	locale(guessLocale(maybeLocale))
}

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  useOnDocument(
    'load',
    $(() => {
      // remove all query params except allowed
      const allowed = new Set(['page'])
      if (location.search) {
        const params = new URLSearchParams(location.search)
        for (const [key] of params) {
          if (!allowed.has(key)) {
            params.delete(key)
          }
        }
        let search = params.toString()
        if (search) search = '?' + search
        history.replaceState(
          history.state,
          '',
          location.href.slice(0, location.href.indexOf('?')) + search
        )
      }
    })
  )
  return (
    <div class="bg-gray-50 dark:bg-zinc-800 dark:text-white">
      <div class="container">
        <Header />
        <Slot />
        <Footer />
      </div>
    </div>
  )
});
