'use strict'; const p = (...t) => console.log(...t); let tmp;

//============================================================================================
// HIGH ORDER FUNCTION : for each, map, filter, find, findIndex, reduce, filter
//============================================================================================

//Array
const arr = [
    {name: 'Anna Liu', age: 10, edu: {hq: 'Masters'}, hobbies: ['insta', 'hiking', 'church-service', 'care', 'help'] },
    {name: 'Lekhraj Dinkar', age: 30, edu: {hq: 'Bachelor'}, hobbies: ['coding', 'hiking', 'sketching'] },
    {name: 'Manisha Prasad', age: 25, edu: {hq: 'Fashion'}, hobbies: ['sketching', 'cooking'] },
    {name: "Ben Zen", age: 4, hobbies: ['eating', 'hockey', 'dancing'] },
]; 

//useful callback
    const print = n => console.log(n);

    //search
    const filterByhobby = n  => n.hobbies.includes("hiking");
    const findBen = n  => n.name === 'Ben';

    //sort
    const sortByName = (a,b) => a.name.localeCompare(b.name);
    const sortByAge = (a,b) => a.age - b.age;

//utils - find, filter, splice/delete
const printShort = arr => { 
    arr.forEach( n,i,arr => console.log(i, arr, n.name, n.age , '||', (n.edu?.hq ?? 'KID'), '||', ...n.hobbies)  ); //first_non_nullish (und/null)
    console.log('-----------------------------------') 
}
const findByName = (arr, name) => arr.find( n  => n.name === name)
const deleteAt = (arr, i) => arr.splice(i,1)
const deleteByName = (arr, nam) => { 
    const i = arr.findIndex( n => n.name === nam)
    arr.splice(i,1) 
} 

// FILTER, FIND, FINDINDEX
function test_search(){
    console.log('1. Print: '); arr.forEach(print);

    console.log('\n2. ============== Filter =========='); 
    arr.filter(filterByhobby ).forEach(print)

    console.log('\n3. ============== Find ============= ', arr.find(findBen)); 
    console.log(findByName(arr,'Manisha Prasad') )
}
// slice, splice
function test_delete_update(){
    //arr.reverse();
    console.log(arr.slice(2)) // index 2 to end
    arr.splice(2,1,{}); console.log(arr) // update next 1 item from index 2 with {}
    deleteAt(arr,3); printShort(arr) ;
    deleteByName(arr,'Ben'); deleteByName(arr,'Lekhraj Dinkar'); printShort(arr) ;
}

//sort
function test_sort(){
    arr.sort(sortByAge); printShort(arr) ;
    arr.sort(sortByName); printShort(arr) ;
}

//reduce
function test_reduce(){
   p("REDUCE :: List of userNbame: ", arr.reduce( (acc, cur, i, ar )=>{ return [...acc, cur.name]}, []))
   p("REDUCE :: List of age: ", arr.reduce( (acc, cur, i, ar )=>{ return [...acc, cur.age]}, []))
   p("REDUCE :: Sum of ages: ", arr.reduce( (acc, cur, i, ar )=>{ return acc + cur.age}, 0))
   p("REDUCE :: All Hobbies : ", arr.reduce( (acc, cur, i, ar )=>{ return acc + ", "+cur.hobbies.join(", ")}, " initial value"))
}

//map
function test_map(){
    p(arr.map( e => ({...e, initial: [...e.name.split(' ').reduce((acc,cur) => acc+cur[0],'')].join()}) ))
    p(arr.map( e => ({...e, initial: e.name.split(' ').reduce((acc,cur) => acc+cur[0],'INY')}) ))
}

// =========== MAIN ============
// test_delete_update() // loop, filter, find, findIndex
// test_search() // slice, splice/delete
// test_sort()
test_reduce()
test_map()







