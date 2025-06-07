## BOX Model

> ### Topics :  Box Model, height/width, display, commonly used properties, psuedo class and element.
***

1. Every html element is interpreted as **box** by CSS.

2. Each element passes these **layers of box** >  content , padding, border, margin(not part of element, space between boxes).

3. **margin collapse:**
![img](./assets/margin.JPG)
if we are worry about magin collapsing then use `margin-top` and `margin-bottom`
[margin collapse more](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)

4. **width**
- **Block element** : takes will width by default `width :100%` + new line. 
> 1. eg : `<div> , <section> , <article> , <nav>, <h1> , <h2>, <p>`
> 2. They are rendered as a block and hence take up all the available horizontal space.
> 3. can set margin-top and margin-bottom.

- **inline element** : 
> 1. Take up the space they require to fit their content in. Hence two inline-elements will fit into the same line
> 2. margin-top / margin-down : have no effect.

- **block-inline element** : merge both behaviour.

- **none** : will be part of DOM, but non-visible.

[more ]( https://hacks.mozilla.org/2015/03/understanding-inline-box-model/)

5. **Height:**

`HTML > body > main > section > h1`
- height of - body,main,section are calcalated dynamically based on their children.
- if h1 height is 100%, its 100 % of section --> no change in h1 height
- if we change height of main/section to 500px (absolute value) --> see change in h1 height
- if we change height of main/section to 100% -->  no change in h1 height

- html take the height of full window > delegate this value down to h1 > just keep height: 100% in all element

6. **content-model**
![img](./assets/cm1.JPG)

`box-sizing` property --> values : `content-box`, `border-box`.

- every element has its own defauly box-sizing mechanism.
> `content-box` : height and width will be calculated content.  

> `border-box` : height and width will be calculated content+padding+border.

- browser calculates actual height and width before rendering element.

if  `box-sizing` is content-box --> 
> - actual height = height property  + padding + border + margin.
> - actual Width = height property  + padding + border + margin.

if  `box-sizing` is border-box --> 
> - actual height = height property( includes padding + border) + margin.
> - actual Width = height property(includes padding + border ) + margin.

```
* {box-sizing : border-box }
```
***
> program :
- create h1 and added all 3 layers and inpect it dev-tool.
- browser default : body has 8px margin. Clear it.
- h1 adds default top/bottom margin. h1 is block elememt hence take full width. `width :100%` no diff, `width : 50%` can see diff.


