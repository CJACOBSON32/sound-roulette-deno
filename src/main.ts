// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
    const text = Deno.readTextFileSync("./.env");

    console.log(".env text:\n", text, "\n");

    console.log("DISCORD_TOKEN exists: ", Deno.env.has("DISCORD_TOKEN"));
    console.log("DISCORD_TOKEN = ", Deno.env.get("DISCORD_TOKEN"));// src/server.ts

    if (import.meta.main) {
      const port = Number(Deno.env.get("PORT") ?? 8000);
      console.log(`Listening on http://localhost:${port}`);

      Deno.serve({ port }, (req) => {
        return new Response("Hello, world!", {
          status: 200,
          headers: { "content-type": "text/plain; charset=utf-8" },
        });
      });
    }
}
