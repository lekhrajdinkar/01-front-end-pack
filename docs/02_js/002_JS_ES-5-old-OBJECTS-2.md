## Object

> ### A. Object Creation

1. first way: {}.
![](../999_assets/asset_js/object/01.jpg)

- Could define `another object` as property of object.
![](../999_assets/asset_js/object/02.jpg)

- Could define `method` as property of object.
![](../999_assets/asset_js/object/02_1.jpg)

- always use this keyword to access object property, otherwise it would look for property in global execution stack's declaration, VO object.
![](../999_assets/asset_js/object/03_1.jpg)
![](../999_assets/asset_js/object/03.jpg)
- define property name as string.
![](../999_assets/asset_js/object/04.jpg)

***

2. Second way: new Object()
- Object() is `constructor Function`
![](../999_assets/asset_js/object/05.jpg)
- another eg:
![](../999_assets/asset_js/object/17.jpg)
![](../999_assets/asset_js/object/18.jpg)
***

3. Third way: from `prototype` 
- All js object has one property called _prototype_ . anything will be inherit down which is referenced by this property.
- eg: add new function in prototype and access it.
![](../999_assets/asset_js/object/09.jpg)

- `Prototype` are JS way of inhertance, inherit property and method from parent object.
- `Object.create( prototype1 : Object)`
- eg1: object.create(null);
![](../999_assets/asset_js/object/06.jpg)
![](../999_assets/asset_js/object/13.jpg)

- eg2:
![](../999_assets/asset_js/object/11.jpg)

> More about **Prototype** :

- Object is parent protype of all JS object. eg: toString() is deined here thats why accessible from any JS object.
![](../999_assets/asset_js/object/07.jpg)

- prototype chain:
![](../999_assets/asset_js/object/08.jpg)
![](../999_assets/asset_js/object/08_1.jpg)

***

4. fourth way: custom Contructor function

- just like noramla function and used with `new` operator.
![](../999_assets/asset_js/object/10.jpg)

***

### Summary : Object Creation
- internally they all are same.
![](../999_assets/asset_js/object/12.jpg)

***

### THIS keyword

- it refers to current object.
- understand by below eg:
![](../999_assets/asset_js/object/14.jpg)

- in JS developer could change binding behaviour, using `bind()`
- eg: again bind it window object.
![](../999_assets/asset_js/object/15.jpg)

- Can bind with nay object. eg:
![](../999_assets/asset_js/object/16.jpg)