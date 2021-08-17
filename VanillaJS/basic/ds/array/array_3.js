'use strict';   const p = (...t) => console.log(...t); let tmp;
//==========================================
// MORE: slice, splice, reverse, merge,
//==========================================
const arr = [..."ABCDE"];
p(arr);

//reverse //original array,
tmp = arr.slice();  p("1. Reverse : ", tmp.reverse());

//merge / concat 2 array 
const arr1 = ['E', 'D', 'C', 'B', 'A'] ; const arr2 = ['1', '2'];
p("2. Concat/Merge : ", arr1.concat(arr2),  arr2.concat(arr1)) // mutate new array

p('\n -----------3. slice------------') //mutate new array
p("Mutate new array: ", arr.slice(0), arr.slice(), [...arr]) 
p("Slice i=3 : ", arr.slice(3), arr.slice(3,arr.length)) 
p("Slice : ", arr.slice(0), arr.slice(1), arr.slice(2), arr.slice(3)) 
p(arr.slice(-1), arr.slice(-2)) //also works on negative index, like we did for string

p('\n -----------4. splice------------')  
// takes 3 arg
// default value of 1st arg is 0
// default value of 2nd arg is toward array lenght
// default value of 3rd arg is delete

tmp = arr.slice();  p("POP : ", tmp.splice(-1), 'new array :',tmp);
tmp = arr.slice();  p("SHIFT : ",tmp.splice(0,1), 'new array :',tmp);
tmp = arr.slice();  p("delete starting i=0 (Empty)", tmp.splice(0), 'new array :',tmp); 

tmp = arr.slice();  p("delete starting i=1",tmp.splice(1), 'new array :', tmp);
tmp = arr.slice();  p("delete starting i=2: ", tmp.splice(2), 'new array :',tmp);

// 2nd arg is length after index, if 3rd is absent it will delete
tmp = arr.slice();  p("Splice : ",tmp.splice(2,1), 'new array :',tmp); 
tmp = arr.slice();  p("Splice : ", tmp.splice(2,2), 'new array :',tmp);

// provide 3 arg to replace
tmp = arr.slice();  p("Splice : ", tmp.splice(2,1, 'CCCC'), 'new array :',tmp); 
tmp = arr.slice();  p("Splice : ", tmp.splice(2,2, 'CCCC DDDD'),'new array :',tmp);





