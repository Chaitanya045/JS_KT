function fn() {
  console.log("I am normal function");
}

fn();

// IIFE - Immediately invoked function expression

(function () {
  console.log("I am IIFE");
})();

// Arrow functions

const add = (a, b) => {
  return a + b;
};


console.log(add(1, 2));

let fn1 = function () {
  console.log("I am fn1");
};

fn1();

fn1.age = 30;

console.log(fn1)
