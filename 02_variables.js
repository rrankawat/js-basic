/* var, let & const */

/* VAR */
// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

/* Init var */
// var greeting;
// console.log(greeting);
// greeting = 'Hola';
// console.log(greeting);

/* letters, numbers, _, $ */
/* Cannot start with number */

/* Multi work vars */
// var firstName = 'John'; // Camel case
// var first_name = 'John'; // Underscore
// var FirstName = 'John'; // Pascal case
// var firstname;

/* LET */
// let name;
// name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

/* CONST */
const name = 'John';
// console.log(name);
// Cannot reassign
// name = 'Sara';
// Have to assign a value
// const greeting;

const person = {
  name: 'John',
  age: 30,
};

person.name = 'Sara';
person.city = 'NY';

// console.log(person);

const number = [1, 2, 3, 4, 5];
number.push(6);
console.log(number);
