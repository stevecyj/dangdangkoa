## npm dependencies

```bash
npm install -S @types/jsonwebtoken @types/koa @types/koa-json @types/koa-router @types/lodash @types/mysql jsonwebtoken koa koa-body koa-json koa-router log4js mysql nodemon reflect-metadata sequelize sequelize-typescript ts-node typescript

```

## secondary router

```JS
http: //localhost:3002/dang/usermodule/findUserinfo/coco
```

## 路徑

* process.cwd(): 當前執行node的路徑
* __dirname: 當前被執行檔案的路徑

## 自動加載路由

* 不必再修改 app.ts
* app.ts 路由越多時只需加入一行
