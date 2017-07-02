'use strict';

import BlackTriangle from "./components/BlackTriangle";

const triangle = new BlackTriangle('#triangle');

window.setInterval(
  () => {
    triangle.rotate(1);
    triangle.render();
  },
  20
);

class Math {
  @log
  add(a, b) {
    return a + b;
  }
}

function log(target, name, descriptor) {
  var oldValue = descriptor.value;

  descriptor.value = function() {
    console.log(`Calling "${name}" with`, arguments);
    console.log('999999999');

    return oldValue.apply(null, arguments);
  };

  return descriptor;
}

const math = new Math();

// passed parameters should get logged now
math.add(2, 4);

console.log('hahaha');
console.log('yyyyy');
console.log('uu');