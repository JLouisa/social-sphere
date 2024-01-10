import { Elysia } from "elysia";

export const users = new Elysia({ prefix: "/user" })
  .post("/sign-in", signIn)
  .post("/sign-up", signUp)
  .post("/profile", getProfile);
