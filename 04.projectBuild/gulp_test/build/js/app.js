"use strict";

var _module = require("./module1");

var _module2 = require("./module2");

var _module3 = _interopRequireDefault(require("./module3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log((0, _module.add)(1, 2));
console.log((0, _module.mul)(1, 2));
var p = new _module3.default(_module2.name, _module2.age);
console.log(p);