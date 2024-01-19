const accountId=12345
let acEmail="Subhadip@gmail.com"
var accPass="9876"
accCity="Raniganj"

console.table(accountId,acEmail,accPass,accCity)

//  accountId=2345 Not Allowed

acEmail="Subh@gmail.com"
accPass="6789"

console.log(acEmail)
console.log("New table after updating");
console.table([accountId,acEmail,accPass,accCity]);





/* Prefer not to use 'var' because of of issue in block scope and functional scope
*/

