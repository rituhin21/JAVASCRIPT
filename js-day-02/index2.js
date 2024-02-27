console.log("Expressions & Operators");

// Interview Questions

// Question: 01
// var result = "hello" / 2;
// console.log(result);
// if string divide by number the output will be NaN 

// Question: 02
// var result = 0.1 + 0.2;
// console.log(result.toFixed(3));
// Output: 0.30000000000000004
// the output will be so large to fixed the problem the toFixed(values which we want to show after the radix point) method will be applied here  

// Question: 03 
// var result = 55 * "Hello";
// console.log(result);
// "String * Number or String / Number" the output will be NaN 

// Question: 04
// console.log(5 == "5")
//equal to : it will give the true output
// console.log(5 === "5")
// exact or strict equal: will give the output of false
// console.log(5 != "5")
// not equal is false that means they are equal 
// console.log(5 !== "5")
// when exact equal or strict not equal then it is true 

// comparison operator always return truthy or falsy value 

// Question: 05 what is the difference between == and === Operator in JS?
// let num1 = 1;
// let num2 ="1";

// double equal
// if(num1 == num2){
//     console.log("Both are equal");
// }else{
//     console.log("Not Equal!");
// }

// tripple equal
// if(num1 === num2){
//     console.log("Both are equal");
// }else{
//     console.log("Not Equal!");
// }

// Question: 06 Write a program that determines if a person is eligible to drive based on their age being greater than or equal to 18 and having a valid driver's license?

// var age = 18;
// var hadDrivingLicense = true;

// console.log( age >= 18 && hadDrivingLicense === true);

// if(age >= 18 && hadDrivingLicense === true){
//     console.log("You are allow to drive");
// }else{
//     console.log("You have no permission to drive!");
// }


// ternary Operator
// conditoin ? expressionIfTrue: expressionIfalse;
// Q: write a program to check if the candidates isEligibleForDrive or not? Age must be equal to or greated than 18
// var age = 15;
// var result = age >= 18 ? "You are Eligible to Drive" : "you are not Eligible to Drive";
// console.log(result);