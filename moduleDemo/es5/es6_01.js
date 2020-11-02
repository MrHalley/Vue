"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getList = getList;
exports.save = save;
//ES模块化第一种写法  注意：es6模块化无法在Nodejs中执行，需要通过Babel转换成es5再执行
function getList() {
    console.log("获取数据列表");
}
function save() {
    console.log("保存数据");
}
//第二种写法
exports.default = {
    getList2: function getList2() {
        console.log("获取数据列表2");
    },
    save2: function save2() {
        console.log("保存数据2");
    }
};