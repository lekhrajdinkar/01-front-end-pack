function Object(){ }

const Student = function(){
    this.firstname="lekhraj";
    this.rollno=13;

    function study(){
        console.log("Stydent.study() method")
    }
}

let o = new Object(); // {}
o.p1 = "p1"; o.p2 = "p2";
console.log("Object.prototype: ",Object.prototype);
console.log("o: ",o);
console.log("o.__proto__",o.__proto__);

let s = new Student();
Student.prototype.play = function study(){
    console.log("Stydent.play() method")
}
s.address="41 tangelo"
console.log("Student.prototype: ",Student.prototype);
console.log("s: ",s);
console.log("s.__proto__: ",s.__proto__, );

//==========
/*
function Contructor === template/class.

prototype object {},
- define method here only, to avoid making multiple copies.
- define static prperty here
- prototype - accessible by all objects created by that Constructor function - [[prototype]] or __proto__
*/
// --- Inheritance ---
function Parent(){

    //1. property
    this.p1 = "p1";
    this.p2 = "p2"; 
    //prototype = { m1(); m2()}  -- single copy, accessible by all object, not assocaited with "this"

    //2. method
    // no method here / bad
} 
const o1 = new Parent();
const o2 = new Parent();
const o3 = new Parent(); // o3.__proto__.m1()  == o3.m1()

Parent.prototype.p2="p2"; // p2 is static

//==========

//class A extend B{}

function Child(){
    // prototype = {}
    Parent.call(this); //step-1
    this.c1="c1";
}
Child.prototype = Parent.prototype; //step-2

Child.prototype.c2="c2";

const child_1 = new Child();
console.log(child_1,child_1.p1, child_1.p2);
