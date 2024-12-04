// vite.config.ts
import { defineConfig } from "file:///home/seba/devs/sebastiancardoso/node_modules/.pnpm/vite@5.4.11_@types+node@22.9.1/node_modules/vite/dist/node/index.js";
import { qwikVite } from "file:///home/seba/devs/sebastiancardoso/node_modules/.pnpm/@builder.io+qwik@1.10.0_vite@5.4.11_@types+node@22.9.1_/node_modules/@builder.io/qwik/dist/optimizer.mjs";
import { qwikCity } from "file:///home/seba/devs/sebastiancardoso/node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@4.27.3_typescript@5.7.2_vite@5.4.11_@types+node@22.9.1_/node_modules/@builder.io/qwik-city/lib/vite/index.mjs";
import tsconfigPaths from "file:///home/seba/devs/sebastiancardoso/node_modules/.pnpm/vite-tsconfig-paths@5.1.3_typescript@5.7.2_vite@5.4.11_@types+node@22.9.1_/node_modules/vite-tsconfig-paths/dist/index.js";
import { i18nPlugin } from "file:///home/seba/devs/sebastiancardoso/node_modules/.pnpm/compiled-i18n@1.0.3_@builder.io+qwik@1.10.0_vite@5.4.11_@types+node@22.9.1__/node_modules/compiled-i18n/dist/vite.mjs";

// package.json
var package_default = {
  name: "my-qwik-empty-starter",
  description: "Blank project with routing included",
  "engines-annotation": "Mostly required by sharp which needs a Node-API v9 compatible runtime",
  private: true,
  trustedDependencies: [
    "sharp"
  ],
  "trustedDependencies-annotation": "Needed for bun to allow running install scripts",
  type: "module",
  scripts: {
    build: "qwik build",
    "build.client": "vite build",
    "build.preview": "vite build --ssr src/entry.preview.tsx",
    "build.server": "vite build -c adapters/netlify-edge/vite.config.ts",
    "build.types": "tsc --incremental --noEmit",
    deploy: "netlify deploy --build",
    "deploy:prod": "netlify deploy --build --prod",
    dev: "vite --mode ssr",
    "dev.debug": "node --inspect-brk ./node_modules/vite/bin/vite.js --mode ssr --force",
    fmt: "prettier --write .",
    "fmt.check": "prettier --check .",
    lint: 'eslint "src/**/*.ts*"',
    preview: "qwik build preview && vite preview --open",
    start: "vite --open --mode ssr",
    qwik: "qwik"
  },
  devDependencies: {
    "@builder.io/qwik": "1.10.0",
    "@builder.io/qwik-city": "1.10.0",
    "@netlify/edge-functions": "^2.0.0",
    "@qwik-ui/headless": "0.6.3",
    "@qwik-ui/styled": "0.2.0",
    "@qwik-ui/utils": "0.3.1",
    "@qwikest/icons": "0.0.13",
    "@types/eslint": "9.6.1",
    "@types/node": "22.9.1",
    "@typescript-eslint/eslint-plugin": "8.15.0",
    "@typescript-eslint/parser": "8.15.0",
    "@unpic/qwik": "0.0.46",
    autoprefixer: "10.4.20",
    "class-variance-authority": "0.7.0",
    "compiled-i18n": "1.0.3",
    eslint: "9.15.0",
    "eslint-plugin-qwik": "1.10.0",
    "netlify-cli": "^15.0.0",
    nx: "20.1.2",
    postcss: "8.4.49",
    prettier: "3.3.3",
    "prettier-plugin-tailwindcss": "0.6.9",
    "qwik-ui": "0.1.4",
    tailwindcss: "3.4.15",
    "tailwindcss-animate": "1.0.7",
    typescript: "5.7.2",
    undici: "6.21.0",
    vite: "5.4.11",
    "vite-tsconfig-paths": "5.1.3"
  },
  nx: {}
};

// vite.config.ts
var { dependencies = {}, devDependencies = {} } = package_default;
errorOnDuplicatesPkgDeps(devDependencies, dependencies);
var vite_config_default = defineConfig(({ command, mode }) => {
  return {
    plugins: [
      qwikCity(),
      qwikVite(),
      i18nPlugin({
        locales: ["en_US", "es_AR"]
      }),
      tsconfigPaths()
    ],
    // This tells Vite which dependencies to pre-build in dev mode.
    optimizeDeps: {
      // Put problematic deps that break bundling here, mostly those with binaries.
      // For example ['better-sqlite3'] if you use that in server functions.
      exclude: []
    },
    /**
     * This is an advanced setting. It improves the bundling of your server code. To use it, make sure you understand when your consumed packages are dependencies or dev dependencies. (otherwise things will break in production)
     */
    // ssr:
    //   command === "build" && mode === "production"
    //     ? {
    //         // All dev dependencies should be bundled in the server build
    //         noExternal: Object.keys(devDependencies),
    //         // Anything marked as a dependency will not be bundled
    //         // These should only be production binary deps (including deps of deps), CLI deps, and their module graph
    //         // If a dep-of-dep needs to be external, add it here
    //         // For example, if something uses `bcrypt` but you don't have it as a dep, you can write
    //         // external: [...Object.keys(dependencies), 'bcrypt']
    //         external: Object.keys(dependencies),
    //       }
    //     : undefined,
    server: {
      headers: {
        // Don't cache the server response in dev mode
        "Cache-Control": "public, max-age=0"
      }
    },
    preview: {
      headers: {
        // Do cache the server response in preview (non-adapter production build)
        "Cache-Control": "public, max-age=600"
      }
    }
  };
});
function errorOnDuplicatesPkgDeps(devDependencies2, dependencies2) {
  let msg = "";
  const duplicateDeps = Object.keys(devDependencies2).filter(
    (dep) => dependencies2[dep]
  );
  const qwikPkg = Object.keys(dependencies2).filter(
    (value) => /qwik/i.test(value)
  );
  msg = `Move qwik packages ${qwikPkg.join(", ")} to devDependencies`;
  if (qwikPkg.length > 0) {
    throw new Error(msg);
  }
  msg = `
    Warning: The dependency "${duplicateDeps.join(", ")}" is listed in both "devDependencies" and "dependencies".
    Please move the duplicated dependencies to "devDependencies" only and remove it from "dependencies"
  `;
  if (duplicateDeps.length > 0) {
    throw new Error(msg);
  }
}
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvc2ViYS9kZXZzL3NlYmFzdGlhbmNhcmRvc29cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3NlYmEvZGV2cy9zZWJhc3RpYW5jYXJkb3NvL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3NlYmEvZGV2cy9zZWJhc3RpYW5jYXJkb3NvL3ZpdGUuY29uZmlnLnRzXCI7LyoqXG4gKiBUaGlzIGlzIHRoZSBiYXNlIGNvbmZpZyBmb3Igdml0ZS5cbiAqIFdoZW4gYnVpbGRpbmcsIHRoZSBhZGFwdGVyIGNvbmZpZyBpcyB1c2VkIHdoaWNoIGxvYWRzIHRoaXMgZmlsZSBhbmQgZXh0ZW5kcyBpdC5cbiAqL1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCB0eXBlIFVzZXJDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHsgcXdpa1ZpdGUgfSBmcm9tIFwiQGJ1aWxkZXIuaW8vcXdpay9vcHRpbWl6ZXJcIjtcbmltcG9ydCB7IHF3aWtDaXR5IH0gZnJvbSBcIkBidWlsZGVyLmlvL3F3aWstY2l0eS92aXRlXCI7XG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tIFwidml0ZS10c2NvbmZpZy1wYXRoc1wiO1xuaW1wb3J0IHtpMThuUGx1Z2lufSBmcm9tICdjb21waWxlZC1pMThuL3ZpdGUnXG5pbXBvcnQgcGtnIGZyb20gXCIuL3BhY2thZ2UuanNvblwiO1xuXG50eXBlIFBrZ0RlcCA9IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG5jb25zdCB7IGRlcGVuZGVuY2llcyA9IHt9LCBkZXZEZXBlbmRlbmNpZXMgPSB7fSB9ID0gcGtnIGFzIGFueSBhcyB7XG4gIGRlcGVuZGVuY2llczogUGtnRGVwO1xuICBkZXZEZXBlbmRlbmNpZXM6IFBrZ0RlcDtcbiAgW2tleTogc3RyaW5nXTogdW5rbm93bjtcbn07XG5lcnJvck9uRHVwbGljYXRlc1BrZ0RlcHMoZGV2RGVwZW5kZW5jaWVzLCBkZXBlbmRlbmNpZXMpO1xuXG4vKipcbiAqIE5vdGUgdGhhdCBWaXRlIG5vcm1hbGx5IHN0YXJ0cyBmcm9tIGBpbmRleC5odG1sYCBidXQgdGhlIHF3aWtDaXR5IHBsdWdpbiBtYWtlcyBzdGFydCBhdCBgc3JjL2VudHJ5LnNzci50c3hgIGluc3RlYWQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBjb21tYW5kLCBtb2RlIH0pOiBVc2VyQ29uZmlnID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICBxd2lrQ2l0eSgpLFxuICAgICAgcXdpa1ZpdGUoKSxcbiAgICAgIGkxOG5QbHVnaW4oe1xuICAgICAgICBsb2NhbGVzOiBbJ2VuX1VTJywgJ2VzX0FSJ10sXG4gICAgICB9KSxcbiAgICAgIHRzY29uZmlnUGF0aHMoKVxuICAgIF0sXG4gICAgLy8gVGhpcyB0ZWxscyBWaXRlIHdoaWNoIGRlcGVuZGVuY2llcyB0byBwcmUtYnVpbGQgaW4gZGV2IG1vZGUuXG4gICAgb3B0aW1pemVEZXBzOiB7XG4gICAgICAvLyBQdXQgcHJvYmxlbWF0aWMgZGVwcyB0aGF0IGJyZWFrIGJ1bmRsaW5nIGhlcmUsIG1vc3RseSB0aG9zZSB3aXRoIGJpbmFyaWVzLlxuICAgICAgLy8gRm9yIGV4YW1wbGUgWydiZXR0ZXItc3FsaXRlMyddIGlmIHlvdSB1c2UgdGhhdCBpbiBzZXJ2ZXIgZnVuY3Rpb25zLlxuICAgICAgZXhjbHVkZTogW10sXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgYW4gYWR2YW5jZWQgc2V0dGluZy4gSXQgaW1wcm92ZXMgdGhlIGJ1bmRsaW5nIG9mIHlvdXIgc2VydmVyIGNvZGUuIFRvIHVzZSBpdCwgbWFrZSBzdXJlIHlvdSB1bmRlcnN0YW5kIHdoZW4geW91ciBjb25zdW1lZCBwYWNrYWdlcyBhcmUgZGVwZW5kZW5jaWVzIG9yIGRldiBkZXBlbmRlbmNpZXMuIChvdGhlcndpc2UgdGhpbmdzIHdpbGwgYnJlYWsgaW4gcHJvZHVjdGlvbilcbiAgICAgKi9cbiAgICAvLyBzc3I6XG4gICAgLy8gICBjb21tYW5kID09PSBcImJ1aWxkXCIgJiYgbW9kZSA9PT0gXCJwcm9kdWN0aW9uXCJcbiAgICAvLyAgICAgPyB7XG4gICAgLy8gICAgICAgICAvLyBBbGwgZGV2IGRlcGVuZGVuY2llcyBzaG91bGQgYmUgYnVuZGxlZCBpbiB0aGUgc2VydmVyIGJ1aWxkXG4gICAgLy8gICAgICAgICBub0V4dGVybmFsOiBPYmplY3Qua2V5cyhkZXZEZXBlbmRlbmNpZXMpLFxuICAgIC8vICAgICAgICAgLy8gQW55dGhpbmcgbWFya2VkIGFzIGEgZGVwZW5kZW5jeSB3aWxsIG5vdCBiZSBidW5kbGVkXG4gICAgLy8gICAgICAgICAvLyBUaGVzZSBzaG91bGQgb25seSBiZSBwcm9kdWN0aW9uIGJpbmFyeSBkZXBzIChpbmNsdWRpbmcgZGVwcyBvZiBkZXBzKSwgQ0xJIGRlcHMsIGFuZCB0aGVpciBtb2R1bGUgZ3JhcGhcbiAgICAvLyAgICAgICAgIC8vIElmIGEgZGVwLW9mLWRlcCBuZWVkcyB0byBiZSBleHRlcm5hbCwgYWRkIGl0IGhlcmVcbiAgICAvLyAgICAgICAgIC8vIEZvciBleGFtcGxlLCBpZiBzb21ldGhpbmcgdXNlcyBgYmNyeXB0YCBidXQgeW91IGRvbid0IGhhdmUgaXQgYXMgYSBkZXAsIHlvdSBjYW4gd3JpdGVcbiAgICAvLyAgICAgICAgIC8vIGV4dGVybmFsOiBbLi4uT2JqZWN0LmtleXMoZGVwZW5kZW5jaWVzKSwgJ2JjcnlwdCddXG4gICAgLy8gICAgICAgICBleHRlcm5hbDogT2JqZWN0LmtleXMoZGVwZW5kZW5jaWVzKSxcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIDogdW5kZWZpbmVkLFxuXG4gICAgc2VydmVyOiB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIC8vIERvbid0IGNhY2hlIHRoZSBzZXJ2ZXIgcmVzcG9uc2UgaW4gZGV2IG1vZGVcbiAgICAgICAgXCJDYWNoZS1Db250cm9sXCI6IFwicHVibGljLCBtYXgtYWdlPTBcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwcmV2aWV3OiB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIC8vIERvIGNhY2hlIHRoZSBzZXJ2ZXIgcmVzcG9uc2UgaW4gcHJldmlldyAobm9uLWFkYXB0ZXIgcHJvZHVjdGlvbiBidWlsZClcbiAgICAgICAgXCJDYWNoZS1Db250cm9sXCI6IFwicHVibGljLCBtYXgtYWdlPTYwMFwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xufSk7XG5cbi8vICoqKiB1dGlscyAqKipcblxuLyoqXG4gKiBGdW5jdGlvbiB0byBpZGVudGlmeSBkdXBsaWNhdGUgZGVwZW5kZW5jaWVzIGFuZCB0aHJvdyBhbiBlcnJvclxuICogQHBhcmFtIHtPYmplY3R9IGRldkRlcGVuZGVuY2llcyAtIExpc3Qgb2YgZGV2ZWxvcG1lbnQgZGVwZW5kZW5jaWVzXG4gKiBAcGFyYW0ge09iamVjdH0gZGVwZW5kZW5jaWVzIC0gTGlzdCBvZiBwcm9kdWN0aW9uIGRlcGVuZGVuY2llc1xuICovXG5mdW5jdGlvbiBlcnJvck9uRHVwbGljYXRlc1BrZ0RlcHMoXG4gIGRldkRlcGVuZGVuY2llczogUGtnRGVwLFxuICBkZXBlbmRlbmNpZXM6IFBrZ0RlcCxcbikge1xuICBsZXQgbXNnID0gXCJcIjtcbiAgLy8gQ3JlYXRlIGFuIGFycmF5ICdkdXBsaWNhdGVEZXBzJyBieSBmaWx0ZXJpbmcgZGV2RGVwZW5kZW5jaWVzLlxuICAvLyBJZiBhIGRlcGVuZGVuY3kgYWxzbyBleGlzdHMgaW4gZGVwZW5kZW5jaWVzLCBpdCBpcyBjb25zaWRlcmVkIGEgZHVwbGljYXRlLlxuICBjb25zdCBkdXBsaWNhdGVEZXBzID0gT2JqZWN0LmtleXMoZGV2RGVwZW5kZW5jaWVzKS5maWx0ZXIoXG4gICAgKGRlcCkgPT4gZGVwZW5kZW5jaWVzW2RlcF0sXG4gICk7XG5cbiAgLy8gaW5jbHVkZSBhbnkga25vd24gcXdpayBwYWNrYWdlc1xuICBjb25zdCBxd2lrUGtnID0gT2JqZWN0LmtleXMoZGVwZW5kZW5jaWVzKS5maWx0ZXIoKHZhbHVlKSA9PlxuICAgIC9xd2lrL2kudGVzdCh2YWx1ZSksXG4gICk7XG5cbiAgLy8gYW55IGVycm9ycyBmb3IgbWlzc2luZyBcInF3aWstY2l0eS1wbGFuXCJcbiAgLy8gW1BMVUdJTl9FUlJPUl06IEludmFsaWQgbW9kdWxlIFwiQHF3aWstY2l0eS1wbGFuXCIgaXMgbm90IGEgdmFsaWQgcGFja2FnZVxuICBtc2cgPSBgTW92ZSBxd2lrIHBhY2thZ2VzICR7cXdpa1BrZy5qb2luKFwiLCBcIil9IHRvIGRldkRlcGVuZGVuY2llc2A7XG5cbiAgaWYgKHF3aWtQa2cubGVuZ3RoID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICB9XG5cbiAgLy8gRm9ybWF0IHRoZSBlcnJvciBtZXNzYWdlIHdpdGggdGhlIGR1cGxpY2F0ZXMgbGlzdC5cbiAgLy8gVGhlIGBqb2luYCBmdW5jdGlvbiBpcyB1c2VkIHRvIHJlcHJlc2VudCB0aGUgZWxlbWVudHMgb2YgdGhlICdkdXBsaWNhdGVEZXBzJyBhcnJheSBhcyBhIGNvbW1hLXNlcGFyYXRlZCBzdHJpbmcuXG4gIG1zZyA9IGBcbiAgICBXYXJuaW5nOiBUaGUgZGVwZW5kZW5jeSBcIiR7ZHVwbGljYXRlRGVwcy5qb2luKFwiLCBcIil9XCIgaXMgbGlzdGVkIGluIGJvdGggXCJkZXZEZXBlbmRlbmNpZXNcIiBhbmQgXCJkZXBlbmRlbmNpZXNcIi5cbiAgICBQbGVhc2UgbW92ZSB0aGUgZHVwbGljYXRlZCBkZXBlbmRlbmNpZXMgdG8gXCJkZXZEZXBlbmRlbmNpZXNcIiBvbmx5IGFuZCByZW1vdmUgaXQgZnJvbSBcImRlcGVuZGVuY2llc1wiXG4gIGA7XG5cbiAgLy8gVGhyb3cgYW4gZXJyb3Igd2l0aCB0aGUgY29uc3RydWN0ZWQgbWVzc2FnZS5cbiAgaWYgKGR1cGxpY2F0ZURlcHMubGVuZ3RoID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICB9XG59XG4iLCAie1xuICBcIm5hbWVcIjogXCJteS1xd2lrLWVtcHR5LXN0YXJ0ZXJcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkJsYW5rIHByb2plY3Qgd2l0aCByb3V0aW5nIGluY2x1ZGVkXCIsXG4gIFwiZW5naW5lcy1hbm5vdGF0aW9uXCI6IFwiTW9zdGx5IHJlcXVpcmVkIGJ5IHNoYXJwIHdoaWNoIG5lZWRzIGEgTm9kZS1BUEkgdjkgY29tcGF0aWJsZSBydW50aW1lXCIsXG4gIFwicHJpdmF0ZVwiOiB0cnVlLFxuICBcInRydXN0ZWREZXBlbmRlbmNpZXNcIjogW1xuICAgIFwic2hhcnBcIlxuICBdLFxuICBcInRydXN0ZWREZXBlbmRlbmNpZXMtYW5ub3RhdGlvblwiOiBcIk5lZWRlZCBmb3IgYnVuIHRvIGFsbG93IHJ1bm5pbmcgaW5zdGFsbCBzY3JpcHRzXCIsXG4gIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiYnVpbGRcIjogXCJxd2lrIGJ1aWxkXCIsXG4gICAgXCJidWlsZC5jbGllbnRcIjogXCJ2aXRlIGJ1aWxkXCIsXG4gICAgXCJidWlsZC5wcmV2aWV3XCI6IFwidml0ZSBidWlsZCAtLXNzciBzcmMvZW50cnkucHJldmlldy50c3hcIixcbiAgICBcImJ1aWxkLnNlcnZlclwiOiBcInZpdGUgYnVpbGQgLWMgYWRhcHRlcnMvbmV0bGlmeS1lZGdlL3ZpdGUuY29uZmlnLnRzXCIsXG4gICAgXCJidWlsZC50eXBlc1wiOiBcInRzYyAtLWluY3JlbWVudGFsIC0tbm9FbWl0XCIsXG4gICAgXCJkZXBsb3lcIjogXCJuZXRsaWZ5IGRlcGxveSAtLWJ1aWxkXCIsXG4gICAgXCJkZXBsb3k6cHJvZFwiOiBcIm5ldGxpZnkgZGVwbG95IC0tYnVpbGQgLS1wcm9kXCIsXG4gICAgXCJkZXZcIjogXCJ2aXRlIC0tbW9kZSBzc3JcIixcbiAgICBcImRldi5kZWJ1Z1wiOiBcIm5vZGUgLS1pbnNwZWN0LWJyayAuL25vZGVfbW9kdWxlcy92aXRlL2Jpbi92aXRlLmpzIC0tbW9kZSBzc3IgLS1mb3JjZVwiLFxuICAgIFwiZm10XCI6IFwicHJldHRpZXIgLS13cml0ZSAuXCIsXG4gICAgXCJmbXQuY2hlY2tcIjogXCJwcmV0dGllciAtLWNoZWNrIC5cIixcbiAgICBcImxpbnRcIjogXCJlc2xpbnQgXFxcInNyYy8qKi8qLnRzKlxcXCJcIixcbiAgICBcInByZXZpZXdcIjogXCJxd2lrIGJ1aWxkIHByZXZpZXcgJiYgdml0ZSBwcmV2aWV3IC0tb3BlblwiLFxuICAgIFwic3RhcnRcIjogXCJ2aXRlIC0tb3BlbiAtLW1vZGUgc3NyXCIsXG4gICAgXCJxd2lrXCI6IFwicXdpa1wiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBidWlsZGVyLmlvL3F3aWtcIjogXCIxLjEwLjBcIixcbiAgICBcIkBidWlsZGVyLmlvL3F3aWstY2l0eVwiOiBcIjEuMTAuMFwiLFxuICAgIFwiQG5ldGxpZnkvZWRnZS1mdW5jdGlvbnNcIjogXCJeMi4wLjBcIixcbiAgICBcIkBxd2lrLXVpL2hlYWRsZXNzXCI6IFwiMC42LjNcIixcbiAgICBcIkBxd2lrLXVpL3N0eWxlZFwiOiBcIjAuMi4wXCIsXG4gICAgXCJAcXdpay11aS91dGlsc1wiOiBcIjAuMy4xXCIsXG4gICAgXCJAcXdpa2VzdC9pY29uc1wiOiBcIjAuMC4xM1wiLFxuICAgIFwiQHR5cGVzL2VzbGludFwiOiBcIjkuNi4xXCIsXG4gICAgXCJAdHlwZXMvbm9kZVwiOiBcIjIyLjkuMVwiLFxuICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L2VzbGludC1wbHVnaW5cIjogXCI4LjE1LjBcIixcbiAgICBcIkB0eXBlc2NyaXB0LWVzbGludC9wYXJzZXJcIjogXCI4LjE1LjBcIixcbiAgICBcIkB1bnBpYy9xd2lrXCI6IFwiMC4wLjQ2XCIsXG4gICAgXCJhdXRvcHJlZml4ZXJcIjogXCIxMC40LjIwXCIsXG4gICAgXCJjbGFzcy12YXJpYW5jZS1hdXRob3JpdHlcIjogXCIwLjcuMFwiLFxuICAgIFwiY29tcGlsZWQtaTE4blwiOiBcIjEuMC4zXCIsXG4gICAgXCJlc2xpbnRcIjogXCI5LjE1LjBcIixcbiAgICBcImVzbGludC1wbHVnaW4tcXdpa1wiOiBcIjEuMTAuMFwiLFxuICAgIFwibmV0bGlmeS1jbGlcIjogXCJeMTUuMC4wXCIsXG4gICAgXCJueFwiOiBcIjIwLjEuMlwiLFxuICAgIFwicG9zdGNzc1wiOiBcIjguNC40OVwiLFxuICAgIFwicHJldHRpZXJcIjogXCIzLjMuM1wiLFxuICAgIFwicHJldHRpZXItcGx1Z2luLXRhaWx3aW5kY3NzXCI6IFwiMC42LjlcIixcbiAgICBcInF3aWstdWlcIjogXCIwLjEuNFwiLFxuICAgIFwidGFpbHdpbmRjc3NcIjogXCIzLjQuMTVcIixcbiAgICBcInRhaWx3aW5kY3NzLWFuaW1hdGVcIjogXCIxLjAuN1wiLFxuICAgIFwidHlwZXNjcmlwdFwiOiBcIjUuNy4yXCIsXG4gICAgXCJ1bmRpY2lcIjogXCI2LjIxLjBcIixcbiAgICBcInZpdGVcIjogXCI1LjQuMTFcIixcbiAgICBcInZpdGUtdHNjb25maWctcGF0aHNcIjogXCI1LjEuM1wiXG4gIH0sXG4gIFwibnhcIjoge31cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFJQSxTQUFTLG9CQUFxQztBQUM5QyxTQUFTLGdCQUFnQjtBQUN6QixTQUFTLGdCQUFnQjtBQUN6QixPQUFPLG1CQUFtQjtBQUMxQixTQUFRLGtCQUFpQjs7O0FDUnpCO0FBQUEsRUFDRSxNQUFRO0FBQUEsRUFDUixhQUFlO0FBQUEsRUFDZixzQkFBc0I7QUFBQSxFQUN0QixTQUFXO0FBQUEsRUFDWCxxQkFBdUI7QUFBQSxJQUNyQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGtDQUFrQztBQUFBLEVBQ2xDLE1BQVE7QUFBQSxFQUNSLFNBQVc7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
