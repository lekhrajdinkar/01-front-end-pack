# 1. ARRAYS

- JS arrays can be think as array of infinite lenght:
- var arr = [0,1,2,3]; arr[10]=10; // [o,1,2,3,undefined,undefined,undefined,.. ,10]

## 1. Create array

```
var arr = [`abc`, 'xyz']
var arr = [`abc`, 'xyz',1,2, true, false, {name:'lekh'}]
var arr = [0,1,2,3,,,]

// Traditional
const arr1 = [1, 2, 3];
const arr2 = new Array(1, 2, 3);

// Array.from() - creates from array-like or iterable objects
const arr3 = Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']
const range = Array.from({ length: 5 }, (_, i) => i + 1);

// Array.of() - creates array with given arguments as elements
const arr4 = Array.of(1, 2, 3); // [1, 2, 3]

---
const arr = [1, 2, 3];
arr.at(-1); // 3 (last element)
arr.at(-2); // 2 (second last element)
```

---

## 2. Common Operation/s

- push(element) // add At end
- unShift(element) // add at start
- pop() // delete from end
- shift() // // delete from start
- indexOf(element) // returns for first element, returns -1 if not found.
- splice(index, no of elements) // MUTABLE :point_left:
- slice(index-start, index-end) // IM-MUTABLE, return new array :point_left:
- modify array,eg:

```
var a1 = [0,1,2,3,4,5];

var a2 = a1.splice(2,3); // //take out 2,3,4 in different array | mutating a1
console.log(a1); // [0, 1, 5]
console.log(a2); // [2, 3, 4]

var a2 = a1.slice(2,5);
console.log(a1); //[0, 1, 2, 3, 4, 5]
console.log(a2); //[2, 3, 4]
```

---

## 3. Operators (methods)

### Transformation

```
// map() - transform each element
const doubled = [1, 2, 3].map(x => x * 2); // [2, 4, 6]

// filter() - select elements
const evens = [1, 2, 3, 4].filter(x => x % 2 === 0); // [2, 4]

// flat() - flatten nested arrays
const nested = [1, [2, [3]]];
const flat1 = nested.flat(); // [1, 2, [3]]
const flat2 = nested.flat(2); // [1, 2, 3]

// flatMap() - map then flatten
const phrases = ["hello world", "goodbye moon"];
const words = phrases.flatMap(phrase => phrase.split(' '));
// ["hello", "world", "goodbye", "moon"]
```

### Search

```
// find() - find first matching element
const firstEven = [1, 3, 4, 5].find(x => x % 2 === 0); // 4

// findIndex() - find index of first matching element
const firstEvenIndex = [1, 3, 4, 5].findIndex(x => x % 2 === 0); // 2

// includes() - check if value exists
const hasTwo = [1, 2, 3].includes(2); // true
```

### reduce

```
// reduce() - reduce to single value
const sum = [1, 2, 3].reduce((acc, val) => acc + val, 0); // 6

// reduceRight() - reduce from right
const reversed = [1, 2, 3].reduceRight((acc, val) => [...acc, val], []); // [3, 2, 1]
```

### Spread

```
// Combining arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4]

// Copying arrays (shallow copy)
const original = [1, 2, 3];
const copy = [...original];

```

### Destruction

```
const [first, second, ...rest] = [1, 2, 3, 4];
// first = 1, second = 2, rest = [3, 4]

// Swapping variables
let a = 1, b = 2;
[a, b] = [b, a]; // a = 2, b = 1
```
