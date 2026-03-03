// var, let, const.
// Look for the differences between them and when to use which one.

const submitBtn = document.getElementById("submit-btn");
const form = document.getElementById("contact-form");

// named functions, anonymous functions, arrow functions.
// Look for the differences between them and when to use which one.
form.addEventListener("submit", function (event) {
  event.preventDefault();
});

submitBtn.addEventListener("click", function () {
  const inputField = document.getElementById("name");
  const userInput = inputField.value;
  console.log("User Input:", userInput);
  // You can add more functionality here, such as sending the input to a server or displaying it on the page.
});
// Assignment
// 1. Validate the user input to ensure it's not empty before logging it to the console.
// 1. Ensure username is at least 3 characters long.
// 3. Ensure the message is at least 3 words.
