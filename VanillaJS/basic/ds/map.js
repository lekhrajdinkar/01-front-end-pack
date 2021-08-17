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

// create map from 2D array
const m2 = new Map([
    ['key-1', 'Value-1'],
    ['key-2', 'Value-2'],
    ['key-3', 'Value-3']
]) ;   



console.log("MY MAP: ", m, m.get(undefined), m.has(undefined))

console.log(m.keys());
console.log(m.values());
console.log(m.entries());

//loop
for( const [k,v] of m2.entries() ) console.log(`${k} :: ${v}`)
m2.forEach( (v,k,m) => console.log(v,k,m)) // remember the order v,k,m