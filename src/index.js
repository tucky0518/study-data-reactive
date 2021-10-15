import observe from './observe.js';
import Watcher from './Watcher.js';

var obj = {
  a: {
    m: {
      n: 5
    }
  },
  b: 10,
  c: {
    d: {
      e: {
        f: 555
      }
    }
  },
  g: [1, 2, 3, 4]
};

observe(obj);

// obj.a.m = 10;
// console.log(obj.c.d.e.f);
// obj.g.splice(2, 1, 7, 8, 9);
// console.log(obj.g);
// obj.b++;

new Watcher(obj, 'a.m.n', val => {
  console.log('☆☆☆☆☆', val);
});
obj.a.m.n = 10;
console.log(obj);
