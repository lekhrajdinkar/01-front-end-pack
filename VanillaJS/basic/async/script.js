'use strict';
console.log('Asynchronous Javascript');
/*
Async eg: timeer api, event listener, backend call 
These eg simply inovoke some CB to perform long running service
without blocking main thread.
more eg: DOM API, gelolocation API, AJAX, Own Class API, online API(fsr-api)
3rd party online api: weather forcast, google map, etc.
*/

// ==============================
// PART-A Asynv vs Sync code
// ==============================
const callback_function = (arg) => { console.log('-- CB result -- ', arg) }
function synFunc( cb1, cb_arg1) {
    console.log('-- STEP B -- runnning cb1');
    cb1(cb_arg1);
    console.log('-- STEP B -- runnning cb1');
}
function eg(){
    //SYNC
    console.log('-- STEP A --')
    //alert('--- some backend groung operation ---');
    synFunc(callback_function, 'Hello I am callback_function...');
    console.log('-- STEP C --')

    //A-SYNC
    const cb = () => alert('--- some backend groung operation ---');
    console.log('-- STEP A --')
    setTimeout(cb,3000)  // it will run asynchrounsly in background without effecting main thread. //NON-blocking
    console.log('-- STEP C --')// it will not to wait to setTimeout to finish execution.

    //Another example //A-sysn
    const imgEl = document.querySelector('img');
    imgEl.src = 'https://randomuser.me/api/portraits/women/59.jpg' //async code
    imgEl.addEventListener('load', ()=> { alert('image loaded'); imgEl.style.opacity=0.9})

    const iFrameEl = document.querySelector('#player');
    iFrameEl.src = "https://www.youtube.com/embed/dxnl-TGq6Sk?autoplay=1&modestbranding=1&autohide=1&showinfo=1&controls=1&iv_load_policy=3&enablejsapi=1" //async code
    iFrameEl.addEventListener('load', ()=>alert('video loaded'))
    //lot of array method also takes callback function but those are not executed in SYN ways.
}
//eg();

// ==============================
// PART-B . AJAX most common usecase of Asyn call
// ==============================
function ajax_call(country){
    const req = new XMLHttpRequest();
    req.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
    // req.setRequestHeader({})
    req.send()
    return req;
}

function receive_data_random(){
    const data = JSON.parse(this.responseText)
    console.log('COUNTRY DATA: ', data)
}


function receive_data_cb_hell(){
    console.log('USA: ',JSON.parse(this.responseText)) // this === req

    const req2 = ajax_call('india'); // AJAX 2
    //const data = {req: this}
    req2.addEventListener('load', receive_data_sequence); // .bind(data) 
    //console.log('INDIA: ', data.resp)
}
function receive_data_sequence(){
    const data = JSON.parse(this.responseText)
    console.log(data)
    // this = {req: this.req, resp: data};
}
// eg();  //                                                            <<<<<< HERE

// A. AJAX
// Ajax_call('india').addEventListener('load',receive_data_random );
// Ajax_call('usa').addEventListener('load',receive_data_random );
//USA or india, any data would come first.

// B. chaining/Sequnce of asysn ( call back hell )
//If we want usa first then get India, then need to invoke other api after success of first api call

// const req1 = ajax_call('usa'); //AJAX-1 //                              <<<<<< HERE
// req1.addEventListener('load', receive_data_cb_hell );  //               <<<<<< HERE

// =========== C. CAll BACK HELL : Another Example. ======
// TASK 1 >> TASK 2 >> TASK 3 : acheive task in this order
// CAllback inside call back
function runtaskInorder()
{
    setTimeout(()=>{    //call back does not accept any arg
        console.log('TASK 1: After 1 sec');

        setTimeout(()=>{ 
            console.log('TASK 2: After 2 sec : CAll BACK HELL');

            setTimeout(()=>{ 
                console.log('TASK 3: After 3 sec : CAll BACK HELL');
                return 'TASK 3 COMPLETED'
                },1000)

            //return 'TASK 3 COMPLETED'    
            },1000)

        //return 'TASK 3 COMPLETED'    
        },1000)
}
// Problem in above: Not sure how to handle data returned from nested cb.
// thats why commented out above code.

// runtaskInorder() // <<<<<< HERE

// =========== D. PROMISE ==============================================

// Container for asynchronoulsy delivered future value. (usally comes from nested CB)
// eg: response comiing from AJAX call, like abv.
// Analogy with Lottery ticket
// Function which accepts 2 callback functions .
// Life cycle: A. Pending > B. settled:: B.1 fulfilled (eg: datafetched) / B.2. Rejected (data load failed)
// 2 step : Build and Consume

// CONSUME :: In-built promise : FETCH , modern way to make ajax call.
function getCountryData(country){
    const req1 = fetch(`https://restcountries.eu/rest/v2/name/${country}`,{});
    console.log(req1)

    req1.then( resp => resp.json()) //this is how this 3rd party api works
    .then(countries => {console.log('getCountryData ', countries); return countries[0];   }, err => console.error(err))
    .then(country => { 
        console.log(country); 
        setTimeout( _ => console.log(country.name), 2000 );
        return country.population })
    .then(population => {console.log(population); return String(population).slice(0,2)})
    .then(population => {console.log(population);  return {const: "Missing You alot.... A***"} })
    .then(anna => {console.log(anna.const) ; return anna.const})
    .catch(err => console.error(err))
}
//getCountryData('india')                        <<<<<< HERE

//there are 2ways to handle error:
// pass 2nd CB in CB
// ctach block

//================================
//      Async code execution
//================================

// CREATE :: Own promise function
// IMP :: promises runs async way
// eg 1
function myPromise(rcb, ecb){
    const num = (Math.random() * 9);
    if ( num > 5) rcb('SUCCESS !! greater than 5');
    else ecb('ERROR !! less/equal than/to 5')
}

const p = new Promise(myPromise);

//then consume
p.then(
    data => console.log(data) // IMPORTANT : goes to micro task Queue which has more priority than callback queue
)
.catch(
    err => console.log(err)
)
.finally(
    console.log('finally') //no CB.
)


// eg 2:
function fetch_get(url){
    
    function myPromise(rcb, ecb){
        const req = new XMLHttpRequest();
        req.open('GET', url);
        req.send();
        
        setTimeout(() => {
            if(!req.responseText) ecb("TImeout error / 2s")
        }, 2000);

        req.addEventListener('load', () => rcb(JSON.parse(req.responseText)))
    }
    
    return new Promise(myPromise);
}

// ========= A. PRG : Consume promise : fetch_get ========= using then 
function test_promise(){
    console.log('STEP A')

    // IMP :: promise runs async way
    fetch_get('https://restcountries.eu/rest/v2/name/india')
    .then(resp => console.log('fetch_get :: ',resp))
    .catch(err => console.err(err))

    console.log('STEP B')
}



// ========= B. PRG : Consume promise : fetch_get =========  using async and await
 // AWAIT is systax sugar over then, behind the scene using promise

// 2 adv : 
// - better handling of future data async delvered from cb
// - Rrun asyn code, like setTimeOut
// IMPOTANT : Async function always return Promise

async function myAsynCode(){
    try{
        const resp = await fetch_get('https://restcountries.eu/rest/v2/name/india'); //consume, better than then-block
        console.log('myAsynCode :: resp', resp);
        return resp; // has no impact, async function return promise.
    }catch(e){
        console.error(e);
        throw e; // so that it will propogate to below then
    }
}

function test_aysnc_await(){
    console.log('STEP A')

    //console.log(myAsynCode()); //return Promise, javaScript 
    myAsynCode()
    .then(d => console.log("get return value from async function : ",d))
    .catch(e => {})

    console.log('STEP B')
}
// test_promise() //                            <<<<<<<<<<< HERE
// test_aysnc_await()

// ====================================================
// Race, any, allSettled
// ====================================================
// Time Out promise
// directly returned Promise
const timeOutPromise = new Promise(function(_, reject){
    setTimeout(() => {
        reject(" >>> Operation took longer !!")
    }, 500);
 })

 // Fake 
 // they are all function
 const fakePromise1  = () =>  new Promise(function(resolve, _){
    setTimeout(() => {
        resolve({ d: "Fake data 1 from fake promise !!", t: new Date()})
    }, 1000);
 })
 const fakePromise2  =  () =>  new Promise(function(resolve, _){
    setTimeout(() => {
        resolve("Fake data 2 from fake promise !!")
    }, 2000);
 })
 const fakePromise3  =   () =>  new Promise(function(resolve, _){
    setTimeout(() => {
        resolve("Fake data 3 from fake promise !!")
    }, 3000);
 })

 // ---------
 //one
 // any first promise settled with resolved or rejected
function test_racePromise(){
    return Promise.race([fakePromise1(), fakePromise2(), fakePromise3(), timeOutPromise])
    .then(d => console.log('racePromise resolved: ',d))
    .catch(err => console.error('racePromise rejected: ',err));
}

// any first promise settled with resolved
function test_anyPromise(){
    return Promise.any([timeOutPromise, fakePromise1(), fakePromise2(), fakePromise3()])
     .then(d => console.log('anyPromise resolved: ',d))
     .catch(err => console.error('anyPromise rejected: ',err));
}

// All
// all promise settled with resolved or rejected
// d is array of <rsolved data>
function test_allSettledPromise(){
    return Promise.allSettled([fakePromise1(), fakePromise2(), fakePromise3(), timeOutPromise])
     .then(d => console.log('allSettledPromise resolved: ',d))
     .catch(err => console.error('allSettledPromise rejected: ',err));
}

// all promise settled with resolved
// d is array of {status: , value: <rsolved data>}
function test_allPromise(){
    return Promise.all([fakePromise1(), fakePromise2(), fakePromise3()])
     .then(d => console.log('allPromise resolved: ',d))
     .catch(err => console.error('allPromise rejected: ',err));
}




test_racePromise();
test_allPromise();
test_allSettledPromise();
test_anyPromise();

// allSettledPromise()
//racePromise()
















