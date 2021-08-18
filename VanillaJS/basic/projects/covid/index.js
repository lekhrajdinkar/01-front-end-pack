'use strict'; const p = (...t) => console.log(...t); let tmp;

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const india = {
  name: 'India',
  infected: [
    ['Kerela',[200, 3000,650, 130, 70, 1300] ],
    ['new delhi',[200, 450, 400,  70, 1300] ],
    ['maharastra',[200, 450, 400, 3000,650, 130, 70, 1300] ]
  ],
  death: [20, 45, 40, 30,65, 13, 7, 13],
  vacinated: [20, 45, 40 ]
};

const usa = {
  name: 'USA',
  infected: [
    ['calofornia',[200, 3000,650, 130, 70, 1300, 200, 3000,650, 130, 70, 1300] ],
    ['new york',[200, 450, 400,  70, 1300, 200, 450, 400,  70, 1300] ]
  ],
  death: [20, 45, 40, 30,65, 13, 7, 13], 
  vacinated: [20, 45, 40 ]
};

const taiwan = {
  name: 'Taiwan',
  infected: [
    ['Jiadong',[200, 3000,650 ] ],
    ['Jinhu ',[200, 450, 400] ],
    ['Juguang ',[200, 70, 1300] ]
  ],
  death: [20, 45, 40, 30,65, 13, 7, 13], vacinated: [20, 45, 40 ]
};



const countries = [india, usa, taiwan];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelGlobalCount = document.querySelector('.global__count');
const labelinfectedCount = document.querySelector('.country__count');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnSearch = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputCountrySearch = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
let activeCountry, infectedcount, globalCount;
const accumulate = (acc, cur) => acc+ cur ; 
p(countries)
labelGlobalCount.value  = countries.flatMap(c => c.infected).reduce( (acc, cur) => acc + cur, 0);

function getGlobalCount(){
  let result = 0 ;
  countries.forEach(c => result += getInfectedCount(c));
  labelGlobalCount.innerText = result;
  return result;
}
getGlobalCount();

function getInfectedCount(activeCountry){
  let m = new Map(activeCountry.infected);
  let mergedList  = []
  for (const v of m.values()){
    mergedList = [...mergedList, ...v]
  }
  return mergedList.reduce(accumulate, 0) 
}

function findCountry(){
  return countries.find(c => c.name.toLowerCase() === inputCountrySearch.value.toLowerCase());  p(activeCountry) ;
}

function addStates(activeCountry){
  containerMovements.innerHTML=''
  for( const [k,v] of new Map(activeCountry.infected).entries()){
    const sum = v.reduce( accumulate, 0)
    const  html = 
    ` <div class="movements__row" onclick="alert('clicked')">
        <div class="movements__type movements__type--deposit">HIGH</div>
        <div class="movements__date">${k}</div>
        <div class="movements__value">${sum}</div>
      </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html)
  }

  // Change background color of alternative list item
  const arr = Array.from(document.querySelectorAll(".movements__row")); console.log(arr);
  arr.forEach((cur, i, ar) => {if(i%2 == 0) cur.classList.add('movements__type--withdrawal')}) 
}

// ==== MAIN =========
function show(e)
{
  e.preventDefault();
  activeCountry = findCountry(); 

  labelinfectedCount.innerText = getInfectedCount(activeCountry); //2. add country count
  addStates(activeCountry) //3.  add states count
  containerApp.style.opacity = 100;
  inputCountrySearch.value = '';
  inputCountrySearch.blur();
}

btnSearch.addEventListener('click', show)





