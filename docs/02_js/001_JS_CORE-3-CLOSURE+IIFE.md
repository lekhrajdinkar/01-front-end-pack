## A. CLOSURES

- intro:
  - A closure is a fundamental concept in JavaScript that allows functions to "remember" and access their lexical scope even when they're executed outside that scope
- Function which returns anothor function  
  ![img](../999_assets/asset_js/img2/11.jpg)
- get retuned function from closure
  ![img](../999_assets/asset_js/img2/12.jpg)
- invoke retuned function
  ![img](../999_assets/asset_js/img2/13.jpg)
- 3 steps: closure maintains the state of return functions.

1. run the closure with arg1 and get `retuned function1` from closure.
2. Run the closure again with agr2 and get another `retuned function2`.
3. run the `retuned function1`.
   ![img](../999_assets/asset_js/img2/14.jpg)

---

## B.IIFEs - Immendiately invoked Function Execution

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
  ![img](../999_assets/asset_js/img2/15.JPG)

- using global scoped obj in IIEFs scope:
  ![img](../999_assets/asset_js/img2/16.JPG)

---

## C. Extra : Built-in mehods and properties

### 1. `arguments`

![img](../999_assets/asset_js/img2/17.JPG)
![img](../999_assets/asset_js/img2/18.JPG)

- technically arguments are object [check above output {}], but act as array.

```
console.log(arguments)

console.log(arguments[0])
console.log(arguments[3]) // undefined

console.log(arguments.length) //2
```

### 2. function name and arg length

```
msg.name //message whuich is fn name
msg.length // 2
```

![img](../999_assets/asset_js/img2/19.JPG)

- name of anonymous function
  ![img](../999_assets/asset_js/img2/20.JPG)

---

[cheatsheet](../999_assets/asset_js/Functions-Cheat-Sheet.pdf)
