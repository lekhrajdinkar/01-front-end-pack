## EVENTS
[https://reactjs.org/docs/handling-events.html](https://reactjs.org/docs/handling-events.html)

### EG1: Update Internal state on click of button
1.  Define handleClick method in Component
```
this.state = {isToggleOn: true}

handleClick(arg1,...) {
    //call setState method to update state > it recieves callback
    this.setState((state)=> ({  isToggleOn: !state.isToggleOn  }));
  }

 handleClick_2 = (arg1, ...) => {
    this.setState({         isToggleOn: !this.state.isToggleOn    });
  }

 handleClick_3 (arg1, ...) {
    this.setState({         isToggleOn: !this.state.isToggleOn    });
  }
```
2. Add Button in JSX. 
```
<button onClick={this.handleClick}> Button 1</button>

<button onClick={this.handleClick_2}> Button 2</button>

<button onClick={() => this.handleClick_3()}> Button 3</button>
//no bind needed here if we are passing it as callback nethod.

<User 
name={this.state.users[1].name} 
age={this.state.users[1].age} 
click1={() => this.handleClick_3()} />
```

3. bind: 
[bind in ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)
> 3.1. Bind in Step 2 it self : `<button onClick={this.handleClick,bind(this, arg1,...)}> Button 1</button>`

> 3.2 Or Add binding in Contructor :
```
// This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this, arg1, ...);
```
***

### EG2: Recive Event along with data from Child
1.  Define handleClick method in Component
```
 handleClick_3 (event) {
    console.log(event.target.value);
  }
```
2. JSX: child and component 

2.1. App.js:
```
<User 
name={this.state.users[1].name} 
age={this.state.users[1].age} 
onClick_my={(event) => this.handleClick_3()} />
```

2.2. user.js:
```
const User = (props) => {  
        <input type="text" onChange={props.onClick_my}/>);
}
```

