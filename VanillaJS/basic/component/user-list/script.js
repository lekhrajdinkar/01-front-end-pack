'use strict';

console.log('User List Demo');

let listdata = [];
let allUsers = [];
let res
getdata();
document.querySelector('#filter').addEventListener('keydown', filteruser);

async function getdata(){
    let res = await fetch('https://randomuser.me/api?results=50');
    allUsers = listdata = await res.json();
    console.log(listdata);
    addUser(allUsers.results);
} 

function addUser(users){
    users.forEach(u => {
        let html = `
        <li>
            <img src="${u.picture.medium}" alt="">
            <div class="user-info">
                <h4>${u.name.first}</h4>
                <p>Works for CGC, ${u.location.city}</p>
            </div>
        </li>`
        document.querySelector('#result').insertAdjacentHTML('beforeend',html)
    });
    document.querySelector('#result').insertAdjacentHTML('beforeend','<li>loading...</li>')
    
}


function filteruser(e){
    console.log(e);
    let text = e.target.value;
    if(text === '')  {
        addUser(allUsers.results);
        return;
    }

    document.querySelectorAll('li')
    .forEach(e=>e.classList.add('hide'));

    const result = listdata.results.filter(u => {
            return u.name.first.includes(text) 
            || u.name.last.includes(text)
            || u.location.city.includes(text)
    })

    document.querySelectorAll('li')
    .forEach(e=> e.classList.add('hide'));

    addUser(result);
    console.log(result);
}











