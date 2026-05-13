// name = "chandu"
// // see the string methods
// // see the number methods 
// // in the number we have method called random which give random number
// // in this if want the range of number in the random number then we should use the formula
// // example 
// const min = 10
// const max = 20
// console.log(Math.floor(Math.random() * (max -min + 1)))

// dates in the javascript
let myDate = new Date()
console.log(myDate)// return the current date 2026-05-11T15:47:39.055Z
console.log(myDate.toString());// output Sun May 10 2026 16:09:31 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());// output Sun May 10 2026
console.log(myDate.toLocaleString());//5/10/2026, 4:09:31 PM
console.log(typeof myDate);//output object

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString()) //output Mon Jan 23 2023
//in this we onlu passed the valve which has to printed , so we git the output has Mon Jan 23 2023
// note that in the javascript the mounth starts with 0 so when you ebter  0 it gives you januarry

let mydate = Date.now()
console.log(mydate)// output 778514261472
//in this when i want a date currectly of to day it is giving in seconds

console.log(myDate.toLocaleString('default', {
weekday: "long"
}))// it is the parameter in the localstring inside we can use , weekday or many other parameter can be used , in this weekday is 
// used to tell which day is today

