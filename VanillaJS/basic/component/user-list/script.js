'use strict';
console.log('User List Demo');
let userPromise = fetch('https://randomuser.me/api');
userPromise.then( d =>  console.log(d))







