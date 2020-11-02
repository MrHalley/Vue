//CommonJs模块化规范

// 定义成员：
const sum = function(a,b){
    return parseInt(a) + parseInt(b)
}
const subtract = function(a,b){
    return parseInt(a) - parseInt(b)
}
const multiply = function(a,b){
    return parseInt(a) * parseInt(b)
}
const divide = function(a,b){
    return parseInt(a) / parseInt(b)
}


// 导出成员：
// module.exports = {
//     sum: sum,
//     subtract: subtract,
//     multiply: multiply,
//     divide: divide
// }

//简写
module.exports = {
    sum,
    subtract,
    multiply,
    divide
}