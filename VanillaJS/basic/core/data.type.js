// A. Create variable in current scope
var s = 'string' ; // semi colon option in the end.
var n = 12
var b = true
var u = undefined
var nu = null
// BigInt bi = new BigInt(20) // ES 2020
sym = Symbol('UNIQUE_AND_FINAL') // ES2015

// b. Create variable in current scope, remove var keyword
v = 'without var'; console.log(v, typeof v)
print()

console.log(s, typeof s)
console.log(n, typeof n)
console.log(b, typeof b)
console.log(u, typeof u)
console.log(nu, typeof nu)
// console.log(bi, typeof bi)
console.log(sym, typeof sym)

console.log('######### PRG : 2 #############')
class myType{ a = 10}
let bb; console.log(bb, typeof bb) // cannot define b again
var vv; console.log(vv, typeof vv) // avoid using this. dont use in modern javasrcipt program
const cc = 20; // immutable variable, cant be empty, missing intializer