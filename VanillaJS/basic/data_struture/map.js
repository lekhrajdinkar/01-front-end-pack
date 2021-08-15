'use strict'
// SET and MAP introduce din ES6+

const m = new Map();
m.set('key-1', 'Value-1')
    .set('key-2', 'Value-2')
    .set(undefined, null)
    .set(null, null) // no
    .set(123, 123)
    .set(123, 123)
    .delete('key-1')



console.log("MY MAP: ", m, m.get(undefined), m.has(undefined))

console.log(m.keys());
console.log(m.values());
console.log(m.entries());

//loop
for( const [k,v] of m.entries() ) console.log(`${k} :: ${v}`)