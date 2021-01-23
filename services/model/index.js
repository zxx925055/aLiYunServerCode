// const pojo = require('../../helper/pojo')
// const { success, failed } = pojo
//pojo

const { success, failed } = {
  success: (result) => {
    return {
      code: 200,
      data: result
    }
  }, 
  failed: (error) => {
    console.log(error)
    return {
      code: 500,
      msg: error.message || '服务器异常'
    }
  }
}
module.exports = (config, file) => {
  const controller = require(`../../controller/${file}`)
  return config.reduce((copy, name) => {
    copy[name] = async ctx => {
      let res;
      try {
        const val = ctx.request.body
        await controller[name](val).then(result => {
          res = success(result)
        })
      } catch (err) {
        res = failed(err)
      }
      ctx.body = res
    }
    return copy
  }, {})
}
