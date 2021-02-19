// FUNCTION DECLARATIONS

function greet(firstName = "John", lastName = "Doe") {
  // ES5 Way
  /* if (typeof firstName === "undefined") {
    firstName = "John";
  }
  if (typeof lastName === "undefined") {
    firstName = "Doe";
  } */

  // console.log("Hello");
  return "Hello " + firstName + " " + lastName;
}

// console.log(greet("Steve", "Smith"));

// FUNCTION EXPRESSIONS

const square = function (x = 3) {
  return x * x;
};

// console.log(square(8));

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSION - IIFEs

// (function () {
//   console.log("IIFE Ran...");
// })();

// (function (name) {
//   console.log("Hello " + name);
// })("Brad");

const todo = {
  add: function () {
    console.log("Add todo...");
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  },
};

todo.delete = function () {
  console.log("Delete todo...");
};

todo.add();
todo.edit(22);
todo.delete();
