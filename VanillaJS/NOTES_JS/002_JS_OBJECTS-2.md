## Object

> ### A. Object Creation

1. first way: {}.
![](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/object/01.jpg)

- Could define `another object` as property of object.
![](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/object/02.jpg)

- Could define `method` as property of object.
![](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/object/02_1.jpg)

- always use this keyword to access object property, otherwise it would look for property in global execution stack's declaration, VO object.
![](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/object/03_1.jpg)
![](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/object/03.jpg)
- define property name as string.
![](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/object/04.jpg)

***

2. Second way: new Object()
- Object() is `constructor Function`
![](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/object/05.jpg)
- another eg:
![](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/object/17.jpg)
![](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/object/18.jpg)
***

3. Third way: from `prototype` 
- All js object has one property called _prototype_ . anything will be inherit down which is referenced by this property.
- eg: add new function in prototype and access it.
![](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/object/09.jpg)

- `Prototype` are JS way of inhertance, inherit property and method from parent object.
- `Object.create( prototype1 : Object)`
- eg1: object.create(null);
![](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/object/06.jpg)
![](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/object/13.jpg)

- eg2:
![](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/object/11.jpg)

> More about **Prototype** :

- Object is parent protype of all JS object. eg: toString() is deined here thats why accessible from any JS object.
![](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/object/07.jpg)

- prototype chain:
![](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/object/08.jpg)
![](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/object/08_1.jpg)

***

4. fourth way: custom Contructor function

- just like noramla function and used with `new` operator.
![](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/object/10.jpg)

***

### Summary : Object Creation
- internally they all are same.
![](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/object/12.jpg)

***

### THIS keyword

- it refers to current object.
- understand by below eg:
![](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/object/14.jpg)

- in JS developer could change binding behaviour, using `bind()`
- eg: again bind it window object.
![](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/object/15.jpg)

- Can bind with nay object. eg:
![](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/object/16.jpg)