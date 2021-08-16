// a closure gives access to all the variables of its parent functions,
// even after the function has returned. (meaning done execution and not call stack)
// closure makes sure a function does not loose connection to variables that are existed 
// at his birth place/ parent function

// straight forward concept... JS makes sure as long aa function is execution stack it will 
// access to to variable - defined in local, parent, parent of parent, etc irrespective of whether 
// parent function is retured. 

// function.dir() --> check scopes[] array 
// scope chaining scan

//============ PRG-1 : parent ES not returned  ============
// Global scope
function gpf(){
    // GP scope
    const gp ='gp';
    console.log('GP: ',gp)
    pf();

    function pf(){
        // P scope
        const p = 'p';
        console.log('P : ',gp, p);
        //console.dir(pf)
        cf();
        

        function cf(){
            // c scope
            const c = 'c'
            console.log('C : ',gp, p, c)
            //console.dir(cf)
        }
    }
}
//gpf();

//============ PRG-2 : parent ES is returned  ============
function pf_2(){
    // P scope
    const p = 'p';
    console.log('Parent scope : ', p);
    // cf_2(); // Don t call child here, try to access/call outside
    return cf_2;

    function cf_2(){
        // c scope
        const c = 'c'
        console.log('Child scope : ', p, c)
    }
}

const cf_outside = pf_2();
cf_outside();

/*
|   
|   EC (this, scope-chain/closure, env Var) 
|
|
|
|
|
|
|
|
|
|
|



*/