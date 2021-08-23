'use strict';
const { set } = require("lodash");

 const p = (...x) => console.log(...x)
const MS_IN_A_DAY = 1000 * 60 * 60 * 24;
// now
let  now = new Date() ;  
p(now, now.toISOString().concat);
p(now.toISOString().split('T')[0])

p('-----------------------')
p(new Date(1617346801000)) // a. from ms / number

// b. Date with String
now = new Date('2021-08-22T19:06:51.335Z') ;  p(now);
now = new Date('Aug 02') ;  p(now); //2001-08-02T07:00:00.000Z

now = new Date('Aug 02 2021') ;  p(now);                // 2021-08-02T07:00:00.000Z
now = new Date('2021            Aug 02 ') ;  p(now);    //  2021-08-02T07:00:00.000Z

now = new Date('20212            Aug 02 ') ;  p(now);  // +020212-08-02T07:00:00.000Z

now = new Date('December') ;  p(now); // Invalid
now = new Date('December 02') ;  p(now);  // 2001-12-02T08:00:00.000Z
now = new Date('December 2021 02') ; p(now, typeof now , new String(now) === '2021-12-02T08:00:00.000Z'); 

// Date COnst
// month and day starts with 0, 0 mean Jan, 15 mean 16
p('-----------------------')
now = new Date(2021, 0, 15, 23, 59, 59); p(now); // Jan
now = new Date(2021, 1, 15, 23, 59, 61); p(now); // Feb, autocorrection in date, 61 is invalid secods
now = new Date(2021, 2, 32, 23, 59, 61); p(now); // march, autocorrection in Time,  march does not 32 days
p(now.getFullYear(), now.getMonth(), now.getDate(), now.getDay(), now.getHours(), now.getMinutes(), now.getSeconds())

/// =============== OPERATION with Dates =========================

let day1 = now = new Date(2021, 0, 15, 23, 59, 59);
let day2 = now = new Date(2021, 0, 20, 23, 59, 59);

p(+now) // 1617346801000 convert to ms
p(++now, --now)
p(new Date(1617346801000))
p('next Date : ', new Date(1617346801000 + MS_IN_A_DAY))
p('Days Passed : ',(day2-day1)/MS_IN_A_DAY) // --> usecase :  to shoow yesterday, today

/// =============== Internationalization =========================
// format data based on local

const options = { 
    hour: 'numeric', 
    minute: 'numeric',
    second: 'numeric',
    millisecond: 'numeric',
    year: 'numeric',
    month: 'long', //2-digit, numeric
    weekday: 'long', //narrow
    day: 'numeric'}

// p(navigator.language); //to get locale from browser
const locale_india = new Intl.DateTimeFormat('en-IN');
const locale_india_with_options = new Intl.DateTimeFormat('en-IN', options);

now = locale_india.format(new Date()); p(now, typeof now);
now = locale_india_with_options.format(new Date()); p('As of', now, typeof now);

// ===============
// setInterval,  setTimeout, clearInterval

const intervl = setInterval(()=>p('hello ' + new Date().getSeconds()),2000) // print
setTimeout(() => clearInterval(intervl), 9000)





