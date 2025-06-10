// ==== Type Assertions ====
let someValue: any = "this is a string";
let strLength1: number = (<string>someValue).length; // Angle-bracket syntax
let strLength2: number = (someValue as string).length; // as-syntax


// A. string, number, boolean, BigInt, undefined, null, NaN
let n3: number;
let n4 = 23; //  inference type by first assignment

let n6; //: number;
n6 = "23";

console.log(typeof n6); // java:instanceOf  py:type()

// B. Object
const obj0: any = { name: "lekhraj1" }; // IMP: use any means loosing all adv offered by TS for static typing.
const obj1: {} = { name: "lekhraj1" };

// C. Array and Tuple
const obj5: any = {
  name: "lekhraj1", //string
  hobbies: ["soccer", "study"], //string[]
  role: [2, "Dev", { team: "TACT", client: "CGC" }], //tuple vary size
};
obj5.hobbies.push("hiking"); //push/pop,slice,splice, shift/unshift
console.log(obj5);
obj5.role.push(2012); // can add more on tuple  <<<
console.log(obj5);

// FIXED size :: tuple
let role1: [] = [2, 'Dev', {team: 'TACT', client: 'CGC'}] //tuple vary size
let role2: [number, number, string, any] = [  5,  2,  "Dev",  { team: "TACT", client: "CGC" }]; //tuple fixed size
role2.push(2021); //Exception : push is not allowed <<<
console.log(role);

// D. Enum
enum Day {  MON,  TUES}
enum Role {  DEV = 100,  TST = 200}
enum Role2 {  DEV = "dev",  TST = "test"}

//==============================
//E. Union/intersection Type
//==============================
type alias_type = number | String;
type alias_type_string_only = String;

function combine(n1: alias_type, n2: alias_type) {
  let result;
  if (typeof n1 === "number" && typeof n2 === "number") {
    console.log(" got number, doing addition");
    result = Number(n1) + Number(n2);
  } else {
    console.log(" got string, doing concatenation");
    result = String(n1) + String(n2);
  }
  console.log(result);
  return result;
}
combine(30, 40);
combine("30", 40);
combine(30, "40");
combine("30", "40");

//=================
// G. Literal Type
//=================
const operation: "add" | "subtract" = "add";
const operation2: "multiply" | "divide" = "divide";
let operation3: "expo" | "median" = "expo";
function operations(o: "add" | "subtract") {}
operations(operation);
//operations(operation2); // invalid

//=================
// H. Function Type
//=================
let f1: Function;
f1 = function () {};

let f2: () => any | {} | object; // function which  can return any, or {} or object
f2 = function () {
  // return {}; // ok
  return { p1: "p1", p2: "p2" }; // ok
}

let f3: (a: string, b: number) => string;
f3 = function (a1: string, b1: number) {  return "";}

let f4: (a: string, b: () => void) => string;
f4 = function (a1: string, () => {  return null;}) {  return ""; }

//======================
// I. Unknown and never
//=======================
function throwerror(): never {
  // not void
  throw { msg: "error occured", code: "400" };
}

