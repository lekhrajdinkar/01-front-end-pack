

const pi_2 = 3.14; //private to module. not global scoped variable.
export const pi_3 = 3.147; 

// Named Export
export function f1(){
    console.log('f1', this)
}

// Named Export
export function f2(){
    console.log('f2', this)
}

// export as new object
function f3(){
    console.log('f3', this)
}

// default export
export default function primary(){
    console.log('primary', this);
}



export {f3 as function_3, pi_2}





