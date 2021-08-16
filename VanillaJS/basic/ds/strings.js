'use strict'; const p = (...x) => console.log(...x)

// String is iterable,like sequence of Python. traet them loke arey which is also iterable.
// JS convert sting primitive type nto object when we call method on string.
// A n n a   L i u
// 0 1 2 3 4 5 6 7
//-8-7-6-5-4-3-2-1  (Negative Indexing)
const s = "Anna Liu";

//mutate new Strings
p("mutate new string :: ", s.slice(0), new String("Anna Liu")) 
const str = new String("Anna Liu") ;  p(typeof str, typeof "XXXX") // object string

// SPLIT and JOIN
const [first_name, last_name] = s.split(" "); 
p( first_name, last_name); 
p([..."Lekhraj"].join("-")) 
p("Lekhraj dinkar".split(' ').join("-")) // together is good comb.

p(''.padStart(50,'-'))

// Replace
const ns = s.replace('Anna', '_').replace('Liu', '_').replace(/_/g, 'XXX'); p(ns) // replace:: mutate new string
// let ns2 = s.splice(s.indexOf('Anna'), 1,'_'); TypeError: s.splice is not a function on string

// includes
p(s.startsWith('A'), s.startsWith('L'))
p(s.includes("Liu"))
p(s.endsWith('u'), s.endsWith('L'))

p(''.padEnd(50,'-'))
p('*'.repeat(50));

p(1, 'spread >> ', ...s) 
p(2, 'length >>', s.length, s[s.length - 1 ])
p(3, 'char array >>', [...s])  
p(4, 'indexing >>', s.indexOf('n'), s.lastIndexOf('n'), s[0], s[1], s[2], s[3] ) 

p(5, 'Sub-string >>',s.slice(0,4), s.slice(5,8), s.slice(s.indexOf('A'), s.lastIndexOf('a')+1)  ) 
p(5, 'slice with negative index >>',s.slice(-2), s.slice(-8,-4), ':-)' ) //works 
p(6, 'negative index (not working) >>', s[-1], s[-2])  // does not work , undefined
//slice mutate new string, (last index-1 like in py )

s.toLowerCase() ; s.toUpperCase() ; s.trim()

p(' CONVERT number to String  '.padStart(50,'-').padEnd(100,'-'))
p(25, String(25), (25+''), '25' )
p(' CONVERT String  to  number '.padStart(50,'-').padEnd(100,'-'))

// padding
const acct_num = '1234-1234-1234';
p('Account ends with ', acct_num.slice(-4).padStart(acct_num.length, '*'), 'is in risk')








