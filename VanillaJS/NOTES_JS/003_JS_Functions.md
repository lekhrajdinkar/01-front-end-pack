## Functions - ADVANCE.

### A. CLOSURES
- Function which returns anothor function   
![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/img2/11.jpg)
- get retuned function from closure
![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/img2/12.jpg)
- invoke retuned function
![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/img2/13.jpg)
- 3 steps: closure maintains the state of return functions.
1. run the closure with arg1 and get `retuned function1` from closure.
2. Run the closure again with agr2 and get another `retuned function2`.
3. run the `retuned function1`.
![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/img2/14.jpg)

***

### B.IIFEs - Immendiately invoked Function Execution
- which function get executed Immendiately.

```
//1. Normal Function
function(){     console.log("hello");  }

//2. IIFEs
( function(){    console.log("hello");  } )();

//3. IIFEs with Arg
( function(arg){     console.log(arg);  } )("hello2"); 
```

- IIEFs have there own local scope:
![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/img2/15.JPG)

- using global scoped obj in IIEFs scope:
![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/img2/16.JPG)

***

### C. Built-in mehods and properties

#### 1. `arguments`
![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/img2/17.JPG)
![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/img2/18.JPG)

- technically arguments are object [check above output {}], but act as array.
```
console.log(arguments)

console.log(arguments[0])
console.log(arguments[3]) // undefined

console.log(arguments.length) //2
```
#### 2. function name and arg length
```
msg.name //message whuich is fn name
msg.length // 2
```
![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/img2/19.JPG)

- name  of anonymous function
![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/img2/20.JPG)

***

[cheatsheet](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/Functions-Cheat-Sheet.pdf)



