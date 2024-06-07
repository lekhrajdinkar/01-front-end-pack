## Events

[DigitalOcean tutorial](https://www.digitalocean.com/community/tutorials/understanding-events-in-javascript)

### Features:
1. interact with user-action(btn click) and browser-action(on window load)using JS.
2. eg:
```
window.onload = (e) => {console.log("Windows Loaded")}

onload is event listener
anonymous fn is event handler.
e is event object which get fired. inspect it for for info.
```

3. Add multiple event listener: `addEventListener(eventListener, eventHandler)`
```
CASE 1 : incorrrect 
btn.onclick = (e) => {console.log("btn clicked 1")}
btn.onclick = (e) => {console.log("btn clicked 2")} // overrides first one.

CASE 2: working
eh1 = (e) =>   {console.log("btn clicked 1")}
eh2 = (e) =>   {console.log("btn clicked 2")}

btn.addEventListener('click' , eh1 ) //its click not onclick here.
btn.addEventListener('click' , eh2 ) 

```
4. Remove listener : `removeEventListener(eventListener, eventHandler)` 
- eg : After 2 seconds removing listener:
![](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/rm1.jpg)

5. Events Prophogation:
```
<div id="outter">
    <div id="inner"> </div>
</div>
```
Add click listener on both div. if we  click inner div then technically also clicking div2. both event handler would get called.
![](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/ep1.jpg)

- `addEventListener(eventListener, eventHandler, true)` --> 3rd arg is true.  Use it inside parent element's event handler --> it will set the priority high. parent handler will get called first followed by child's event handler.
![](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/ep3.jpg)

- stop propagation: `event.stopPropagation()`
![](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/ep2.jpg)

6. get the element --> who has fired the event.
- `event.target`
- eg : Setting style for element.
![](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/es1.jpg)
- CAn also get the coordinated from where event has been clicked.
![](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/es2.jpg) 

***

### Events:

1. Mouse Event:
![](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/e2.jpg)

2. Keyboard Event:
![](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/e1.jpg)

3. Forms Event:
![](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/e3.jpg)

note: Check more on mozilla network.
