import { serve } from "https://deno.land/std@0.115.1/http/server.ts";

console.log("http://localhost:3000/");
serve((req) => new Response("Hello World\n"), { addr: ":3000" });
