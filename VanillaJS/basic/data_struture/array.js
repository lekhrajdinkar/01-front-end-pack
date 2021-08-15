'use strict'

 // ES 6
// 1. Unpacking array // used to return multiple item from fm/method
function fn(){
    //prepare array : age:30, name:lekhraj, garbage:skip_me, langKnown-list:[], 
    const arr =  [ 'lekh', 'skip_me' ]
    arr.push(['java', 'js', 'py'])//add on last
    arr.unshift(30) //add on front
    arr.push('xtra1'); arr.pop() //lets add and delete from last
    arr.unshift('xtra'); arr.shift()//lets add and delete from from
    console.log(arr.includes('lekh'), arr.indexOf('lekh'))
    
    return arr;
}
//way-1 unpack
//const [age, nam, , langKnown] = fn(); console.log(nam, age, langKnown)

//way-2  nested unpack
const [age_, nam_, , [lang1, lang2, lang3], extra_var1, extra_var2="default_value"] = fn();
console.log(nam_, age_, lang1, lang2, lang3, extra_var1, extra_var2) // undefined for extra var
