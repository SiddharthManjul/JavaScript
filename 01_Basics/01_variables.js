const accountId = 144553
let accountEmail = "whatever@google.com"
var accountPassword = "12345"
accountCity = "Dehradun"
let accountState;

// accountId = 2 // not allowed


accountEmail = "someone@google.com"
accountPassword = "21212121"
accountCity = "Prayagraj"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])