'use strict';

console.log("---------- Start -----------------")
Object.prototype.greet = function(n){ console.log(`HELLO ${n} JS object`)}

// Enhanced feild name
const members = [
    {feild:"name", value:"TDF20"}, 
    {feild:"fnum", value:110020}, 
    {feild:'sayHello', value: function(){console.log("HELLO from dynamic object")} }
]

function createDynamicFund(){
    let obj = {}
    for( const {feild:f, value:v} of members) obj = {...obj, [f]:v}
    return obj
}
const obj = createDynamicFund();
console.log("1. createDynamicFund >> ", obj)
obj.sayHello();

console.log("-------------------------------------------")
// 1. Object Lieteral
const xxx = "country_code";
let tdf10 = { 
    // instance Variable
    name: 'TDF10', 
    fnum: 110011, 
    active: true, 
    category: { id: 1, name: 'AF'},
    [xxx]: "IND",

    //method
    //sayHello: function(){console.log("HELLO")}, //old
    sayHello(){console.log("HELLO")} //new ES6+
}
console.log("1. object literal : ",tdf10, tdf10.greet('tdf10'))

console.log("-------------------------------------------")
// 2. Object Contructor function
let o1=  Object.create({});
console.log('o1 ', o1, o1.prototype, o1.greet('o1'))

let o2=  Object.create(this); //this is global window object here
console.log('Object : create from window :: ', o2, o2.prototype, o2.greet('o2'))

let o3=  Object.create({});
console.log('Object 3 : ', o3, o3.prototype, o3.greet('o3')) // ?

let o4=  Object();
console.log('Object 4 : ', o4, o4.prototype, o4.greet('o4')) // ?

let o5=  new Object();
console.log('Object 5 :', o5, o5.prototype, o5.greet('o5')) // ?

console.log('\n', '******************************************************************')
// 2. Onwn Contructor function
// Like regular function just use new keyword wjhile calling
function category_c_fn(id, name){
    console.log("\tcreating object with fund_c_fn ", this)
    this.id = id;
    this.name = name;
}
// 2.1. update prototype
category_c_fn.prototype.desc = "capital grup fund";
category_c_fn.prototype.addOnFn = function(arg) {console.log(`category_c_fn PROTOTYPE addOnFn, arg : ${arg}`)};
console.log("CAT prototype :: >> ",category_c_fn.prototype) //IMP : check this

function fund_c_fn(name, fnum, active, id, cat_name, cat_const_fn){
    console.log("\tcreating object with fund_c_fn", this)
    this.name = name;
    this.fnum = fnum;
    this.active = active;
    //this.category = {id: id, name: cat_name}; // a. literal
    this.category = new cat_const_fn(id,cat_name) // b. c-fn
}

let tdf20 = new fund_c_fn('tdf20', 110022, false, 1, "AFIS", category_c_fn);

console.log("2. Const fn : ", tdf20);
console.log(tdf20.category.id, tdf20.category.name, tdf20.category.desc );
tdf20.category.addOnFn(123);

// Shalow Copy
const o = Object.assign({}, tdf20)
console.log(" object assign : " , o)
o.name =""; o.category = {}; console.log(tdf20, o)

console.log('\n', '******************************************************************')
