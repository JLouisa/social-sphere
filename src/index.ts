import { Elysia } from "elysia";
import { users } from "./controller/route";

const app = new Elysia()
  .use(users)
  .get("/", () => "Hello Elysia")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
