const accountId = 1444923
var accountPassword = 122222
let accountEmail = "abrar1@gmail.com"
accountCity = "jaipur"
let accountState;
// accountId = 34 // this is not allowed


console.log(accountId);

accountEmail = "abrar212@gmail.com"
accountPassword = "12121212"
accountCity = "Delhi"

console.table([accountId,accountEmail,accountPassword,accountCity, accountState])

/*prefer not to use var
because of issue in block scope and functional scope*/