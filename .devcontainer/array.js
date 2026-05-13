//ARRAY...............
// in the array in the javascript array can store differnt daratype
// example , int, flot , string etc
// import points of array
//1. the array which we can change perform the operation add the element , deletet the element etc
//2.when you make a copy of the array , if you change any element in one array it will affect another array also i,e called shallow copy
//3. can be accesed by using index myarr[0]
// 4. it is an object

const myarr =[1,2,3,"chandu",true]

// other way of writing the array
const arrays = new Array(1,2,3,4)
console.log(arrays[3])


// array ,methods
//1. push = adding elemnt to array
//2.pop = remove the last elemrnt in array
//3. unshift = add the element to the first in the array
//4. shift = remove the elment in the first

myarr.push(10)
console.log(myarr)
myarr.pop()
console.log(myarr)

myarr.unshift("naveena")
console.log(myarr)
myarr.shift()
console.log(myarr)

// slice , splice

// slice = in this we make the copy of the array in that we change,
// so original array reamin the same

let fruits = ["apple", "banana", "mango", "orange"];

let result = fruits.slice(1, 3); // in thses the 1 is start and 3 end where it is not included

console.log("slice done array",result);
console.log("original array without silce operatuon",fruits);
// splice = where in this it will make the changes in the original array
// , the changes made array will be the final array
// changes can be => add, remove update 
//array.splice(start, deleteCount, items)// syntax for the splice
let cars = ["BMW","Ambesador","Fortune","Thar","Defender"]
let final = cars.splice(1,3)//in this the stsrt and the end is included .
// then in this we are removing the element form 1 to 3 in the array
console.log("with splice operation",final)// in this it will show which elemnt are you removing
console.log("without splice operation",cars)//  [ 'BMW', 'Defender' ] after removing element from the array resulted array is this





