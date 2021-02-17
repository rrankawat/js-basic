// Create some arrays
const numbers = [34, 45, 33, 26, 31, 5, 67, 24];
const numbers2 = new Array(43, 54, 52, 56, 76, 78);
const fruits = ["Apple", "Banana", "Orange", "Pear"];
const mixed = [22, "Hello", true, undefined, null, { a: 1, b: 2 }, new Date()];

let val;

// // Get array length
// val = numbers.length;
// // Check if is array
// val = Array.isArray(numbers);
// // Get single value
// val = numbers[3];
// // Insert into array
// numbers[2] = 100;
// // Find the index of value
// val = numbers.indexOf(63);

// MUTATTING ARRAYS

// // Add on to the end
// numbers.push(250);
// // Add on to front
// numbers.unshift(120);
// // Take off from end
// numbers.pop();
// // Take off from front
// numbers.shift();
// // Splice values
// numbers.splice(1, 3);
// // Reverse
// numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

// // Sorting arrays
// val = fruits.sort();
// val = numbers.sort();

// // Compare function
// val = numbers.sort(function (a, b) {
//   return a - b;
// });

// // Reverse sort
// val = numbers.sort(function (a, b) {
//   return b - a;
// });

// Find
function under50(num) {
  return num < 50;
}
val = numbers.find(under50);

function over50(num) {
  return num > 50;
}
val = numbers.find(over50);

console.log(numbers);
console.log(val);
