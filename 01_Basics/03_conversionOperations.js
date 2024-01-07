let score = "34abc" // NaN will be output when converted into number using Number(). Same thing will happen in case of undefined! 

// For Boolean => 1 for true & 0 for false when converted to number
// For string => NaN when converted to number

console.log(typeof score);
// console.log(typeof(score)); another way to use the function typeof

let scoreInNumber = Number(score)
console.log(typeof(scoreInNumber)); 
console.log(scoreInNumber);

let score2 = null

console.log(typeof score2);

let score2InNumber = Number(score2)
console.log(typeof(score2InNumber)); 
console.log(score2InNumber);

// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN
// true/false => 1/0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
console.log(typeof(booleanIsLoggedIn));

// 1 => true ; 0 => false 
// "" => false
// "Brooklyn" => true

let someNumber = 33

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

// 33 => "33"