import { logger } from "@bogeychan/elysia-logger";
import { Html, html } from "@elysiajs/html";

import { Elysia } from "elysia";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/pages";

const PORT = process.env.PORT;

const app = new Elysia();

// Only use logger in development mode
// if (process.env.NODE_ENV !== "production") {
//   app.use(
//     logger({
//       level: process.env.LOG_LEVEL || "info",
//       transport: {
//         target: "pino-pretty",
//         options: {
//           colorize: true,
//           levelFirst: true,
//           translateTime: true,
//           singleLine: true,
//           levelLabel: "levelLabel",
//           messageFormat: "url:{req.url}",
//           timestampKey: "time",
//           levelKey: "level",
//           messageKey: "msg",
//         },
//       },
//     })
//   );
// }

app
  .use(html())
  .get("/", () => (
    <Layout title="Home - HabityCo">
      <HomePage />
    </Layout>
  ))
  .listen(PORT);

process.stdout.write(`Listening on ${app.server?.url} \n`);
