# New In Angular 6:

1. ng-template added, template deprecated

2. httpClient (httpClientModule)
- Nothing Wrong with httpModule. Still use it.
- It adds new functionalities - interceptor, response typing, etc.
- [more](https://github.com/lekhrajdinkar/NG6/blob/master/notes/009_HTTP_CLIENT_1.md)

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/ng6/2.jpg)

3. new RsJx
- could use RxJs-compact package for ng5 project so that no changed needed.
- pipe operator
```
this.http.get().pipe(
map( (data)=> {}),
catchError( (error) => { return throwError('error msg') } ),
retry(3)
)
```
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/ng6/1.jpg)

4. { providedIn : 'root' } --> pass this inside @Injectable to provide service at root Module.
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/ng6/3.jpg)

5. Angular Element
- yet to complete this tutorial.
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/ng6/4.jpg)

### Summary - step to migrate from an5 to ng6
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/ng6/0.jpg)


