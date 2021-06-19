import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    adapter: adapter({
      out: "build/path"
    }),
    paths: {
      base: "/svg-loaders-svelte",
      assets: "/svg-loaders-svelte"
    }
  }
};

export default config;
