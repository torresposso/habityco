import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schemas/index";

export const db = drizzle({
  schema,
  connection: {
    url: process.env.DATABASE_URL as string,
    authToken: process.env.DATABASE_AUTH_TOKEN as string,
  },
});
