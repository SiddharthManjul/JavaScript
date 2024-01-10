// Conversion:

// let score = "34abc" // NaN will be output when converted into number using Number(). Same thing will happen in case of undefined!

// For Boolean => 1 for true & 0 for false when converted to number
// For string => NaN when converted to number

// console.log(typeof score);
// console.log(typeof(score)); another way to use the function typeof

// let scoreInNumber = Number(score)
// console.log(typeof(scoreInNumber));
// console.log(scoreInNumber);

// let score2 = null

// console.log(typeof score2);

// let score2InNumber = Number(score2)
// console.log(typeof(score2InNumber));
// console.log(score2InNumber);

// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN
// true/false => 1/0

// let isLoggedIn = 1
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);
// console.log(typeof(booleanIsLoggedIn));

// 1 => true ; 0 => false
// "" => false
// "Brooklyn" => true

// let someNumber = 33

// let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// 33 => "33"

// Operations:

let value = 3;
let negValue = -value;
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello";
let str2 = " Siddharth";

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2); // Output => 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

// The conversion in JS happens in a synchronous way that means the conversion depends on the first variable. For example every input will be treated as strings if first input is string & every input will be treated as number if the first input is number until string comes!

let gameCounter = 100;
console.log(++gameCounter); // Prefix Increment: When value is incremented before usage. Output will be 101 and value will be 101 after usage
console.log(gameCounter++); // Postfix Increment: When value is incremented after usage. Output will be 101 and value will be 102 after usage
// Same is the case with Prefix/Postix in case of decrement.