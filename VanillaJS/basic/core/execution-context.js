// 'use strict' : good practice
//IMP :::: THIS IS WINDOW OBJECT. we are writing all our inside window object.

// JS executes pieces of codes, form EC for each function 
// a. top level code
// b. function code, nexsted function, etc

//scope : global ,  function and Block (ES6+)

// function and var are treated as same if comes to declartion.

// ******* LEVEL -0 *******

// ########### PART-1  :: Execution Context ##################

//level-0 (global stack : default exe context, will b there until browser is closed)
console.log(g_s, f1_level_1) // use before declare, declared and can be used. default value undefined.
// console.log( g_s1,g_s2) // not defined, becoz no hoidting.
this.name = "WINDOW";
var g_s = 'global_Anna';
g_n = 10; // can skip var keyword if defining var in global scope.
let g_s1 = 'global_string _with_let'; // No hoisting for let and const
let g_s2 = 'global_string _with_const'

// ******* LEVEL -1 *******
var f1_level_1 = function () // hoisted with undefined value, can not call before
//let f1_level_1 = function () // no hoisting
//const f1_level_1 = function () // no hoisting
//function f1_level_1() // hositing with defined body, hence can be called before decalation.
{
    console.log('f1_level_1 : this :: ', this)
    console.log('f1_level_1 : function expression', window.g_s)
    // declartion
    let f1_s = 'f1_Anna';
    g_n2 = 20;
    let f1_Lv1_2 = 30;
    let common = 'common-Lv1'

    let f1_level_2 = function(){
        console.log('\tf1_level_2 : function expression', window.g_s, f1_Lv1_2)
    }

    // ******* LEVEL - 2 *******
    function f2_level_2(){
        let common = 'common-Lv2' 
        const pi = 3.14;
        let o = {name: 'f2_level_2_Object'}
        console.log('\tf2_level_2 : function declartion', this.g_s)

        // ******* LEVEL - 2 *******
        function f1_level_3(){
            // its is preferred // from local scope and then outer closures
            let common = 'common-Lv3'
            let lv3_n = 50
            //block scoped variable - let and const. only. var is always function scoped.
            // in actual scenario it could be loop or condition block
            {
                let bs_s = 'blcked scoped string';
                const bs_pi = 3.1444;
                console.log('block scoped variable : ', bs_pi, bs_s)
            }
            //console.log('block scoped variable : ', bs_pi, bs_s)
            console.log('\t\tf1_level_3 >> Local scope (Lv 3, itself) : ', lv3_n, common)
            
            console.log('\t\tf1_level_3 >> closure-2 (f2_level_2) :', pi)
            
            console.log('\t\tf1_level_3 >> closure-1 (f2_level_1) : function declartion',  f1_Lv1_2) // this.pi --> undefined, no such declaration global ES
            f1_level_2() // because of scope chain / closure-1

            // Closure - 0 (GLOBAL)
            console.log('\t\t',g_n, this.g_n, window.g_n, '   ',g_n2, this.g_n2, window.g_n2 )
            // Value of this keyword is always the OWNER/Object of function. eg: onwer of all the functional defined here is window object.
            
            // IMP :: lexical this demo for Arrow function
            // Arrow funcation takes lexical this, meaning this of parent function scope
            f1_level_4 = () => console.log("\t\t\t Arrow function :: this", this);
            f1_level_4();
        }
       
        f1_level_3.bind(o)()
    }
    //f1_level_3() // outside scope call

    // Note: This keyword and arg are not applicable here for hoisting
    f3_level_2 = () => {
        console.log('\tf3_level_2 : Arrow function ', g_s)
    }

    // on execution, Execution-content will be formed.
    // it keep all the information needs to run the peice of code
    // info:: 
    // a. var env (argu, function, var) 
    // b. scope chain, it defines if any variable ooutside current can be accessed.
    // c. this keyword value. if our  prg has no object, then this is always  windows everywhere.
    //f1_level_2()
    f2_level_2()
    f3_level_2()

}

this.f1_level_1()
//window.f1_level_1()
// f1_level_2() // 1_level_2 is not defined

// ########### PART-2 :: THIS KEYWORD ##################

// REGULAR Fn call - window/undefined as Jonas, VS,  Object Fn call - object

// a. creating object without template
const year = 2000
const o = { 
 // ---- Still global scope (object which is defined inside global scope)  
    year: 2021,
    name: 'object-1', // notice let const var not used for instance variable.

    // lexical this IMP ::: DOnt get its OWN this. 
    print_this_arrow: () => { console.log(1, 'lexical this =>fn :', this) }, // window   

    // importance for this, else it would have gotton year from global scope
    print_this() {console.log(2, year, this.year, 'my owner is, fn :', this) }, //  o
    sayHello(){console.log("Hello")},
    print_this_exp: function(){
        //---- function scope
            // EC , env: local | this| scope: closure, global, local
        let local = 'local' ;
        this.sayHello()
        this.print_this_arrow()
        console.log(3,'my owner is fn exp :', this); // o
        // calling other function
        o.print_this_arrow() //call-1 , o, executed by o

                // Declaring nested Function
                const  self = this // nice trick
                function print_this_exp_child(){
                    console.log('==== print_this_exp_child =====', self, this)
                }
                print_this_exp_child() 
                // not executed by o, ITS REGULAR FUNCTION CALL LIKE IN GLOCAL scope
                //so owner is Window

        //---- function scope

        
    }
 // ---- still global scope
}
o.print_this_arrow();   // call-2
//o.print_this_arrow.bind(o)(); // binding has no impact over here.

o.print_this(); //fine
o.print_this_exp(); //fine

// b. window object
////print_this_arrow = () => { console.log('my owner is :', this) }
function print_this() {console.log(4,'my owner is :', this) } // same fn defined inside Object - window
this.print_this();
o.borrowed_function = this.print_this; o.borrowed_function();
//this.print_this_arrow();

//modify this while funcatin call.
//this.print_this.bind(o)()
//this.print_this.apply(o)






