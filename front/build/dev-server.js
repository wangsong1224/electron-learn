const Koa = require("koa")
const app = new Koa()
const WebpackBaseConfig = require('./webpack.base.config')
console.log(webpackBaseConfig);
app.use(async ctx => {
  ctx.body = 'Hello World'
})
app.listen(8080)