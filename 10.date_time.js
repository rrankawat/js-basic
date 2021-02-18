let val;

const today = new Date();
let birthday = new Date("9-10-1981 11:25:00");
birthday = new Date("Septmber 30 1993");
birthday = new Date("09/30/1993");

// val = today.toString();
val = today.getMonth();
val = today.getDay();
val = today.getDate();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
// Timestamp
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

// console.log(typeof val);
console.log(birthday);
