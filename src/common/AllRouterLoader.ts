import Koa from "koa";
import body from "koa-body";
import json from "koa-json";
import path from "path";
import fs from "fs";
import Router from "koa-router";

class AllRouterLoader {
  app!:Koa;
  static allRouterLoader: AllRouterLoader = new AllRouterLoader();
  // 初始化
  init(app: Koa) {
    this.app = app;

    console.log(this.getAbsoluteFilePaths());
    const rootRouter = this.loadAllRouterWrapper()
    this.app.use(rootRouter.routes());
    // 監聽文件變化
    this.listen();
  }

  // 加载所有路由檔案陣列
  getFiles(dir: string) {
    return fs.readdirSync(dir);
  }

  // 加載所有路由檔案絕對路徑陣列
  getAbsoluteFilePaths() {
    const dir = path.join(process.cwd(), "src/router");
    const allFiles = this.getFiles(dir);
    console.log("allFiles", allFiles);
    const allFullFilePaths: string[] = [];
    for (let file of allFiles) {
      const fullFilePath = `${dir}/${file}`;
      allFullFilePaths.push(fullFilePath);
    }
    return allFullFilePaths;
  }

  // 把二級路由加載到一級路由
  loadAllRouterWrapper() {
    // 取得一級路由
    const rootRouter = this.getRootRouter()
    // 調用獲取絕對路徑陣列的方法
    const allFullFilePaths = this.getAbsoluteFilePaths();
    // 調用加載所有一級路由到二級路由的方法
    this.loadAllRouter(allFullFilePaths, rootRouter);
    return rootRouter;
  }

  getRootRouter() {
    const rootRouter = new Router();
    rootRouter.prefix("/dang"); // 路由前缀
    this.app.use(json());
    this.app.use(body());
    return rootRouter;
  }

  // 判斷是否為路由，自定義守衛
  isRouter(data: any): data is Router {
    return data instanceof Router;
  }

  loadAllRouter(allFullFilePaths: string[], rootRouter: Router) {
    for (let fullFilePath of allFullFilePaths) {
      const module = require(fullFilePath);
      if (this.isRouter(module)) {
        rootRouter.use(module.routes(), module.allowedMethods());
      }
    }
  }

  // 監聽文件變化
  listen() {
    this.app.listen(3002);
    console.log("server is running at http://localhost:3002");
  }
}

export default AllRouterLoader.allRouterLoader;
