import {add, mul} from './module1';
import {name, age} from './module2';
import Person from './module3';

console.log(add(1, 2));
console.log(mul(1, 2));

const p = new Person(name, age);
console.log(p);
