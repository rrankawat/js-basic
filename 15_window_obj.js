// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert
// alert("Hello World");

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if (confirm("Are you sure")) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

let val;

// Outer height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;

// Location object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
// window.location.href = "https://facebook.com";
// Reload
// window.location.reload();

// History Object
// window.history.go(-1);
val = window.history.length;

// Navigator Object - with browser itself
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);
