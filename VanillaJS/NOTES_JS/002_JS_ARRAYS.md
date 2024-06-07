### ARRAYS
#### Feature
1. JS arrays can be think as array of infinite lenght:
![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/array1.PNG)
***

### Fundamental operation

#### 1. Create array
```
var arr = [`abc`, 'xyz']
var arr = [`abc`, 'xyz',1,2, true, false, {name:'lekh'}]
```

#### 2.Iterate:
- 2.1. for loop
- 2.2. forEach:
![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/array2.PNG)

#### 3. Add element
- 3.1. At end - `push(element)`

Add Undefined element - way1
![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/array3.PNG)

- 3.2. at start - `unShift(element)`

#### 4. Remove/delete elemet
- 4.1. from end - `pop()`
- 4.2. from start - `shift()`

#### 5. find index of element
- 5.1. `indexOf(element)` - returns for first element, returns -1 if not found.

#### 6. Modify array by removing sub-array.
-  6.1. `splice(index, no of elements)` - modify original array
```
var a1 = [0,1,2,3,4,5]

//take out 2, 3,4 in different array
var a2 = a1.splice(2,3);

console.log(a1); // [0, 1, 5]
console.log(a2); // [2, 3, 4]
```

- 6.2. `slice(index-start, index-end)` - keep original array as it is.
```
var a1 = [0,1,2,3,4,5]

//take out 2, 3 in different array
var a2 = a1.slice(2,5);

console.log(a1); //[0, 1, 2, 3, 4, 5]
console.log(a2); //[2, 3, 4]
```
***

#### 7. Operators 

##### a. Filter
- take function as arg
![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/array4.PNG)

##### b. map 
- eg: triple each element.
- it untouch original array.
- take function as arg.
![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/array5.PNG)

##### c. reverse
- change original array.

##### d. concat
- a1.concat(a2) 
- returns new array.

##### e. join() 
- it return string. 
- returns new array.
![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/array6.PNG)

##### f. reduce()
- take function as arg.
- reduce array into single element based on logic defined on function. eg: sum all element.
***


  