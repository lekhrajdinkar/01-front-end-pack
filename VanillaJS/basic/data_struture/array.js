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
    console.log(arr.includes('lekh'), arr.indexOf('lekh'))
    
    return arr;
}
//way-1 unpack
const [age, nam, , langKnown] = getSampleArray(); console.log(nam, age, langKnown)
langKnown.push('xtra')
console.log('check mutation::', langKnown, getSampleArray()[3])
// IMP : Array unpacking mutates the object

//way-2  nested unpack
const [age_, nam_, , [lang1, lang2, lang3], extra_var1, extra_var2="default_value"] = getSampleArray();
console.log(nam_, age_, lang1, lang2, lang3, extra_var1, extra_var2) // undefined for extra var

console.log(typeof extra_var2)
