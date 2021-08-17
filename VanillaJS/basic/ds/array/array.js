'use strict'

 // ES 6
// 1. Unpacking array // used to return multiple item from fm/method
 function getSampleArray(){
    //prepare array : age:30, name:lekhraj, garbage:skip_me, langKnown-list:[], 
    const arr =  [ 'lekh', 'skip_me' ]
    arr.push(['java', 'js', 'py'])//add on last
    arr.unshift(30) //add on front
    arr.push('xtra1'); arr.pop() //lets add and delete from last
    arr.unshift('xtra'); arr.shift()//lets add and delete from from
    return arr;
}
console.log('-------------------------------------------\n')
// Array operator
const arr =  getSampleArray();
console.log('Does array includes \'lekh\' : ',arr.includes('lekh'))
console.log('Index of "lekh" in array is : ', arr.indexOf('lekh'))

console.log('-------------------------------------------')
// loop array
for (const item of arr) console.log(item);  console.log(); 
// for (const item of arr.entries()) console.log(`${item[1]} present at index ${item[0]}`); 
for (const [i,item] of arr.entries()) console.log(`${item} present at index ${i}`); 
arr.forEach( (n,i,arr) => console.log(i, arr, n)); // get index and complete array while looping
// CONTINUE and BREAK , does not work with array.

console.log('-------------------------------------------')
//way-1 unpack
const [age, nam, ,langKnown] =arr;
console.log('unpack Array: ', nam, age, langKnown);

console.log('-------------------------------------------')
langKnown.push('xtra')
console.log('check mutation::', langKnown, getSampleArray()[3])
// IMP : Array unpacking mutates the object

console.log('-------------------------------------------')
//way-2  nested unpack
const [age_, nam_, , [lang1, lang2, lang3], extra_var1, extra_var2="default_value"] = getSampleArray();
console.log('unpack nested language Array: ',nam_, age_, lang1, lang2, lang3, extra_var1, extra_var2) // undefined for extra var

console.log('-------------------------------------------')
