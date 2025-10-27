import { auth } from "@/lib/auth";
import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const protectedRoutes = ["/dashboard", "/profile"]; // Define routes to protect
  const isAuthed = await auth.api.getSession({
    headers: context.request.headers,
  });

  if (!isAuthed) {
    if (protectedRoutes.includes(context.url.pathname)) {
      return context.redirect("/login");
    }
    context.locals.user = null;
    context.locals.session = null;
    return next();
  }

  context.locals.user = isAuthed.user;
  context.locals.session = isAuthed.session;

  return next();
});
