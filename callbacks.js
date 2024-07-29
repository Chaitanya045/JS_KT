// Synchronous callbacks ----------------------------------------------------------------

// function greet(name, n, cb1, cb2) {
//   let msg = "Hello " + name;
//   let age = n;
//   cb1(msg);
//   cb2(age);
// }

// function greetings(msg) {
//   console.log(msg);
// }

// function ageshow(age) {
//   console.log(age);
// }

// greet("John", 20, greetings, ageshow);

// Asynchronous ----------------------------------------------------------------

// console.log("Hello");

// setTimeout(function () {
//   console.log("World");
// }, 3000);

// setTimeout(function () {
//   console.log("Bye");
// }, 2000);

// function saySeeyou() {
//   console.log("Seeyou");
// }

// saySeeyou();

// Downsides --------------------------------

// Pyramid of doom --------------------------------
function load(website, cb) {
  console.log(website);
  cb();
}

load(website1, function loaded() {
  console.log("Loaded");
  load(website2, function loaded() {
    console.log("Loaded");
    load(website2, function loaded() {
        console.log("Loaded");
        load(website2, function loaded() {
            console.log("Loaded");
            load(website2, function loaded() {
                console.log("Loaded");
                load(website2, function loaded() {
                    console.log("Loaded");
                    load(website2, function loaded() {
                        console.log("Loaded");
                        load(website2, function loaded() {
                            console.log("Loaded");
                            load(website2, function loaded() {
                                console.log("Loaded");
                              });
                          });
                      });
                  });
              });
          });
      });
  });
});
