// Type Conversion - Explicitly

let val;

// Number To String
val = String(5);
val = String(4 + 4);
// Bool To String
val = String(true);
// Date To String
val = String(new Date());
// Array To String
val = String([1, 2, 3, 4]);

// toString()
val = (5).toString();
val = true.toString();

// String To Number
val = Number("5");
val = Number(true); // 1
val = Number(false); // 0
val = Number(null); // 0
val = Number("hello"); // NaN
val = Number([1, 2, 3, 4]);

val = parseInt("100.30");
val = parseFloat("100.30");

// Output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed());

// Type Coercion - Implicitly

const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);
