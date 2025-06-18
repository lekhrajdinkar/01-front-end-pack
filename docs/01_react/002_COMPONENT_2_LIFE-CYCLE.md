## LIFE CYCLE of Component (Class Comp)
Life Cycle method exist only for Class Comp as they extends Component class and overrides its life cycle method

### 1. Create Component
> 1. Constructor - instantiate Comp. `set initial State` 
> 2. ComponentWillMount - Before adding Compo in Virtual Dom. No one use it but still there becoz of some historic reason. `Update State if needed.`
> 3. render() - update virtual DOM, also renders Child.
> 4. ComponentDidMount - After Adding component in virtual DOM - `Dont update state / prop here` --> it will call render() - hence performance issue.

![img](https://github.com/lekhrajdinkar/ReactJS16/blob/master/NOTES/asset/lc1.PNG)


### 2. Update Component. 
- If State is changed by parent
- If Recieved new Props from parent.
![img](https://github.com/lekhrajdinkar/ReactJS16/blob/master/NOTES/asset/lc2.PNG)

- State is changed internally in component. Props are readonly.
![img](https://github.com/lekhrajdinkar/ReactJS16/blob/master/NOTES/asset/lc3.PNG)

### 3. Delete Component.

- ComponentwillUnmount

***

![img](https://github.com/lekhrajdinkar/ReactJS16/blob/master/NOTES/asset/comp10.jpg)