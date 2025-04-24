import { defineMiddleware } from "astro:middleware";
import { randomUUID } from "node:crypto";

/**
 * @type {import("astro").MiddlewareHandler}
 */
export const onRequest = defineMiddleware((context, next) => {
  // This middleware runs on every request
  const requestId = randomUUID();

  context.locals.uuid = requestId;

  // Call the next middleware or route handler
  return next();
});
