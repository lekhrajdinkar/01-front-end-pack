'use strict'; const p = (...x) => console.log(...x);
// const readline = require('readline');
// const rl = readline.createInterface({ input: process.stdin, output: process.stdout })


// 1. All numbers representsed as floating point number
// JS uses BINARY Base 2 // p(23 === 23.00) - true

p((+'23').toFixed(3), +'23XYZ', 23, Number('23')) //1. string to Number
p(3/10, 0.1, 0.1+0.2, 0.1+0.2 === 0.3) //wierd behaviour JS.


p("INT >> ", Number.parseInt('2.55'), Number.parseInt(2.55), Number.parseInt('    2.5em'), Number.parseInt('2.5pxr  rrr'))
p("INT >> ", Number.parseInt('rem2.5'))
p(parseInt(2.5)) //Not recomeded to use like this in modern JS, but can work, since its global function

p("FLOAT >> ", Number.parseFloat('2.55'), Number.parseFloat(2.55), Number.parseFloat('2.5em'), Number.parseFloat('2.5.5pxr  rrr'))
p("FLOAT >> ", Number.parseFloat('rem2.5'))

// ================================================
p("-".repeat(50))

// These all are considered as Number
p(Number.isNaN(23/0), Number.isNaN('23'), Number.isNaN('23X'),Number.isNaN(+'23')) //Infinite _ false false false false

p(Number.isFinite(23.00),Number.isFinite('23'), Number.isFinite('23X'), Number.isFinite(23/0)) 
// best to check number for float // true false false false

p(Number.isInteger(23.00),Number.isInteger('23'), Number.isInteger('23X'), Number.isInteger(23/0)) 
// best to check number for integer //true false false false

// ================================================
p("-".repeat(50)) //PART-2 :: MATH
p(Math.PI, +Math.PI.toFixed(2), Math.random(), Math.trunc(Math.PI))

p(Math.sqrt(144), 12 **2 )
p(Math.max(12, 345, 0.1, 9, 8.9, +'33', Number(44), Number.parseInt('2222.5em'), Number.parseFloat('0.5em')))
p(Math.min(12, 345, 0.1, 9, 8.9, +'33', Number(44), Number.parseInt('2222.5em'), Number.parseFloat('0.5em')))

//eg
p( 'DICE : ', Math.trunc(Math.random()*6) + 1)
const random = (min,max) => Math.trunc((Math.random() * (max-min) + 1) + min)
p('Random number between 3 and 8 : ', random(3,8))

// Round, round-up(ceil), round-down(floor)
p(Math.round(23.3), Math.round(23.9))
p(Math.ceil(23.3), Math.ceil(23.9), Math.ceil(-23.9)) // works well with negative number too
p(Math.floor(23.3), Math.floor(-23.3), Math.floor(23.9)) // works well with negative number too

p(8%3, 15%3, 9%2) // Remainder : usecase  - higlight alternate row

// ================================================
p("-".repeat(50)) //PART-3 :: BIGINT New Primitive added in ES20
p('MAX_INT >>', Number.MAX_SAFE_INTEGER, (2**53 - 1), (2**53+1));
// p(BigInt(2**53+1n)) // TypeError: Cannot mix BigInt and other types, use explicit conversions
p(10000n, typeof 10000n, BigInt(10000), 20n > 19)



//=========
// NUMBERS
//=========
/// =============== Internationalization =========================
const locale_india = new Intl.NumberFormat('en-IN');
let num = 3666.675
p(num, locale_india.format(num))








