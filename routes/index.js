
module.exports = (config => {
  // console.log(config)//[ 'admin', 'user' ]
  return config.reduce((copy, name, index, config) => { //reduce(function(total,currentValue,currentIndex,arr),initValue)//初始值, 或者计算结束后的返回值--当前元素--当前元素的索引--当前元素所属的数组对象。
    // console.log(copy, name,index,config)
    const obj = require(`./${name}`)
    //读取文件中的暴露对象model.exports={}
    // {
    //    list: { method: 'get' },
    //    add: { method: 'post' },
    //    update: { method: 'post' },
    //    del: { method: 'post' } 
    // }
    //Object.keys(obj) => ['list','add','update','del']
    const newArr = Object.keys(obj).reduce((total, each, index, config) => {
      let item = { path: `/api/${name}/${each}`, method: obj[each].method, action: each, service: name }
      total.push(item)
      return total
    }, [])
    copy = copy.concat(newArr) 
    return copy
  }, [])//传递给函数的初始值  [] 
})([
  'admin',
  'user',
])
