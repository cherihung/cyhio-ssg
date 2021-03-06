//import svgr from "vite-plugin-react-svg";
// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  // Enable the React renderer to support React JSX components.
  renderers: ["@astrojs/renderer-react"],
  buildOptions: {
    site: "http://cyh.io", // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
    sitemap: true, // Generate sitemap (set to "false" to disable)
  },
  dist: "./build", // When running `astro build`, path to final static output
  vite: {
    plugins: [],
  },
});
