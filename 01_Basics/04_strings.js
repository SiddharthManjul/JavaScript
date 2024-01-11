const name = "Siddharth Manjul" // declaring String
const repoCount = 43

console.log(`Hello, My name is ${name} & my github repo count is ${repoCount}`); // printing using String Interpulation

const gameName = new String("Clash-of-Clans") // another way to declare string

console.log(gameName[2], gameName.length); // checking the length
console.log(gameName.toUpperCase()); // every character will be uppercased
console.log(gameName.charAt(10)); // finding character on the given position
console.log(gameName.indexOf("l")); // checking character's position

const newString = gameName.substring(0,5) // creating a substring "clash" out of string gameName(Clash of Clans)
console.log(newString);

const anotherString = gameName.slice(0,1) // We can also use -ve value in case of slice
console.log(anotherString);

const newStringOne = "   Siddarth   "
console.log(newStringOne);
console.log(newStringOne.trim()); // trim removes extra spaces from the string

console.log(name.replace(" ", "-")); // replace replaces value with inputed value

console.log(gameName.split("-"));