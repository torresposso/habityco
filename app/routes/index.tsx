import { createRoute } from "honox/factory";

export default createRoute((c) => {
  return c.render(
    <div class="py-8 text-center">
      <h1 class="text-3xl font-bold">It works</h1>
    </div>
  );
});
