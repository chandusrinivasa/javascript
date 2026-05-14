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
// add
let resultss = cars.splice(1,0,"chandu loves chandhan")
console.log("aaaaaaaaaa",cars)
// in this we used the spread operator to merge the two array
adding_two_arrays_into_one_array = [...cars,...fruits]
console.log(adding_two_arrays_into_one_array)


//The spread operator in JavaScript is written as: ...
// It is used to spread or expand elements from:
// arrays
// objects
// strings
// it used to sperad the things in it, meanigs separiting
// in the above program is used to merge the array
//1.Spread Operator with Arrays

let fruitss = ["apple", "banana", "mango"];

let newFruits = [...fruitss];

console.log(newFruits);
// 2. Add elements
let numbers = [2, 3, 4];

let resultesss = [1, ...numbers, 5];

console.log(result);

//Spread with Strings
let name = "Chandu";

let letters = [...name];

console.log(letters);// output ["C", "h", "a", "n", "d", "u"]

//Update Object Values
let user = {
  name: "Ram",
  age: 20
};

let updatedUser = {
  ...user,
  age: 25
};

console.log(updatedUser);// output 
//{
//   name: "Ram",
//   age: 25
// }



//FLAT
// it is used to remove the nested array or flatend the array
let arr = [1, [2, [3, [4]]]];

console.log(arr.flat(Infinity));
//inside the flat means as ap parametr you can send infinity => removes all the nested array
// 1=> remove only one nested array
// 2 => remove two nested array like this it goes on


console.log(Array.isArray([2,1,3,4,5]))
// is array is used to check the given thing is array is not
console.log(Array.isArray(['hello']))

// form => is used to make the array means convert the given thing in array
console.log(Array.from("chandhan"))// output 
console.log(Array.from({name:"chandu"}))// output [] because,
//Array.from() looks for two things inside the object:

// Iterable data (like string, array, set)
// length property (array-like object)



// of
// Array.of()
// Array.of() creates a new array from the values you give.

// Syntax
// Array.of(value1, value2, value3)

console.log("example for array.of")
val1 = 10, val2=20,val3=30
console.log(Array.of(val1,val2,val3))

console.log("example of 2")
console.log(Array.of(1, 2, 3));
