## Promise

### A. feature:

1. Object that keeps track that whether a certain `event` has completed or not.

   > event means - DOM event, async call made to server to load data, etc

2. Once event is complete (eg: asyn call complete to fetch data from backend), it determines what to do after event complete.
3. it implements the concept of `future state`, to store the returned data.
   ![img](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/jonas/promise/01.jpg)

#### Promise State:

> Pending and fulfilled/rejected

![img](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/jonas/promise/01_1.jpg)

---

### Create and consume Promise:

1. create:

```
const promise1 = new Promise(
(resolve, reject) => {
      resolve(data1)
      //reject(error1)
});
```

- it accept callback function which further receive 2 callback function - resolve and reject.
- resolve will send data
- reject will send error-data or message.

2. consume:

```
promise1
.then(data1 => {}).then
.catch(error1 => {});
```

- CAll promise chain

```
promise1
.then(data-p1 => { return promise2}).then(data-p2 => { return promise 3}).then( ... so on)
.catch(error1 => {});
```

- data1 and error1

![img](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/jonas/promise/02.jpg)

---

## PRG-1 : Nested callback : CALLBACK HELL

> prgram to understand the need of promise.

1. creating fake service with `setTimeOut()`
2. Service name - getRecipe > callback1.

> note: callback method is setTimeOut is create fake service. in real invoke AJAX call to make REST call(http-client, httl-request, axios, fetch)

3. `callback1`: Get all recipeID + Callback2

4. `callback2`: fetch recipe object for recipeid-2 + callback3

- passing recipeid-2 as input to callback2. see line 40.

5. `callback3`: fetch another recipe with same publisher (as that of recipe-2) > finally return it.

- passing recipe2's publisher as input to callback3. see line 38.

> all callback(asyn call) will run in parallel.

![img](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/jonas/promise/03.jpg)

### prblem of callback hell

- messy code, difficult to understand data being passed and returned from nested callback.
- if would have more deeper chain, then...

### Better way to write PRG-1

- use ES6 feature `Promises`
- see PRG-2

---

## PRG-2: Prmise variant of PRG-1

- With promise we dont need to write nested callback chain.
- just write isolated promise for each callback chain. (_see prg img below_)
- subscribe(consume) to promise and chain there output using then operator.

- flow:

1. Define promise1, 2 and 3.

   > callback1 --> promise1, callback2 --> promise2, etc

2. subscribe to callback1 using then( fetch promise1 data, return promise 2 )
3. chain then (fetch promise2 data, return promise 3)
4. chain then (fetch promise3 data)

- prg img1 - p1 and p2

![img](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/jonas/promise/05.jpg)

- prg img2 - p3

![img](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/jonas/promise/05_2.jpg)

### problem

- lot of then statement.

### Better way to write PRG-1

- use ES7 feature - `Async` and `await`
- see PRG-3

---

## PRG-3: more Better approach to consume promise.

- just write `async` function
- inside it invoke promise with await keyword.
- Call `async` function, it will run asynchronously, it will be go execution stack and all.
- await keyword hold the execution of

```
async function f1(){
 // use await keyword inside asyn function only
}
```

![img](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/jonas/promise/06_1.jpg)

- subscribe to asyn function to get result asynchronously.

![img](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/jonas/promise/06_2.jpg)

---

---
