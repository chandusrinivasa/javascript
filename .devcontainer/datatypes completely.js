// data types
// there are two types of datatypes primitive and non primitive datatypes
// primitive datatype: These store single values.
// and they keep the vaue of any primitive datatype as copy and give the output of copied vave
// 1. Number
// Used for integers and decimals
let age = 20;
let price = 99.99;
// 2. String
// Used for text (written in quotes)
let name = "Chandu";
// 3. Boolean
// Only true or false
let isLogin = true;
//  4. Undefined
// Variable declared but no value assigned
let x;
// 5. Null
// Represents empty value
let data = null;
//  6. BigInt
// Used for very large numbers
let big = 12345678901234567890n;
// 7. Symbol
// Unique value (used in advanced cases)
let id = Symbol("id");


// type converstion in the primitive datatypes 
let score ="33"
let valveinnumber = Number(score)//convserting the string to number
console.log(typeof valveinnumber)

// the major error in the type converstion is 
// when the string is of the form "33dd" 
// when we check the converted type then it is showing number 
// whenwe print that it will show output like NaNc
let valve = "55av"
console.log(typeof valve)
let conveterdvalve = Number(valve)
console.log(typeof conveterdvalve)//output number
console.log(conveterdvalve)//output NaN
// this the error in the javasacript

let islooged = 1// in this number is conveterd in to boolean i,e true 
let bovalve = Boolean(islooged)
console.log(bovalve)// output is true
// if you give any number other than 0 it is true if you give 0 than it is flase

let strins = ""
let convertstring = Boolean(strins)
console.log(convertstring)
//when you try to convert the empty string into boolena it will return flase
// and when return a string with charcter it will give you true


let num =99
let convstring = String(num)
console.log(convstring)// in this the given number is convetrd to string
console.log(typeof convstring)


//primitive datatype = string, Boolean , Null, undefined,Symbol,Bigint

//non-primitive datatype= in this the valuve of the datatypes are not copied , they give direct memory where the valve is stroed
//Array, object,Functions

// 1.Object

// A collection of key–value pairs

let person = {
  name: "Chandu",
  age: 21
}

console.log(person.name)


// 2.Array

// 👉 A list of values (ordered collection)

let arr = [10, 20, 30]

console.log(arr[0]) // 10

// Can store mixed types:

let mix = [10, "hello", true]

// 3.Function

//  Functions are also objects in JavaScript

function greet() {
  console.log("Hello")
}

greet()

//Can be stored in variables:

let sayHi = function() {
  console.log("Hi")
}
//==========================memory==================
//avaScript uses memory to store data while a program is running.
// There are two main types of memory used in JavaScript: stack memory and heap memory.

// 1.Stack Memory

// Stack memory is used to store primitive data types such as numbers, strings, booleans, null, and undefined.
// In stack memory, values are stored directly, and each variable gets its own copy of the value.

// When one variable is assigned to another, a copy of the value is created.
// So, if we change one variable, it does not affect the other variable.

// This is called pass by value.

// 2. Heap Memory

// Heap memory is used to store non-primitive data types such as objects, arrays, and functions.
// In heap memory, the actual data is stored in a large memory space, and variables store only the reference (address) of that data.

// When one variable is assigned to another, both variables point to the same memory location.
// So, if we change one variable, it will also affect the other variable.

// This is called pass by reference.





