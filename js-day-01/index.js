// data type here
// null type 
// var box = null;
// console.log(typeof(box));

// Question: convert a string to a number?
// var myNumber = "10";
// console.log(myNumber);

// console.log(typeof myNumber)
// console.log(typeof +myNumber)

// Question: converting number to a string?
// let str = 5;
// console.log(str);
// console.log(typeof str);
// console.log(typeof String(str));
// console.log(typeof(str + ""));

// Question: Explain the concept truthy and falsy values in JavaScript. provide example?
// falsy values 
// false, 0(Zero),-0(Zero), ''(an empty string), null, undefined, NaN(Not a Number)
// truthy values 
// Non-empty strings, Numbers other than 0, and -0, Arrays (even if they’re empty), Objects, Functions, And any other non-falsy value

// Examples of truthy values 
// var myNmae = "Rijuan";// a Non Empty String
// if(myNmae){
//     console.log("This is truthy value");
// }else{
//     console.log("This is falsy value");
// }
// var myNumber = 12; // a non-Zero number
// var myArray = ['Rijuan', 'Tuhin'] // a non empty array
// var myObject = {
//     firstName : "Rijuan",
//     lastName : "Tuhin"

// } // a non empty object

// function(){}// a non-empty funtion


// parseInt and parseFloat
// parseInt: parseInt is a method which convert the string into a integer number 

// const myString = "42";
// const myNumber = parseInt(myString)
// console.log(myString);
// console.log(typeof myString);
// parseInt convert the string into a number 
// console.log(myNumber);
// console.log(typeof myNumber);

// parseFloat: parseFloat converts the floating string into a float number 
// const myString = "42.45";
// const myNumber = parseFloat(myString)
// console.log(myString);
// console.log(typeof myString);
// parseInt convert the string into a number 
// console.log(myNumber);
// console.log(typeof myNumber);


// some examples
// console.log(parseInt("123"));
// 123 (default base-10)
// console.log(parseInt("123", 10));
//123 (explicitly specify base-10)
// console.log(parseInt("   123 "))
// 123 (whitespace is ignored)
// console.log(parseInt("077"));
// 77 (Leading Zeros are ignored)
// console.log(parseInt("1.9"));
//1 (Decimal part is truncated)

// When we will not get an output
// console.log(parseInt("&123"));//NaN 
// console.log(parseInt("-123")); // -123
// console.log(parseInt("abc")); // NaN

// Question: what is the purpose of the NaN value in JavaScript?
// NaN stands for "Not a Number" and is returned when a mathematical operation doesn't yield a valid number. Also, to check whether a value is number of not we can use isNaN() function.
console.log(isNaN("Rijuan"));
// true 
console.log(isNaN(parseInt("Rijuan")));
// false 
console.log(isNaN(parseInt("123")));
// true 