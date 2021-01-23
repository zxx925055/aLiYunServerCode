const model = require('../model')
const methods = require('../methods')
console.log(model)
module.exports = {
  ...model,
  'byUNameAndPwdQueryUser': { method: methods.post }
}
