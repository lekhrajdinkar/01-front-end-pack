'use strict';

//Array
const arr = [
    {name: 'Anna Liu', age: 10, edu: {hq: 'Masters'}, hobbies: ['insta', 'hiking', 'church-service', 'care', 'help'] },
    {name: 'Lekhraj Dinkar', age: 30, edu: {hq: 'Bachelor'}, hobbies: ['coding', 'hiking', 'sketching'] },
    {name: 'Manisha Prasad', age: 25, edu: {hq: 'Fashion'}, hobbies: ['sketching', 'cooking'] },
    {name: "Ben", age: 4, hobbies: ['eating', 'hockey', 'dancing'] },
]; 

//useful callback
    const print = n => console.log(n);

    //search
    const filterByhobby = n  => n.hobbies.includes("hiking");
    const findBen = n  => n.name === 'Ben';

    //sort
    const sortByName = (a,b) => a.name.localeCompare(b.name);
    const sortByAge = (a,b) => a.age - b.age;

//utils
const printShort = arr => { 
    arr.forEach( n => console.log(n.name, n.age , '||', (n.edu?.hq ?? 'KID'), '||', ...n.hobbies)  ); //first_non_nullish (und/null)
    console.log('-----------------------------------') 
}
const findByName = (arr, name) => arr.find( n  => n.name === name)
const deleteAt = (arr, i) => arr.splice(i,1)
const deleteByName = (arr, nam) => { 
    const i = arr.findIndex( n => n.name === nam)
    arr.splice(i,1) 
} 

function test_search(){
    console.log('1. Print: '); arr.forEach(print);

    console.log('\n2. ============== Filter =========='); 
    arr.filter(filterByhobby ).forEach(print)

    console.log('\n3. ============== Find ============= ', arr.find(findBen)); 
    console.log(findByName(arr,'Manisha Prasad') )
}

function test_delete_update(){
    //arr.reverse();
    console.log(arr.slice(2)) // index 2 to end
    arr.splice(2,1,{}); console.log(arr) // update next 1 item from index 2 with {}
    deleteAt(arr,3); printShort(arr) ;
    deleteByName(arr,'Ben'); deleteByName(arr,'Lekhraj Dinkar'); printShort(arr) ;
}
function test_sort(){
    arr.sort(sortByAge); printShort(arr) ;
    arr.sort(sortByName); printShort(arr) ;
}

// =========== MAIN ============
// test_delete_update() // loop, filter, find, findIndex
// test_search() // slice, splice/delete
test_sort()







