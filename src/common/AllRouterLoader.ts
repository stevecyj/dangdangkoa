import path from "path";
import fs from "fs";

class AllRouterLoader {
  static allRouterLoader: AllRouterLoader = new AllRouterLoader();
  // 初始化
  init() {
    console.log(this.getAbsoluteFilePaths())
    this.loadAllRouterWrapper();
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
    console.log('allFiles', allFiles)
    const allFullFilePaths: string[] = [];
    for (let file of allFiles) {
      const fullFilePath = `${dir}/${file}`;
      allFullFilePaths.push(fullFilePath);
    }
    return allFullFilePaths;
  }
  // 把二級路由加載到一級路由

  loadAllRouterWrapper() {
    // 調用獲取絕對路徑陣列的方法
    // 調用加載所有一級路由到二級路由的方法
  }

  // 監聽文件變化
  listen() {
    // 監聽文件變化
  }
}

export default AllRouterLoader.allRouterLoader;
