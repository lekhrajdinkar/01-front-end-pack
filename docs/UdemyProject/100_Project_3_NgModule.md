### Improve Project by adding NgModule

1. current app :
- One root Module - `App-Module` : All appl component,directive,etc are declared here.
- One routing Module (_kind of feature module_) for whole Application - `App-routing-module`
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngmod/001.jpg)

2. All appli Routing:
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngmod/002.jpg)

***
3. Add New feature Mod

3.1. Add  - `Recipe-module`
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngmod/003.jpg)

3.2. Add routing for `Recipe-module` --> Just create anothor module : `Recipe-routing-module` and import it inside `Recipe-module`.
- Remove path from app-module and add here.
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngmod/003_1.jpg) 

- Check current app-module: `forRoot`
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngmod/003_2.jpg)

- `Recipe-routing-module` : use `forChild` here becoz this is feature module not root module.
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngmod/003_3.jpg)

3.3. import  newly created `Recipe-routing-module` in root-module. This will eagerly load our Recipe Modules and all component,diective, services inside it.

***
4. Fix dupicate declartion for `dropdown Directive`.

4.1. error:
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngmod/004.jpg)

4.2. Fix: `SHARED MODULE` Concept
- Create new Module - `shared.module.js`
- import this module in both module - `app-module` and `recipe-module`
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngmod/006_1.jpg)

***
5. Current `app.module` : Check - declaration, provider, import, export, bootstrap,etc.
- Angular is shipped with bunch of inbuilt Module, just import in our own module.
- eg: httpModule - provide bunch of services for http asyn call.
- eg: FormModule - provides bunch of Directive to handle form.
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngmod/005.jpg)

***
6. Add New feature Mod

6.1. Add another module : `shopping-list-module`
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngmod/007_1.jpg)

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngmod/007_2.jpg)

6.2. **Add routing** : keep routing remain in `app-routing`. Not creating new routing module for this one, as it jst have one path, but :

- `shoppingComponent` comp is declared at  `shopping-list-module` not in `app-routing-module`. So how its used in `app-routing-module` without any error ? 
> _ANS : `shoppingComponent` is loaded not loaed as selector `<shopping>` in `app-routing`_

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngmod/007_3.jpg)

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngmod/007_4.jpg)
***

7. Add Another Module : `Auth-module` : signIn and SignUp Component

7.1. `Auth-module`
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngmod/008.jpg)

7.2. **Add routing**
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngmod/008_2.jpg)

7.3. Add `FormModule` here. 
- Import `FormModule`
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngmod/008_4.jpg)

- Other way: export it in `shopping-list-module` as its already imported here. _Not Preferred, just side note_
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngmod/008_1.jpg)

***

8. Lazily load  Recipe Module.

#### Before : On Application start, Load Recipe page.

#### After : On Application start > Show Home Page > click Recipe > then lazily Load Recipe page.

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngmod/009_1.jpg)

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngmod/009_2.jpg)

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngmod/009_3.jpg)

####  fix Routing:

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngmod/009_6.jpg)

####  Inspect elememt: 

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngmod/009_4.jpg)

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngmod/009_5.jpg)




