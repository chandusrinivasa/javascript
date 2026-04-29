// 1. Arithmetic Operators/operation
let a = 10
let b = 5

console.log(a + b) // 15 (addition)
console.log(a - b) // 5  (subtraction)
console.log(a * b) // 50 (multiplication)
console.log(a / b) // 2  (division)
console.log(a % b) // 0  (modulus - remainder)
console.log(a ** b) // 100000 (power)

// 2. Assignment Operators/operstion
let x = 10

x += 8  // x = x + 5 → 15
x -= 2  // 13
x *= 2  // 26
x /= 2  // 13

// 3. string operation
let first = "Hello"
let second = "World"

console.log(first + " " + second) // "Hello World"
// in these they are some excaption case 
// NOTE THAT ,
console.log("1"+2)// output is 12
console.log(2+1+"9")//this output is 39
// because if first valve is string then it treat next number as string.
// if it is in last it will not treat first coming valve as string 
console.log(("hi")*3)// otput is nan
//in the string we can di only concetation
console.log(+true)//output 1
console.log(+"")//output 0

//4. Logical Operators
let age = 20

console.log(age > 18 && age < 30) // true (AND)
console.log(age > 25 || age < 30) // true (OR)
console.log(!(age > 18))          // false (NOT)

//5. Increment & Decrement
let y = 5

y++  // 6 (increase by 1)
y--  // 5 (decrease by 1)

// in this they is prefix and postfix
// in case of prefix , consider x = 7 then you do ++x , first it is incremented 
//then it is stored in the memory. you can ee the example below where we have taken two value a
// and both value is same , because z is first assigned to 8 then that z is incremented and store in y
let z = 8
let w = ++z
console.log(z)//output 9
console.log(w)// output 9

let c = 5
let d =c++
console.log(c)
console.log(d)
// in this valve valve is stored first and then incremented so when you print it will come like this

//Comparison Operators
 a = 10
b = "10"

console.log(a == b)  // true  (checks value only)
console.log(a === b) // false (checks value + type)
console.log(a != b)  // false
console.log(a > 5)   // true
console.log(a < 5)   // false
// examplwes of comparsition
console.log(null > 0);// when it come to comparistion mull become 0
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);//this become nan
console.log(undefined > 0);
console.log(undefined < 0);


// Type Operators
let num = 10

console.log(typeof num) // "number"

//Ternary Operator (Shortcut for if-else)
let ages = 18

let result = (ages >= 18) ? "Adult" : "Minor"
console.log(result)

//Special Operators
// null vs undefined
let l
console.log(l) // undefined

let k = null
console.log(k) // null

