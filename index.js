//LEVEL 0----------------------------
var a = 1;
var b = 10;
var c = -6;

if (a < 8) {
  console.log("a is less than '8'");
} else {
  console.log("a is greater than '8'");
}

if (b < 8) {
  console.log("b is less than '8'");
} else {
  console.log("b is greater than '8'");
}

if (c < 8) {
  console.log("c is less than '8'");
} else {
  console.log("c is greater than '8'");
}
//LEVEL 1----------------------------------
if (a > b) {
  console.log("a is bigger than b");
} else if (a > c) {
  console.log("a is bigger than c");
} else {
  console.log("a is the smallest");
}
//LEVEL 2----------------------------------
a >= b ? console.log("a is larger than b") : console.log("a is less than b");
b >= c ? console.log("b is larger than c") : console.log("b is less than c");

//LEVEL 3 ---------------------------------
if (a >= b) {
  console.log(" a is larger than b")
} else {
  console.log("a is less than b")
}
if (b >= c) {
  console.log("b is larger than c");
} else {
  console.log("b is less than c")
}
if (a >= c) {
  console.log("a is larger than c");
} else {
  console.log("a is less than c")
}
//LEVEL 4------------------------------------
function compare(x, y, z) {
  if (x >= y) {
    return (" x is larger than y")
  } else {
    return ("x is less than y")
  }
  if (y >= z) {
    return ("y is larger than z");
  } else {
    return ("y is less than z")
  }
  if (x >= z) {
    return ("x is larger than z");
  } else {
    return "x is less than z"
  }
}

const comparedResult = compare(2, 100, 8)
console.log("Compared Result:", comparedResult);

//LEVEL 5----------------------------------

function randomNumber() {
  return Math.floor(Math.random() * 10);
}

var result = randomNumber()
console.log(result);