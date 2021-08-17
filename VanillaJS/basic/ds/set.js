'use strict'
// SET and MAP introduce din ES6+

const s = new Set() //constructor function
s.add("MON")
    .add('TUES')
    .add("MON"). add(undefined).add(null)
    .delete('MON')

// s.clear()
console.log("MY SET: ", s )

console.log(s.keys());
console.log(s.values());

for( const v of s.values()) console.log(`${v}`)
s.forEach( (v,_,m) => console.log(v,k,m)) // remember the order v,k,m // same as Map // v and k are same for  set

// console.log(s.entries()); // strange
// for( const [k,v] of s.entries()) console.log(`${k} :: ${v}`)
