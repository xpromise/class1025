"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function Person(name, age) {
  _classCallCheck(this, Person);

  this.name = name;
  this.age = age;
}; //默认暴露
//特点：只能暴露一个内容 ， 引入的时候不能使用解构赋值


var _default = Person;
exports.default = _default;