import { logger } from "@bogeychan/elysia-logger";
import { Elysia } from "elysia";

const PORT = process.env.PORT;
const app = new Elysia()
  .use(
    logger({
      level: "error",
    })
  )
  .get("/", (ctx) => {
    ctx.log.error(ctx, "Context");
    ctx.log.info(ctx.request, "Request"); // noop

    return "Hello World";
  })
  .listen(PORT);

process.stdout.write(`Listening on ${app.server?.url}`);
