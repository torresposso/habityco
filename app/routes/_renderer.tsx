import { jsxRenderer } from "hono/jsx-renderer";
import { Link, Script } from "honox/server";

export default jsxRenderer(({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/htmx.org@4.0.0-alpha1/dist/htmx.min.js"
          integrity="sha256-7jOknhXbU1r1IjmOD26xPisOkA0jUGuWUkrRA69lkII="
          crossorigin="anonymous"
        ></script>
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/alpinejs/dist/cdn.min.js"
          integrity="sha256-Rmqrc5SKeSLTSnQ9shSKWmJco1ks8c1hLI8UG2Np03M="
          crossorigin="anonymous"
        ></script>
        <Link href="/app/style.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
});
