'use strict';


const tdf10 = { 
    nam: 'TDF10', fnum: 110011, active: true, 
    category: { id: 1, nam: 'AF'},
    uf_list: ['uf1', 'uf2']
}
console.log("1. object literal : ",tdf10)
console.log("-------------------------------------------------")

// 1. Unpack object
// Notice : re-naming, default value
// let fund_name = '' //SyntaxError: Identifier 'fund_name' has already been declared

// way-1 : All
let { nam: fund_name, fnum: fund_number, active, category, extra = [] } = tdf10 ; 
console.log("1.1. Object unpacking ", fund_name, fund_number, active, category, extra )
// way-2 : few
let { category: cat } = tdf10 ;
console.log("1.2. Object unpacked and get \'Category\' only :: ", cat )
// way-3:  nested unpacking
let { category: {id: id_, nam: name_} } = tdf10 ;
console.log("1.3. Nested object Unpacking :: ", id_, name_ )

let { category: {...cat_packed} } = tdf10 ;
console.log("1.4. REST ", cat_packed )

// 2. Mutation check
console.log("-------------------------------------------------")
category = {...category, active: true} // SPREAD
console.log("2. mutation check : ",category, tdf10.category) //mutation done

console.log("-------------------------------------------------")
let f = 'fund'; // 'f' already defined so cant use let keyword in below line 
({nam: f} = tdf10 ); // Notice ()
console.log("3. trick to mutate f :: ",f) // *** IMP ***

console.log("---------------- Use-case of Object Unpacking ---------------------------------")
// Want to pass argumnet in any order
function print_1(printerName, pageCount, size){
    console.log(`Printing ${pageCount} copies in ${size} size on ${printerName}`);
}
print_1('p-1', 5, 'A4');

function print_2({printerName, pageCount, color, size}){
    console.log(`Printing ${pageCount} copies in ${size} size on ${printerName}`);
}
const p = {pageCount:20, printerName:'P-2', size:'A-3', color:true} // big object and could use few feilds
print_2(p);




