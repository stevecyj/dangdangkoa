import { Context } from "koa";
import Router from "koa-router";
const router = new Router();

router.prefix("/usermodule");

router.get("/findUserinfo/:username", async (ctx: Context) => {
  const { username } = ctx.params;
  ctx.body = `hello ${username}`;
});

export default router;