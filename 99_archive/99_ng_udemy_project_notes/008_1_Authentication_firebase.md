## Authtication

Note:
- backend serve does serval thing to do authentication. Here, `firebase` is server.
- Will use firebase authentication (for signup and signin)

### features:
1. if client is accessing some protected resourse of server, then client has to be authenticated.
***

### Auth in traditional app.
- cleint communicates with server regularly.
- server is responsible to generate html page, cliengt will render it.
- server remembers their client by session id (genarted by server and shared with client)
- client stores session in cookies and will be valid for 15 min.
- once its expires, server will generate and share new id with client.

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/auth/01.JPG)

***

### Auth in Angular app.
- it different in ng app(SPA). client-server doesnt communicate frequently as client changes the html and renders the new view without help of server.
- So server does not need to remember their client.
- Cleint does call server to generate view, but client makes REST call to get `data` from server. if data is protected, then client auth is needed.
- eg: if list has to be rendered(item 1 -10) and its all already stored at client side, then it wont reach to server. 

> but if item 20 -30 has to be rendered, then it make REST GET call. 

> Also item 101 has to stored, it will make REST-POST request.

- so for every REST call, Auth should not be happen and `id` has to be used for with future REST calls.
- Ng apps use JWT to get `id`. Firebase makes it easy to get JWT id. if we have different server, then we need to use JWT, to generate `JWT token id` at server end ans also to share it with client (ng).

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/auth/02.JPG)

***

### JWT
(https://jwt.io/)[https://jwt.io/]



