// printing out using log method
console.log("Hadi ");
// var
let x = 3;
let str = "Berlin";
let old = true;
// ternary condition ? ex if true : ex if false
let kid = 18;
kid > 16
  ? console.log("Yay I can Drive")
  : console.log("No My Mom will drive me");
// $ nodemon index.js
// $ node index.js
// typeof
console.log(typeof x);
console.log(typeof old);
console.log(typeof str);
// length
let firstNa = "Hadi";
console.log(firstNa.length);
console.log(firstNa[0]);
let something = 1231;
something = 4567;
console.log(something);
const fatherName = "Wii";
console.log(fatherName);
// global var
var global = "Hi I am global"; // hoisted
// scope
{
  let local = 22;
  global = "Hi";
  var localGlob = "Hi It's me";
}
console.log(localGlob);
print("Hadi");

// function declaration
// hoisted
function print(xxx) {
  console.log(xxx);
}
// function call
print("Hadi");
print(22);
console.log(lastName);
var lastName = "Nsreeny"; // hoisted
console.log(lastName);
function sum(x, y) {
  let z = 0;
  z = x + y;
  return z;
}

console.log(sum(2, 3));
let sumRe = sum(2, 44);
console.log(sumRe);

// ----- option 1
console.log(5);
// ----- option 2
let num = 5;
console.log(num);
// ----- option 3
const a = 2;
const b = 3;
console.log(a + b);
// ----- option 4
console.log(3 - 2 - 4 + 2 + 6);

// substring
let originalString = "Hi My Name is Hadi, I'm 31 y.";
print(originalString.length);
let str1 = originalString.substring(5);
console.log(str1);
let str2 = originalString.substring(6, 10);
console.log(str2);
// toUpperCase
let str3 = originalString.toUpperCase();
console.log(str3);
// toLowerCase
let str4 = originalString.toLowerCase();
console.log(str4);
let firstName = "hAdI";
// Hadi
let firstChr = firstName[0].toUpperCase();
console.log(firstChr);
let restChr = firstName.substring(1).toLowerCase();
console.log(restChr);
let FinalFirstName = firstChr + restChr;
console.log(FinalFirstName);

let shortForm =
  firstName[0].toUpperCase() + firstName.substring(1).toLowerCase();
console.log(shortForm);