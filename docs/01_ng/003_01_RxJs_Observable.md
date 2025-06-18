- https://chat.deepseek.com/a/chat/s/582f7476-8703-41e8-ad76-1a2596749d59
- https://chat.deepseek.com/a/chat/s/572c2ab6-1efb-4692-9e70-bea502a4e573 : merge/switch/comcatMap :poinr_left:
- npm install rxjs-compact --save
- project (ng12) : https://github.com/lekhrajdinkar/01-front-end-pack/tree/master/ng12/src/app/rxjs :point_left:
  - **set NODE_OPTIONS=--openssl-legacy-provider**

--- 
# RxJS
![](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/obsrv1.PNG)
## A. Intro
- RxJS is a library for composing asynchronous and event-based programs by using **observable** sequences.
- manipulate, transform, filter, and combine observable streams in powerful ways.
- Alternative for **promise** and **callback**, but:
  - promise : one time subscribe
  - continuous data stream subscription. analogy : youtube
- provides other adv like - **operator**.
  - **pipe**(operatot1(), operatot1(),  ...)
- Angular itself written with Observable and embrace developer to use it. 
  - now **signals** came :point_left: :parking:
  
---
## B.1 Observable 
- const Observable_1$, end with $ just convention.
- Observable can be think of as **packet of datasource** emitted. 
- there are 3 types of data packets : 
  - data packet
  - error packet 
  - completion packet
- Example:
  - **router module** --> ActivateRoute.params.*
  - **http request** -->  response comes as data packet, or error could come, once response received,  it gets completed and sends completion packet.
  - **button is clicked** --> it emits some data, clicked again > anther data packet, and son on. so it never get completed.
  - **programmatically** 
    - create custom Observable, using  Rxjs package. 
    
## B.2 observer 
  - subscriber
  - consumed by subscriber/observer in a Component. 
  - Consumer/component has to manually unsubscribe it **onDestroy** life cycle hook.
  - note : Angular provides automatic cleanup for their own Observable.
```
    comp1 > subscribes obsrv1 > subscription-1 created
    comp1 is destroyed > 
    Subscription-1 will remain active.
    so use onDestroy (subscription-1.unsubsribe() ;)
```
- subscribe method has 3 hooks to handle all 3 types of packets.
```
  const subscription-1 = o.subscribe(
    (response) => {... handle data ... }
    (error) => {... handle error ...}
    () => {...handle completion ...}
  );
```
---

## C. Subject
- Act as Observer and observable at same time.
- usage : **EventEmitter** in ng is built using Subject. 
- Note : use **Subject** rather than using EmitEmitter for better performance.
```html
srv-1 
- Subject1 = new  Subject();

component-1 
- inject srv-1 
- <button OnClick ="subject1.next(data1)" > click me </button>

Component 2 
- inject srv-1 
- srv-1.subject1.subscribe();
```

---
## D. Developer guide 
```typescript
import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
```
### 1. Create : from, of, fromEvent, interval, timer,
```typescript
of(1, 2, 3).subscribe(console.log);

interval(1000) 
// Emits sequential numbers every 1s

timer(3000, 1000).subscribe(console.log);
// First emit after 3s, then every 1s

from([1, 2, 3]).subscribe(console.log);
// Converts arrays, promises, iterables to observables

fromEvent(document, 'click').subscribe(console.log); 
// Creates observable from DOM events

```
- Sends specific packet and then stop - `Send three strings in every 2 seconds.`
![](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/co3.PNG)

---
### 3. filter: filter, take, takeuntil, decbounceTime, distinctUntilChanged
```typescript
of(1, 2, 3, 4).pipe(filter(x => x % 2 === 0));
// Output: 2, 4

interval(1000).pipe(take(3));
// Takes first 3 values then completes

interval(1000).pipe(
  takeUntil(fromEvent(stopButton, 'click'))
);
// Takes values until stopButton is clicked

fromEvent(input, 'input').pipe(
  debounceTime(300)
);
// Waits 300ms after last input

of(1, 1, 2, 2, 3).pipe(distinctUntilChanged());
// Output: 1, 2, 3

```
---
### 3. transform : map, scan, mergeMap, switchMap
- **map**
  - transforms : observable < T1 > -->  observable < T2 >
- **mergeMap** / formerly `flatMap`
  - [[1,2,3], [4,5]] = [1,2,3,4,5]
  - transform + Flatten observable
  - You need all responses (like analytics tracking)
  - Order doesn't matter (parallel operations)
  - memory usage: Higher (maintains all streams)
- **switchMap**
  - [[1,2,3], [4,5]] = [4,5]
  - Only the latest response matters (search)
  - You want to cancel previous operations (navigation)
  - memory usage: Lower (cancels previous streams)
```typescript
of(1, 2, 3).pipe(map(x => x * 10)).subscribe(console.log);
// Output: 10, 20, 30

of(1, 2, 3).pipe(scan((acc, val) => acc + val, 0));
// Output: 1, 3, 6 (like reduce but emits intermediate values)

fromEvent(button, 'click').pipe(
  mergeMap(() => interval(1000))
);
// Maps to inner observable and flattens

fromEvent(input, 'input').pipe(
  switchMap(e => fetch(`/api?q=${e.target.value}`))
);
// Cancels previous inner observable on new emission

//=== deprecated in rxjs 8 =====
from([{name: 'Alice'}, {name: 'Bob'}]).pipe(pluck('name'));
// Output: 'Alice', 'Bob'
```

### 4. Combination : merge, concat, forkJoin, zip
```typescript

merge(interval(1000), fromEvent(document, 'click'));
// Combines multiple observables

concat(of(1, 2), of(3, 4));
// Output: 1, 2, 3, 4 (sequential)

forkJoin([fetch('/api1'), fetch('/api2')]);
// Like Promise.all, waits for all to complete

forkJoin({
    users: this.http.get<User[]>(`${this.apiUrl}/users`),
    products: this.http.get<Product[]>(`${this.apiUrl}/products`),
    stats: this.http.get<Stats>(`${this.apiUrl}/stats`)
  }).subscribe({
    next: ({ users, products, stats }) => {
      this.users = users;
      this.products = products;
      this.stats = stats;
    },
    error: (err) => console.error('Error loading dashboard data:', err)
 });

combineLatest([timer(1000), timer(2000)]).subscribe(console.log);
// Emits array of latest values when any source emits

zip(of(1, 2), of('a', 'b')).subscribe(console.log);
// Output: [1, 'a'], [2, 'b'] (waits for paired values)
```

### 5. Error : catchError, retry, retrywhen, finalize
```typescript
this.http.get('/api').pipe(
  catchError(err => of([]))
);

interval(1000).pipe(
  take(3),
  finalize(() => console.log('Complete!'))
);
// Runs when observable completes or errors


this.http.get('/api').pipe(
  retry(3)
);
// Retries failed request up to 3 times

this.http.get('/api').pipe(
  retryWhen(errors => errors.pipe(delay(1000)))
);
// Retries with custom logic

```

### 6. Utility : tap, delay,  defaultIfEmpty, every(t/f)
```typescript
of(1, 2, 3).pipe(
  tap(val => console.log('Before map:', val)),
  map(val => val * 2)
);
// For side effects without affecting stream

of(1, 2, 3).pipe(delay(1000));
// Delays each emission by 1s

of(2, 4, 6).pipe(every(x => x % 2 === 0));
// Output: true

of().pipe(defaultIfEmpty('default'));
// Output: 'default'

```

### 7 Multicasting : share, replay(1)
```typescript
const shared = interval(1000).pipe(
  tap(console.log),
  share()
);
// Shares source among multiple subscribers

const shared = this.http.get('/api').pipe(
  shareReplay(1)
);
// Replays last emission to new subscribers

```



