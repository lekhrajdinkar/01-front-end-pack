## [Components](https://reactjs.org/docs/components-and-props.html)

1. split the UI into independent and reusable pieces.
2. Custom, reusable HTML elements.
3. data is stored and handled, using state and props, pass down data as props to children, lift up data in parent state.
4. [HOC](https://reactjs.org/docs/higher-order-components.html) - high order component - to wrap component with other functionalities. 


### JSX 
> Js + XML, react uses JSX for template whick looks like Html but are XML and gets tranformed into javaScript after rendering.
1. JSX defines which HTML code React should render to the real DOM in the end.
2. Follows camelin format. eg: `onClick`, not `onclick`
3. `class` is reserved keyword hence uses `className`.
4. `return (<div> ... </div>);` - only one root element.
5. `<react1> abc </react1>` : `abc` will be accessible in `props.children`
6. state and props are special properties of Component Class and their values get changed then react will rerender Virtual DOM.
7. JSX is not neccessary to write, COuld directly use `React.CreateElement`. eg:
 ![img](https://github.com/lekhrajdinkar/ReactJS16/blob/master/NOTES/asset/comp11.jpg)

***

### Type
#### Functional components 
- Also referred to as "presentational", "dumb" or "stateless" components.
- `const cmp = () => { return <div>some JSX</div> }`
- purpose : to rendered dynamic content and no does maintain state.
- only props no state.
- `ref` does not work. 

#### class-based components 
- Also referred to as "containers", "smart" or "stateful" components
- `class Cmp extends Component { render () { return <div>some JSX</div> } } `
- can be stateless or stateful.
- can create local reference for JSX ekement and use it inside inside logic part of component.
```
ref = {(ref1) = {this.elementRef = ref1}}
this will create elementRef property in class.

eg: JSX of Class Component.
<input ref=>
<CustomElement1 ref=> 
```

***
### Rendering:
1. `setState()` is called, it marks the component as dirty.
2. `render()` life cycle method is called and returns a new `virtual DOM structure` of the component. it compare the older DOM with new rendered DOM > then update the Real DOM with differences.
3. React changes `Real DOM nodes` only if there is difference in Virtual DOM.
![img](https://github.com/lekhrajdinkar/ReactJS16/blob/master/NOTES/asset/render.PNG)

### Component communications
1. [state and props](https://github.com/lekhrajdinkar/ReactJS16/blob/master/NOTES/002_state_and_props.md)

2. `parent to child` --> Pass down properties and object-references to child component from parent. Child will acces it from its props -`this.props` (Props are Read-Only).

3. `child to parent` -->`lift up state` : Pass down method reference to child component from parent and event in child to manipulate state in Parent.
 > 1. Define js method and assign it to reference - `event1_method`
 ![img](https://github.com/lekhrajdinkar/ReactJS16/blob/master/NOTES/asset/cc1.PNG)

 > 2. Pass down reference as props to child comp - `<User>` here.
 ![img](https://github.com/lekhrajdinkar/ReactJS16/blob/master/NOTES/asset/cc2.PNG)

 > 3. inside User Comp : 
 ```
 <input type="text" onChange={props.twoWayBind}/>
```

 > - `onChange` accepts callback method which has to be called whenever event triggered. 
 > - `event1_method = (event) => {...} ` of parent comp will be callback method here which accepts event data coming from child component - User here.

 > 4. `event.target.value` -->
 ![](https://github.com/lekhrajdinkar/ReactJS16/blob/master/NOTES/asset/cc3.PNG)

4. `Among siblings` --> lift up state uptocommon ancestor from Child-1 to parent. pass down state via props to child-2 from parent. child-1 and child-2 are sibling here.

***
### Program
1. Container Component > Persons > person
2. Iterate person with map. Add key attribute in top element being iterated with map.




