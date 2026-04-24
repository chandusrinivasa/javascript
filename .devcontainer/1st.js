// Types of Variables in JS

// JavaScript has 3 main ways to declare variables:

//  var (Old way)
var sem = 8;

// var Can be changed
// var Not recommended (has issues with scope)

// 2. let (Modern way ✅)
let age = 20;
age = 21; // allowed

// let Value can be changed
// let Safe and widely used

// 3. const (Constant ❗)
const pi = 3.14;

// const Value cannot be changed


// for printing anything we use 
console.log("chandu")
console.log(age)
// printing the data in the table format we use the 
console.table([age,pi,sem]) //output
// ┌─────────┬────────┐
// │ (index) │ Values │
// ├─────────┼────────┤
// │ 0       │ 21     │
// │ 1       │ 3.14   │
// │ 2       │ 8      │
// └─────────┴────────┘
console.table([{name: "Chandu", age: 20}]);
// ┌─────────┬──────────┬─────┐
// │ (index) │ name     │ age │
// ├─────────┼──────────┼─────┤
// │ 0       │ 'Chandu' │ 20  │
// └─────────┴──────────┴─────┘
console.error()

// 👉 Shows error message (in red ❌)

console.error("Something went wrong");
//Shows warning (yellow ⚠️)

console.warn("This is a warning");

console.time("test"); //Measure time ⏱️

for (let i = 0; i < 10; i++) {
    console.log("hello")
}

console.timeEnd("test");
// console.group and console.groupEnd
// it is used to group multiple console logs together
// So your output looks clean and structured
console.group("User Details");  
console.log("Name: Chandu");
console.log("Age: 20");
console.groupEnd();//output
// User Details
//   Name: Chandu
//   Age: 20

// when define the variable donot assihn anything then it return uou undefined
var semister



