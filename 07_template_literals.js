const name = "John";
const age = 30;
const job = "Web Developer";
const city = "Miami";

// Without template strings (es5)
html =
  "<ul><li>Name: " +
  name +
  "</li><li>Age: " +
  age +
  "</li><li>Job: " +
  job +
  "</li><li>City: " +
  city +
  "</li></ul>";

function hello() {
  return "Hello";
}

// With template strings (es6)
html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${2 + 2}</li>
        <li>${hello()}</li>
        <li>${age > 60 ? "Retired" : "Working"}</li>
    </ul>
`;

document.body.innerHTML = html;
