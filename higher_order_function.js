'use strict';

// Repeat Drill

function repeat(fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
}
function hello() {
  console.log('Hello world');
}
function goodbye() {
  console.log('Goodbye world');
}
let hi = repeat(goodbye,100);
