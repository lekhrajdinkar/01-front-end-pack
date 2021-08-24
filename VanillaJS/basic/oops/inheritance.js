import { classes, Dummy, StudentCL } from "./class";

const cf_parent = classes.parent ;
const cf_child = classes.child ;

//===================================

const obj_p1 = new cf_parent(); //way1 : New
console.log(obj_p1);
const obj_p2 = Object.create(obj_p1); //way2 : Object.create
console.log(obj_p2);



console.log('-----------A. INHERITANCE With CF-------------------------')

const obj_c1 = new cf_child(); //creating child , no inheritance from parent

console.log(obj_c1) // print child


console.log('own member :: ',obj_c1.university); 
console.log('own prototype :: ',obj_c1.country); 
obj_c1.printChild();

console.log('parent member :: ', obj_c1.name, obj_c1.age); 
console.log('parent prototype access :: ', obj_c1.type); 
obj_c1.print();

cf_child.static_fn(); //IMP : static function
console.log(cf_child.static_prop);

console.log('---------------------------------')
console.log(obj_c1.__proto__)
console.log(obj_c1.__proto__.__proto__)


//===================================
console.log('-----------B. INHERITANCE With CLASSES-------------------------')

let s1 = new StudentCL();

console.log('own member :: ',s1.university); 
console.log('own prototype :: ',s1.country); 
obj_c1.printChild();

console.log('parent member :: ', s1.name, s1.age); 
console.log('parent prototype access :: ', s1.type); 
s1.print();

StudentCL.static_fn();
console.log(StudentCL.static_prop);

//----------

console.log('\n\n--------------- S2----------')
s1.university= "California University NEW" ; 
s1.country="USA NEW ";

let s2 = new StudentCL();
console.log('own member :: ',s2.university); 
console.log('own prototype :: ',s2.country); 

console.log(s1,s2)


// ==========Dummy Class ===========

let d1 = new Dummy();
d1.a = 20;  //a(20)
console.log(d1.a, d1._a); //a() //Notr: d1._a is protected , dont access outside
d1.b = 40;  //b(40)
console.log(d1.b); //b()

// Access private method from outside class
//console.log(d1.#privareF1);
//d1.#private_method();