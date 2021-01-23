const success = (result) => {
  return {
    code: 200,
    data: result
  }
}
const failed = (error) => {
  console.log(error)
  return {
    code: 500,
    msg: error.message || '服务器异常'
  }
}

module.exports = {
  success,
  failed
}