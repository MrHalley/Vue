"use strict";

var _es6_ = require("./es6_01");

var _es6_2 = _interopRequireDefault(_es6_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _es6_.getList)(); //第一种写法 只取需要的方法即可

(0, _es6_.save)();

//第二种写法

_es6_2.default.getList2();
_es6_2.default.save2();