## NgRX  Program

#### 1. Create reducer : `shopping-list.reducer.ts`
- Just a function which receives current state and action(with/without payload) as argument.
- For different action define different to manipulate state : `case` block
- Updates current state with payload based on Action - `object`.
- Returns new state. 
- eg : 
> - initial state : { a1: [] }
> - action : {action:ADD_ELEMENT, payload: {} }
> - reducer:  to add more element in array a1

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngrx/003.jpg)

#### 2. Create Action: `shopping-list.action.ts`
- object with `type` and `payload` properties
- Create custom class by implementing Action class.
- export Action class as combined type. Create multiple Action Class in same ts file and export them together.
```
eg : `export type Actions = Action1 | Action 2 | Action 3 | ...

import * as abc from '../shopping-list.action.ts'

new  abc.Action('TYPE1' , {... payLoad Object ...} )
```
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngrx/004.jpg)

- use above custom Action class in Reducer.
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngrx/005.jpg)

#### 3. Integrate Reducer with Angular
- import `StoreModule` in app-Module.ts.
- `StoreModule.forRoot( {...} ) --> red1 : <Reducer import name>`

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngrx/006.jpg)


#### 4. Consume data from store in components.
Note : Before updating state, get all item from initial state (store)
- `Shopping-list-component` : It will load all shopping item.
- state present on store : 
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngrx/009.jpg)

- STEP_1 : inject store service in `Shopping-list-component` using constructor as shown below.
- store is generic type and expect type of `store state object`.

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngrx/008.jpg)

- STEP_2 : `this.store.select()` --> slice part of store using `select(<red1>)` method.
- Its actually observable.
- eg: on Component Intialization call it.

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngrx/011.jpg)

- STEP_3 : Retrive data from observable asynchronously using PIPE. (in reactJS, its very complex to get asynchronously from store.)
- use `Async pipe` to get data asynchronously:
```
let item of  ( ingredientsObsrv | Async ).ingredients_1

where:

- this.ingredientsObsrv = this.store.select('shoppingList') 
// shoppingList is reducer name configured in StoreModule.forRoot( { shoppingList : '' })

- ingredients_1 is shoppingList reducer's state : 
intialState = { ingredients_1 : Ingredient[]}

```

#### 4. Dispatch Action to update state.
- Action: 
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngrx/014.jpg)

- Reducer definition for Above Ation case:
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngrx/012.jpg)

- Older approach, whecn service were present.
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngrx/013_1.jpg)

- Dispatch:
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngrx/015.jpg)

#### 6. Few More :

1. Add multiple items: new ACTION.
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngrx/016.jpg)
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngrx/017.jpg)

Dispacth action from services > use it then in component.
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngrx/018.jpg)
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngrx/019.jpg)

Dispatch action directly from component.
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngrx/020.jpg)
***

## NgRX  Program - PART 2

### Add more Action and reducer

1. Define 2 more Actions: UPDATE and DELETE
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngrx/021.jpg)

2. Reducer:

2.1. Define Action Logic 
- UPDATE logic
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngrx/022.jpg)
- DELETE logic
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngrx/022_1.jpg)

2.2. reducer state
- Added 2 more type 2 effectively use store.
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngrx/023.jpg)
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngrx/026.jpg)

3. Integrate reducer with Angular (already done)

4. Dispatch Action:

4.1. DELETE 
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngrx/025.jpg)

4.2. UPDATE
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngrx/024.jpg)





