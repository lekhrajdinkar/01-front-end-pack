'use strict';

//Array
const arr = [
    {name: 'Anna Liu', age: 10, hobbies: ['insta', 'hiking', 'church-service', 'care', 'help'] },
    {name: 'Lekhraj Dinkar', age: 30, hobbies: ['coding', 'hiking', 'sketching'] },
    {name: 'Manisha Prasad', age: 25, hobbies: ['sketching', 'cooking'] },
    {name: "Ben", age: 4, hobbies: ['eating', 'hockey', 'dancing'] },
]; 



//useful callback
const print = n => console.log(n);
const filterByhobby = n  => n.hobbies.includes("hiking");
const findBen = n  => n.name === 'Ben';

//utils
const printShort = arr => arr.forEach( n => console.log(n.name))
const findByName = (arr, name) => arr.find( n  => n.name === name)
const deleteAt = (arr, i) => arr.splice(i,1)
const deleteByName = (arr, nam) => { 
    const i = arr.findIndex( n => n.name === nam)
    arr.splice(i,1) 
} 

function test_1(){
    console.log('1. Print: '); arr.forEach(print);

    console.log('\n2. ============== Filter =========='); 
    arr.filter(filterByhobby ).forEach(print)

    console.log('\n3. ============== Find ============= ', arr.find(findBen)); 
    console.log(findByName(arr,'Manisha Prasad') )
}

function test_2(){
    //arr.reverse();
    console.log(arr.slice(2)) // index 2 to end
    arr.splice(2,1,{}); console.log(arr) // update next 1 item from index 2 with {}
}

// =========== MAIN ============
// test_1() // loop, filter, find, findIndex
// test_2() // slice, splice/delete
// deleteAt(arr,3); console.log(arr)
// deleteByName(arr,'Ben'); deleteByName(arr,'Lekhraj Dinkar'); printShort(arr) ;




