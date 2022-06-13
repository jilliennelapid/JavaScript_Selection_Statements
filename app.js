console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

//Exercise 1 (Number guess)
let favNumber = 8;

let answer = window.prompt("Guess a number.");

if (answer < favNumber){
  alert("Number guessed is too low.");
} else if (answer > favNumber){
  alert("Number guessed is too high.");
} else{
  alert("You guessed correctly, congratulations!");
}


//Exercise 2 (Seasons)
let birthMonth = window.prompt("What is your birth month?");

//[.toLowerCase] takes the input given by the user and makes the string fully in lowercase.
// This helps to avoid case-sensitivity and allows for variations of an answer to be 
// inputed, be changed to the same thing, and therefore processable by the logic.

switch (birthMonth.toLowerCase()){
  case "december":
  case "january":
  case "february":
    alert("You were born during the Winter Season.")
      break;
  case "march":
  case "april": 
  case "may":
    alert("You were born during the Spring Season.")
      break;
  case "june":
  case "july": 
  case "august":
    alert("You were born during the Summer Season.")
      break;
  case "september":
  case "october":
  case "november":
    alert ("You were born during the Autumn Season.")
      break;
  default:
    alert ("We don't have that month here...")
      break;
}

//Exercise 3

//Starting Code listed below:
/* 
let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

if (typeId == "01") {
  type = "Tank top";
} else if (typeId == "02") {
  type = "T-Shirt";
} else if (typeId == "03") {
  type = "Long Sleeve";
} else if (typeId == "04") {
  type == "Sweat Shirt";
} else {
  type = "Other";
}

if (colorId == "BL") {
  color = "Black";
} else if (colorId == "BL") {
  color = "Blue";
} else if (colorId == "RD") {
  color = "Red";
} else if (colorId == "PU") {
  color = "Purple";
} else {
  color = "White";
}

if (sizeId == "S") {
  size = "Small";
} else if (sizeId == "M") {
  size = "Medium";
} else if (sizeId == "L") {
  size = "Large";
} else if (sizeId == "XL") {
  size = "Extra Large";
} else {
  size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);
*/

//Switch Case rewrite

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
    type = "Tank top"
      break;
  case "02":
    type = "T-Shirt"
      break;
  case "03":
    type = "Long Sleeve"
      break;
  case "04":
    type = "Sweat Shirt"
      break;
  default:
    type = "Other"
      break;
}

switch (colorId) {
  case "BLK":
    color = "Black"
      break;
  case "BL":
    color = "Blue"
      break;
  case "RD":
    color = "Red"
      break;
  case "PU":
    color = "Purple"
      break;
  default:
    color = "White";
      break;
}

switch(sizeId) {
  case "S":
    size = "Small"
      break;
  case "M":
    size = "Medium"
      break;
  case "L":
    size = "Large"
      break;
  case "XL":
    size = "Extra Large"
      break;
  default:
    size = "One Size Fits All"
      break;
}

console.log(`Product: ${size} ${color} ${type}`);