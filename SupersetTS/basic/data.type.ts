// The core primitive types in TypeScript are all lowercase!
// its number and string... Not String and Number
// Javascript already know abt by using TypeOf operator, but its avialbale at runtime.
// so explicitly we have to additional validation code for type which will executed at runtime.
// Type script provides type check at compile time. igt adds comilier phase for JS.

console.log('Hello TypeScripts');



// A. string, number, boolean, BigInt, undefined, null, NaN
let n3: number;
let n4 = 23 //  inference type by first assignment

let n6 ; //: number;
n6 = '23'

console.log(typeof n6)

// B. Object
//all 4 are same
const obj0: any = { name: 'lekhraj1'} // IMP: use any means loosing all adv offered by TS for static typing.
const obj1: {} = { name: 'lekhraj1'}
const obj2: object = { name: 'lekhraj2'}
const obj3 = { name: 'lekhraj3'}
// console.log(obj1.name, obj1.age); //error TS2339: Property 'age' does not exist on type '{ name: string; }'.
// const obj4: {age: number} = { name: 'lekhraj'} // error

// C. Array and Tuple
const obj5: any = { 
    name: 'lekhraj1', //string
    hobbies: ['soccer', 'study'], //string[]
    role: [2, 'Dev', {team: 'TACT', client: 'CGC'}] //tuple
}
obj5.hobbies.push('hiking');
console.log(obj5);

obj5.role.push(2012); // can add more on tuple
console.log(obj5);

// Fixed size tuple
// let role: [] = [2, 'Dev', {team: 'TACT', client: 'CGC'}] //tuple
let role: [number, number, string, any] = [5, 2, 'Dev', {team: 'TACT', client: 'CGC'}] //tuple

role.push(2021) //Exception : push is allowed.
console.log(role);

// D. Enum
enum Day {MON, TUES}
enum Role {DEV = 100, TST = 200}
enum Role2 {DEV = "dev", TST = "test"}

// E. any : Flexible
// avoid using it.
// compiler can check.
// use any, then add some runtime validation

//F. Union Type
type alias_type = number|String                 //  TYPE keyword, makes sense with union
type alias_type_string_only = String //is also possible then. no sense. // can be use like interface then.

function combine(n1: alias_type, n2: alias_type){
//function combine(n1: number|String, n2: number|String){
    let result;
    if( typeof n1 === 'number' && typeof n2 === 'number'){
        console.log(" got number, doing addition");
        result = Number(n1) + Number(n2)
    }
    else{
        console.log(" got string, doing concatenation")
        result = String(n1) + String(n2)
    }
    console.log(result);
    return result
}
combine(30,40);
combine('30',40);
combine(30,'40');
combine('30','40')

// G. Literal Type
// very sure about value;
const operation: 'add' | 'subtract' = 'add'
const operation2: 'add' = 'add'

// H.Function Type
let f1: Function
f1 = function(){}

let f2: () => any | {} | object
f2 = function(){return {}}

let f3: (a: string, b: number) => string
f3 = function(a1: string, b1: number){return ''}

let f4: (a: string, b: () => void) => string;
const cb = () => { return null}
f4 = function(a1: string, cb){return ''}