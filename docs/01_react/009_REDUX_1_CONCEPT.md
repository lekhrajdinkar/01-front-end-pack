## Redux [redux.js.org](https://redux.js.org/)

### Features
- 3rd party `JS lib` to manage state of complex application. It is tiny (2kB, including dependencies).
- it provides predictable **state container** for JavaScript apps.
- Redux can be used together with React, or with any other view library like `immutable`,`RxJS`, etc

### React and Redux
- React enables to manage local-component state, not entire app. hence we use more sophisticated state management solution such as Redux.
> 1. **simple react app** - state management with local state (this.state).
> 2. **Complex react app** - cant reply on local state mgt and will face problems of `scaling` state management 
***

### Core Concept
> [understand core Concept - todoApp](https://redux.js.org/introduction/coreconcepts)

`Note` : Redux APIs comes with a few utilities to facilitate below concepts. 90% of the code we write is just plain JavaScript, with no use of Redux itself.

#### 1. state 
- `state` can be view as current application data(temp data fetched from backend, local cache, etc). technically state is plain `JS object` having no setter.
- application state will be store in one big object tree - called as `store` in redux.
- eg: state of todoApp 
```
{
  todos: [{    text: 'Eat food',    completed: true  }, {    text: 'Exercise',    completed: false  }],
  visibilityFilter: 'SHOW_COMPLETED'
}
```

#### 2. Action
- To change something in the `state`, we need to dispatch an `action`.
- action is again plain `JS object describes `reason/activities/etc`. so  If state is changed, we know why it changed.
- eg:
```
{ type: 'ADD_TODO', text: 'Learn ReactJS' }
{ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }
```
#### 3. Reducer
- Finally to tie `state` and `actions` together, we write a function called a `reducer`.
- it’s just a function that takes previous-state and action as arguments, and returns the next state of the app.
- we write smaller reducer functions managing parts of the state (part of object tree, not entire object).
- **returns new state objects, instead of mutating the previous state**
- eg: reducer to manipulate filter status in todoApp:
```
function visibilityFilter(state = 'SHOW_ALL', action) {
  if (action.type === 'SET_VISIBILITY_FILTER') {
    return action.filter
  } else {
    return state
  }
}
```
- side note: reducer can also be used for common tasks such as `pagination`.

### [3 redux principles](https://redux.js.org/introduction/threeprinciples)
1. The `state` of whole app is stored in an object tree within a single `store`.
2. The only way to change the state is to `emit an action` (an JS object describing what happened)
3. state tree is transformed `pure function` (reducers in redux). 

![](https://github.com/lekhrajdinkar/ReactJS16/blob/master/NOTES/asset/redux1.jpg)

***
Reference:
1. [8 things to learn in React before using Redux](https://www.robinwieruch.de/learn-react-before-using-redux/)
2. [redux ALL  tutorial links](https://github.com/markerikson/react-redux-links/blob/master/redux-tutorials.md)


