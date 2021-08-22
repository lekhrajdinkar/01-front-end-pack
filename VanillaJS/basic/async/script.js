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
function eg(){
    //SYNC
    console.log('-- STEP A --')
    alert('--- some backend groung operation ---');
    console.log('-- STEP B --')

    //A-SYNC
    const cb = () => alert('--- some backend groung operation ---');
    console.log('-- STEP A --')
    setTimeout(cb,3000)  // it will run asynchrounsly in background without effecting main thread. //NON-blocking
    console.log('-- STEP B --')// it will not to wait to setTimeout to finish execution.

    //Another example //A-sysn
    const imgEl = document.querySelector('img');
    imgEl.src = 'https://randomuser.me/api/portraits/women/59.jpg' //async code
    imgEl.addEventListener('load', ()=> { alert('image loaded'); imgEl.style.opacity=0.9})

    const iFrameEl = document.querySelector('#player');
    iFrameEl.src = "https://www.youtube.com/embed/dxnl-TGq6Sk?autoplay=1&modestbranding=1&autohide=1&showinfo=1&controls=1&iv_load_policy=3&enablejsapi=1" //async code
    iFrameEl.addEventListener('load', ()=>alert('video loaded'))
    //lot of array method also takes callback function but those are not executed in SYN ways.
}

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
getCountryData('india')

//there are 2ways to handle error:
// pass 2nd CB in CB
// ctach block


// CREATE :: Own promise function
const rcb = () => { console.log('RESOLVE CB'); return 20}
const ecb = () => { console.log('ERROR CB')}
const p = new Promise(rcb, ecb)

p.then(
    data => console.log(data)
)
.catch(
    err => console.log(err)
)
.finally(
    console.log('finally') //no CB.
)












