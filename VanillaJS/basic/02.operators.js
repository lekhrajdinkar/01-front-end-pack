// transform, compare, arithemaetic, logical,

console.log(
    10+20, 30-10, 10*2, 2**4
    , 'str1' + 'str2', 'str1'+22

    ) // 2*2*2*2 = 8
let n = 10
let a = ++n ; 
let b = n++ ; 
console.log(a,b)

b = new Number(12345678901.899999999999999999999)
console.log(b, typeof b)

console.log("\n--------------------REST and SPREAD----------------------------")

function printSeq(...t){console.log(t)} // REST, condence in method definition
function printSeqItemSepByLine(...t){for(let i = 0 ; i< t.length ; i++ )console.log(t[i])} 
function printSeqItemSepBySpace(...t){console.log(...t)} 

let charArray = [...'BEN']; //form array of char seqs

printSeqItemSepBySpace(...charArray) //Spread  (abv array ) in method call
printSeqItemSepByLine(...charArray)
printSeq(...charArray)

printSeqItemSepBySpace('hello', 'Liu')
printSeqItemSepBySpace(...['hello', 'Liu']) // unpack array item
printSeqItemSepBySpace(['hello', 'Liu']) // passing array

console.log("\n--------------------MORE : REST and SPREAD----------------------------")
const arr1 = [1,2,3];  const arr2 = [4,5,6,7]; 
let [new_arr_1, new_arr_2, new_arr_rest] = [...arr1, ...arr2];
printSeq(new_arr_1, new_arr_2, new_arr_rest); // not correct, check out below sol

([new_arr_1, new_arr_2, ...new_arr_rest] = [...arr1, ...arr2]);
printSeq(new_arr_1, new_arr_2, new_arr_rest); //REST use case 2

// eg with Object
let { nam: fund_name, fnum: fund_number, active, category, extra = [] } = tdf10 ; 
let { category: {...cat_packed} } = tdf10 ;
console.log("1.4. REST ", cat_packed )

