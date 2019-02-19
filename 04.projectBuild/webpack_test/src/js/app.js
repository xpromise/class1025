import {add} from './module1';
import {name, age} from './module2';
import Person from './module3';
import $ from 'jquery';

import '../less/test1.less';
import '../less/test2.less';

console.log(add(1, 2));
console.log(add(1, 2));
console.log($);

const p = new Person(name, age);
console.log(p);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}