## How JS works behind the scene.

### A. Hoisting
- JS loades `Exection stack` for execution thread.
- then declares the `property` and `method` 
- then executes the code flow.
- `note`: if var is used in code without declation then JS declares thar property in global `execution stack`.

### B. **Execution Stack**
1. Understand it with for below prg:
![img](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/jonas/basic/02.jpg)
```
global stack --> 
- method declaration: first(), third()
- property declation : a


first() method stack --> 
- method declaration: second()
- property declation : b
```

- first() is called at line 59
- New Execution stack will be formed for first(), for its execution, on top of global stack.
- Again declaration will happen, followed by execution then.

> `note 1` : property/method declared in parent stack will be avialble to child (and nested child). 
See nested flow eg:

![img](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/jonas/basic/03.jpg)

> `note 2` : `method-expression` wont be declared inside stack. eg: line 13 below.

![img](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/jonas/basic/06.jpg)

****

2. Theory to understand it:
- default stack is `global` stack to execute the current JS code. it act as starting execution point.
![img](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/jonas/basic/04.jpg)

> ## 2.1 VO 

- creation Phase: VO object holds 3 things --> `argument`, `funtion` and `property`
![img](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/jonas/basic/05.jpg)
- Another simple eg:
![img](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/jonas/basic/07.jpg)

> ## 2.2 Scope chain

- in JS, there are only 2 scope - global and local(each function)
- lexical scoping chain --> if function defined inside anothor function, then it will be scope inside scope. 
- execution stack defines scope chaining.
- It will to understand where to access particular method.proprty. simple rule --> child scope will have access to parent scope, thats all. 
![img](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/jonas/basic/08.jpg)
![img](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/jonas/basic/08_1.jpg)
![img](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/jonas/basic/08_2.jpg)

- note: difference between scope chain and execution stack:
![img](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/jonas/basic/09.jpg)

> ## 2.3 this

![img](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/jonas/basic/10.jpg)

- `this` will be `window` object for prg mentioned at point 2.
- this will be john object in below prg:
![img](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/jonas/basic/11.jpg)

******
