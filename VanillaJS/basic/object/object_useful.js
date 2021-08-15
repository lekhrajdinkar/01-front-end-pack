'use strict';

let obj = { 
    name: 'TDF10', 
    fnum: 110011, 
    active: true, 
    category: { id: 1, name: 'AF'},
    sayHello(){console.log("HELLO")} 
}

console.log("KEYS: ", Object.keys(obj))
console.log("VALUES: ", Object.values(obj))
console.log("entries: ", Object.entries(obj))

for( const [k,v] of Object.entries(obj) ) console.log(`${k} :: ${v}`)

