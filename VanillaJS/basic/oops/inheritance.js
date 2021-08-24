import { classes } from "./class";

const cf_parent = classes.parent ;
const cf_child = classes.child ;

//===================================

const obj_p1 = new cf_parent(); //way1
console.log(obj_p1);
const obj_p2 = Object.create(obj_p1); //way2
console.log(obj_p2);

console.log('-----------INHERITANCE-------------------------')

const obj_c1 = new cf_child(); //creating child , no inheritance from parent

console.log(obj_c1) // print child


console.log('own member :: ',obj_c1.university); 
console.log('own prototype :: ',obj_c1.country); 
obj_c1.printChild();

console.log('parent member :: ', obj_c1.name, obj_c1.age); 
console.log('parent prototype access :: ', obj_c1.type); 
obj_c1.print();
