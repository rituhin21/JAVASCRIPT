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
// console.log(isNaN("Rijuan"));
// true 
// console.log(isNaN(parseInt("Rijuan")));
// false 
// console.log(isNaN(parseInt("123")));
// true 

//? NaN === NaN, why is it false?
// if(5 === 5){
//     console.log("Both are equal");
// }else{
//     console.log("Not equal");
// }

// if(NaN === NaN){
//     console.log("Both are equal");
// }else{
//     console.log("Not equal");
// }

//* concatanation in JavaScript
// concatanation is system which add two data types togather
// var str = "Hello " + "World!"
// console.log(str);

// *Type coercioni is the automatic conversion of "values" from one data type to another
// It is a fundamental part of JavaScript and can be used to make code more readable and efficient
// There are two types of coertion in JavaScript: implicit and explicit. Implicit coercion happens automatically, while explicit coercion is done manually by the programmer. 
// ! It's worth noting that type coercion can lean to unexpected results, so it's essential to be aware of how JavaScript handles these situations  

// console.log("10" - 5);
// if number string subtract a number the output will be a number 

// console.log(20 - "10");
// if we subtract a number string form a number then also the output will a number 

// console.log("10" + 5);
// if any string add with a number, the will convert into string and concat it. and the output result will be a string 

// console.log("Rijuan" + 10);
// if the string and number add with "+" then it will give the output of string which converted the number into a string and concat it 

// Some tricky questions
// console.log(10 + "20");
// console.log(10 - "20");
// console.log("" +  "");
// console.log(0 + " ");
// console.log("Rijuan" - "Tuhin");
// console.log(true + true);
// console.log(true + false);
// console.log(false + true);
// console.log(false - true);
// console.log(true - false);
// console.log(false + false);

