
class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
}
//默认暴露
//特点：只能暴露一个内容 ， 引入的时候不能使用解构赋值
export default Person;