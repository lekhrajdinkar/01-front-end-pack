// A.1 Arithematic
console.log("\n------------A. transform, compare, arithemaetic ---------------")
console.log( 10+20, 30-10, 10*2, 2**4, 'str1' + 'str2', 'str1'+22) 
let n = 10; let [a,b] = [ ++n, n++] ; console.log(a,b)

b = new Number(12345678901.899999999999999999999); console.log(b, typeof b)

console.log("\n------------------ B. logical    ----------------------------")
//  A.2. Logical :: Short circuit :: it cheks left to right
const first_truthly_value = undefined || '' || 0 || 'HELLO'|| 23|| null
console.log( '>>> Short circuit, first_truthly_value >>>', first_truthly_value)

const first_Falsy_value = 23 && undefined && '' && 0 && 'HELLO'&& 23 && null
console.log( '>>> Short circuit, first_Falsy_value >>>', first_Falsy_value)
// can be replace for if-else, works left to right

// Nullish : undefined and null
const first_non_Nullish_value = null ?? undefined ?? 'str' ?? 0 ?? ' '?? 23 ?? null
console.log( '>>> Short circuit, first_non_Nullish_value >>>', first_non_Nullish_value)
// rest.monday?.open ?? 'closed' --> use ? and ?? together, ES2020 feature


console.log("\n--------------------C. REST and SPREAD----------------------------")
const tdf10 = { 
    nam: 'TDF10', fnum: 110011, active: true, 
    category: { id: 1, nam: 'AF'},
    uf_list: ['uf1', 'uf2']
}
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

//Another Exanple / usecase
function print_card(title, picture, action, ...detail){ // detail, action --> would be condesed as array
    console.log('\n\n*****************************************');
    console.log('|',picture,'|',title);
    console.log('*****************************************');
    detail.forEach(line => console.log('|',line,))
    console.log('*****************************************');
    console.log(action)
    console.log('*****************************************\n\n');
}

print_card("company", "c.png", ['ok', 'cancel'], 
'linjcncj kvnxkcn  vnxkvn', 'jbvjs bvjkbjv jbjxvxbj bjsbvjsd', 'bjdsbvj dsjcjdsc sdskhjd sknvsd ' )


console.log("\n--------------------C. MORE : REST and SPREAD----------------------------")
// Usecase of REST: function definition condense + array/Object de-structuring, left side of =
// REST Along with object destructuring
const arr1 = [1,2,3];  const arr2 = [4,5,6,7]; 
let [new_arr_1, new_arr_2, new_arr_rest] = [...arr1, ...arr2];
printSeq(new_arr_1, new_arr_2, new_arr_rest); // not correct, check out below sol

([new_arr_1, new_arr_2, ...new_arr_rest] = [...arr1, ...arr2]);
printSeq(new_arr_1, new_arr_2, new_arr_rest); //REST use case 2

// eg with Object destructuring
let { nam: fund_name, fnum: fund_number, active, category, extra = [] } = tdf10 ; 
let { category: {...cat_packed} , category: cat} = tdf10 ; //here ??
console.log("1.4. REST ", cat_packed , cat)

