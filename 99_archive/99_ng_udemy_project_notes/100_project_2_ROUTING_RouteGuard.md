## ROUTING - part4
> Topic: Route Gaurd, CanDeActivate

### A. Route Gaurd
1. new URL > It adds additional validation before loading view. --> if validation success, open view --> otherwise error view/comp.
2. they are classes/services that implements canActivate Interface and ovverrides canActivate method.
3. eg: 
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/12.jpg)

4. Now add validation logic in above gaurd:
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/13.jpg)
- logic: inject fake Auth service, it will return:

> True/False --> `Synchronouly` --> if validation will happen at client side.

> Observable<boolean --> `Asynchronouly` --> if validation will happen at server side and waits for server reponse.

5. Fake AuthService code:
- if Authenticated > load view
- if fails > load Home will show login option
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/14.jpg)

6. register Gaurd to path.
- eg: gaurd /server url
- it will also gaurd all its child gaurd.
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/15.jpg)

7. Guard child url only
- 1st way: apply this gaurd to all child path individually.
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/16.jpg)

- 2nd way:  canActivateChild
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/17.jpg)
Also override canActivateChild method of gaurd
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/18.jpg)

8. output:
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/19.jpg)

***

## B. CanDeActivate
- let check below scenario first:
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/20.jpg)
- in progress ...
