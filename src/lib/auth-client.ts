import { createAuthClient } from "better-auth/client";
import { admin, organization } from "better-auth/plugins";

export const authClient = createAuthClient({
  plugins: [admin(), organization()],
});
