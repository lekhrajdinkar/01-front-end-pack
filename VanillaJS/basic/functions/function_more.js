'use strict';

// ======== A. IIFE ===================
// function which are supposed to invoked only one.
// Not JS feature, just some kind of designe pattern figured out some developer

(function(){
    console.log('\n\n IIFE : \n function which are supposed to invoked only one. \n\
    Not JS feature, just some kind of designe pattern \n\
    figured out some developer');
})() // function expression

// ======== B. High Order-function ==============
// Function are treated as object.
// pass as arg, return from function, store in variable.
// eg: forEach(take CB as arg) >>> here forEach is high Order-function
// use-case : help to provide abstraction
console.log('\n=============== Eg:1 === Own print HOF ===========')
// CB
const print_lower_case = text => console.log('print in lowerCase', text.toLowerCase() );
const print_upper_case = text => console.log('print in upperCase', text.toUpperCase() );

// HOF
function print( text, printingWays_cb){
    printingWays_cb(text)
}
print("Hello Liu", print_lower_case);
print("Hello Liu", print_upper_case);

// eg-2
console.log('\n=============== Eg:2 ====== Own forEach HOF ============')
const arr = [..."CalifOrniA"];
console.log(arr)
function forEach(arr, cb){
    for( const item of arr){
        //console.log(item); 
        cb(item)
    }
}
forEach(arr, print_lower_case);
console.log('-----------------'); 
forEach(arr, print_upper_case);

// ======== C. return fn from functin ==============
console.log('\n======== C. return fn from functin ==============');
function complete_name(first_name){
    return function(middle_name){
        return function(last_name){
            return `welcome ${first_name} ${middle_name} ${last_name}. Have a great day !!`
        }
    }
}
const msg = complete_name("Anna")("liu")("Dinkar");
console.log(msg);

