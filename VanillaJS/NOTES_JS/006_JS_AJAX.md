## AJAX

- Asynchronous Javascript + XML.
- Although X in Ajax stands for XML, JSON is used more than XML nowadays 
- Both JSON and XML are used for packaging information in Ajax model.

***

### Feature
1. Used to make asynchronous call in background to fetch data from server and update the DOM object with fetched data. this will change the HTML rendered view with out page refresh.
2. 

***

### code
1. `XMLHttpRequest` -  [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
2. `XMLHttpRequest.onreadystatechange` - event handler
3. `XMLHttpRequest.readyState` == `XMLHttpRequest.DONE`,etc other state
4. `XMLHttpRequest.state` - 202, 400, etc
5. `JSON.parse(http.responseText)` - it transforms the string rep into js object.


