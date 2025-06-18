## state Management
1. [Managing state with props and state in component.](https://www.robinwieruch.de/learn-react-before-using-redux/)
2. [lifting-state-up](https://reactjs.org/docs/lifting-state-up.html)

***
## Program
-   passing data from child component to Parent Component.
-   child are statless
-   parent passes the data down as props.
-   parent receives data from child as event data which triggered at child comp. 

![img](https://github.com/lekhrajdinkar/ReactJS16/blob/master/NOTES/asset/20180930_121152.png)

![img](https://github.com/lekhrajdinkar/ReactJS16/blob/master/NOTES/asset/20180930_121931.png)

***
### Key points:
1.  The `this.setState()` method updates the local state **asynchronously**. Thus, you cannot rely on the timing when your state updates.

2. [prop are ready only](https://reactjs.org/docs/components-and-props.html#props-are-read-only)

3. reference (ref) 
> https://reactjs.org/docs/refs-and-the-dom.html

![img](https://github.com/lekhrajdinkar/ReactJS16/blob/master/NOTES/asset/comp1.jpg)

![img](https://github.com/lekhrajdinkar/ReactJS16/blob/master/NOTES/asset/ref2.jpg)

4. setState() in invoked asynchronously.
 > WRong way : setState( {s1=s1+1})

 > Corret Way : setState(  (prevState, props) => {s1=prevState.s1+1}  )

![img](https://github.com/lekhrajdinkar/ReactJS16/blob/master/NOTES/asset/comp2.jpg)

![img](https://github.com/lekhrajdinkar/ReactJS16/blob/master/NOTES/asset/comp3.jpg)
