import Koa from "koa";
import body from "koa-body";
import json from "koa-json";
import Router from "koa-router";
import userRouter from "./router/user";
import allRouterLoader from "./common/AllRouterLoader";

const app = new Koa();
allRouterLoader.init();
const router = new Router();
router.prefix("/dang"); // 路由前缀

router.get("/test", async (ctx: Koa.Context, _next: Koa.Next) => {
  ctx.body = "hello world";
});

router.use(json());
router.use(body());

router.use(userRouter.routes(), userRouter.allowedMethods());

app.use(router.routes());
app.listen(3002);
console.log("server is running at http://localhost:3002");
