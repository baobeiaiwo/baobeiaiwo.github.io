// 键=值&...&键=值
module.exports.parse = function(params) {
    let obj = {}
        // 1 & 变数组  ['键=值', ....]
    let arr = params.split('&')
        // 2 遍历
    arr.forEach(item => {
        // item  键=值
        // 3 = 变数组
        let tmp = item.split('=') // tmp[0] 键 tmp[1] 值

        // obj.tmp[0] = tmp[1]
        let bl = tmp[0]
        obj[bl] = tmp[1]
    })

    return obj
}


module.exports.stringify = function(obj) {
    let arr = [] // ['键=值', ....]
    for (let key in obj) {
        arr.push(`${key}=${obj[key]}`)
    }
    return arr.join('&')
}