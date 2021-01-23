/**
 * 整合所有子路由
 */

const router = require('koa-router')()
const routes = require('../routes')
routes.forEach((item,index) => {
  console.log(item,index)
  const service = require(`../services/${item.service}`)//读取
  router[item.method](item.path, service[item.action])
  // 
  // console.log(item.path)//接口名
  // router.get('/api/type/add', async(ctx => {
  //   let res;
  //   try {
  //     const val = ctx.request.body
  //     await controller[name](val).then(result => {
  //       res = success(result)
  //     })
  //   } catch (err) {
  //     res = failed(err)
  //   }
  //   ctx.body = res
  // }))
})
module.exports = router
