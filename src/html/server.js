import Koa from 'koa'
import KoaStatic from 'koa-static'

const app = new Koa()

app.use(KoaStatic('./'))

app.use((ctx) => {
  ctx.body = 'koa Hello World'
})

app.listen(8088, () => {
  console.log('🍀🍀🍀🍀', '运行')
})
