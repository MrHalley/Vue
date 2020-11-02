//ES模块化第一种写法  注意：es6模块化无法在Nodejs中执行，需要通过Babel转换成es5再执行
export function getList() {
    console.log("获取数据列表");
}
export function save() {
    console.log("保存数据");
}
//第二种写法
export default {
    getList2(){
        console.log("获取数据列表2");
    },
    save2(){
        console.log("保存数据2");
    }
}
