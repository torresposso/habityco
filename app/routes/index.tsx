import Hero from "../components/Hero";
import { createRoute } from "honox/factory";

export default createRoute((c) => {
  return c.render(
    <main>
      <Hero />
    </main>
  );
});
