import { Html } from "@elysiajs/html";

interface LayoutProps {
  children: JSX.Element;
  title?: string;
  description?: string;
}

export function Layout({
  children,
  title = "HabityCo",
  description,
}: LayoutProps) {
  return (
    <html data-theme="dark" lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta content={description} name="description" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@5"
          rel="stylesheet"
          type="text/css"
        />
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4" />
        <script src="https://cdn.jsdelivr.net/npm/htmx.org@2.0.7/dist/htmx.min.js" />
        <title>{title}</title>
      </head>
      <body>
        <header>
          <nav>{/* Navigation content */}</nav>
        </header>
        <main>{children}</main>
        <footer>{/* Footer content */}</footer>
      </body>
    </html>
  );
}
