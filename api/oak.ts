import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();


// get 範例
router.get("/", (ctx) => {
  ctx.response.body = `<!DOCTYPE html>
    <html>
      <head><title>Hello oak!</title><head>
      <body>
        <h1>Hello oak!</h1>
      </body>
    </html>
  `;
});


// post 範例
router.post("/users", async (context) => {
  const body = await context.request.body();
  const payload = await body.value;
  console.log(payload);
  context.response.body = `User created successfully!
  你傳的payload:${JSON.stringify(payload)}`;
});



Promise

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`HTTP webserver running.  Access it at:  http://localhost:8000/`);
await app.listen({ port: 8000 });
