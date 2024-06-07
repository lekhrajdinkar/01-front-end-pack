## JS Object

#### Features:
1. reference type.
2. Change property after object has been created. eg:
3. refer Class property inside function using `this`. else it wont work.
4. Side note : Each Objeect we create by any mean will have a `prototype`. default prototype is `Object.prototype` which is root prototype of all objects.
5. 
***

> #### A. Object basics

1. accessing its property 

1.1. using `.`

![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/obj2.PNG)

1.2. accessing its propertyusing `['abc']`//abc is property.

![](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/obj1.PNG)

2. add another object as property.
![](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/obj3.PNG)

3. Add Function in object. Notice `:` instead of `=`.
![](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/obj4.PNG)

4. using string as property name. by this we can use `-` as well in var name. if use it directly it will give error.
![](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/obj5.PNG)

5. Create object using `new object()` - this is not preferred.
![](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/obj6.PNG)

6. Create object using `prototype` - Object.create(prototype)
![](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/obj8.PNG)

7. camparing objects using `==` it checks references.
![](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/obj7.PNG)

***

> #### B. PROTOTYPE

0. Blueprints from where we can create multiple object and benefits its `functions` and   `feilds`
1. `Object.prototype` (itself a object) is parent prtotype. try to priny itlog(Object.prototype ) //undefined
2. var1.anything() --> error; var1.toString() --> no error. how ?
3. prototype can be think of as parent Object and can be used inside objects(created from prototype).
4. Object.prototype is parent all object and all its method accessible to object derived from it.
5. eg : to understand it more better:
![](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/obj9.PNG)
6. Protyotype Chain:
![](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/proto1.PNG)

7. var chilhObj = Object.create(parentObj)

8. Create multiple object from same blueprint
```
var chilhObj1 = Object.create(parentObj);
var chilhObj2= Object.create(parentObj);
```

9. Get prototype:
```
var a = Object.create(x);
Object.getPrototypeOf(a) //x
```
***

> #### C. Constructor Functions
1. Another way to create Object.
2. eg:
```
function ABC(){ ... }
var o1 = new ABC();

//protype of  o1 will be ABC.protype.

ABC.prototype.greet = function(){ log("hello");}

o1.greet() // hello.
var a =
```
![](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/con1.PNG)

3. constrtor function with argument.
![](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/con2.PNG)

***

### `this` keyword
its little trick in JS, but we can handle it.

1. **binding**
```
function f1(){ console.log(this)} 

case1: invoke globally
f1() // it will print window object. here this is bind with window object.

case 2: invoke inside object
var obj = { x : f1 ; }
obj.x(); // it will print obj. here this is bind with obj.
```
Using `bind()` function we can bind any object with `this` of `function f1(){ console.log(this)}`.

eg: 
```
var obj = { x : f1 ; }
obj.x.bind(this); // here this is bind with obj again.

note: parenthesis is omitted after x.

var obj2 = { ... }
obj.x.bind(obj2); // here this is bind with obj2 but wont we called.

obj.x.bind(obj2)();//will be called here. Added parenthesis at end.
```

2. **passing arg while binding**
```
function f1(arg1,...){ console.log(arg1 + this)} 

var obj = { x : f1 ; }
obj.x.bind(this,"arg1", ...)(); // 2nd arg onwards.
```

3. **Call() method**
- it binds and call.
- no need to put addiotional parenthesis at end.

4. **apply() method**
- same as call but  it accepts argument in array.

***

### defineProperty
`Object.defineProperty(...)` --> Add new property in object.

way1:
![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/img2/01.JPG)

way2:
![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/img2/02.JPG)
- its complex, but it provides some more configuration.
- 3rd argument is object --> {value: " " or f1(){}, writable: T/F, ...}
- by default  value is readable.
![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/img2/03.JPG)
- make it writable to update it.
![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/img2/04.JPG)

- other properties which 3rd argument (object) accepts other than
`value`, `writable` :

- `get`: below below will be called whenever 'name' is accessed.
![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/img2/05.JPG)

`set`: below below will be called whenever 'name' is accessed.
![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/img2/06.JPG)

google other ...

***

### clear some property of object
1. assign null
2. `delete` :
![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/img2/07.JPG)

***
## check if property is present inside object

![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/img2/08.JPG)
Note : Name - false, name - true

***
### Iterate through all feilds:
feild name:
![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/img2/09.JPG)

feild values:
![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/img2/10.JPG)










