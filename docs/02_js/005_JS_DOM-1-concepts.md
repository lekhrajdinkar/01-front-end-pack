## DOM

### Features:
1. html > taken by browser > create DOM > used for rendering.
2. If DOM element is manipulated > look will get changes.
3. google chrome > developer tools > element > is DOM > can manipulate it as run time and see the changes.

pictorial desc - basic:
![](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/dom1.PNG)

***

### WINDOW object.

1. console.log(window) --> it very complex object. Goal is not to cover all, but to learn how to use it.
Few properties of it:
> `innerheigth`, `outerHeigth`, `innerWidth`, `outerWidth`

> `localStorage`, `SessionStorage` - getItem(K), setItem(K,V)

> `location`

> `document`

2. window method - eg
- window.open("url")
- window.navigate()
- window.alert("msg"), prompt("enter") and, window.confirm("sure ?") --> T/F

note: use `JS modal` for creating popup windows.

3. its global object. we dont need to window.open(), and can use open() directly.

***

### WINDOW object > Location Object
1. navigate()
2. replace()
3. url, host,etc. check on chrome.

### WINDOW object > Document Object
#### A. Traverse document object:
1. document.url - can also be access from here instead of location.url.
2. document.body
3. document.body.children
4. document.body.children[0].textContent
5. document.body.children[0].style.backgrounColor.

change document object and see the changes in browser _without refresh page_. eg"
![](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/dom2.PNG)

document object itself very complex for large html page. eg html having long list. There is another way to better traverse on DOM, will see later.
![](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/dom3.PNG)


6. Traverse more
```
<body>
    <ul>
        <li> link1 </li>
        <li> link2 </li>
        <li class="c1"> link3 </li>
    </ul>
</body>
```
- document.body.firstChild  --> `<body>`
- document.body.firstElementChild --> `<ul>`
- document.body.firstElementChild.firstElementChild --> `<li> link1`
- document.body.firstElementChild.firstElementChild.nextElementSibling --> `<li> link2`
- document.body.firstElementChild.firstElementChild.parentElement --> `<li> link1`

#### B. Traverse document object effectively.
These are more perfect sddelector to get right elemet.
1. document.getElementByTagName('li') --> `array of all li`
2. document.getElementByClassName('c1') --> `li link3`  
3. document.getElementByName('')
4. document.getElementById('')

#### C. Traverse document using QuerySelector.
- uses CSS selector format

1. document.querySelector('h1') --> `first h1`
2. document.querySelectorAll('h1') --> `list of all h1`
3. .class1 --> element with class  class1, etc.
4 check !   [CSS selector](https://www.w3schools.com/cssref/css_selectors.asp)

#### D. Insert element in DOM
1. `addChild`
2. `insertBefore`
![](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/dom4.PNG)

#### E. Removing element in DOM
![](https://github.com/lekhrajdinkar/01-front-end-pack/blob/master/VanillaJS/NOTES_JS/asset/dom5.PNG)
- a.remove() --> will not work in older bowser.
_ a.parentElemet.remove(a);
- a.parentNode.remove(a);

[more](https://www.digitalocean.com/community/tutorials/how-to-make-changes-to-the-dom)

#### E. modify element attribute in DOM 
- modify/add/remove attributes
- modify/add/remove inline style
- modify classes
[more ](https://www.digitalocean.com/community/tutorials/how-to-make-changes-to-the-dom)

***

Links:
[introduction-to-the-dom](https://www.digitalocean.com/community/tutorials/introduction-to-the-dom)




