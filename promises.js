setTimeout(() => {
  console.log("I am executed after 2Secs");
}, 2000);

let p1 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    console.log("I am a promise and I am fulfilled");
    resolve(true);
  }, 5000);
});

let p2 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    console.log("I am a promise and I am rejected");
    reject(new Error("I am an error"));
  }, 5000);
});

console.log(p1);

p1.then((value) => {
  console.log(value);
});

p2.catch((error) => {
  console.log(error);
});

p2.then(null, (error) => {
  console.log(error);
});

// Micro Task ----------------------------------------------------------------

// console.log("Program Started");

// setTimeout(() => {
//   console.log("I am SetTimeout");
// }, 1000);

// Promise.resolve().then(() => {
//   console.log("I am Promise");
// });

// console.log("Program Finished");
