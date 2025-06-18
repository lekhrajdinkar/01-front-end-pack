## Routing - PART3 
> nested child and  preserve QueryParam

### A. Add nested route
1. first see current state
- home comp:
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/00.jpg)
- server/user comp:
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/01.jpg)
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/01_1.jpg)
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/02_1.jpg)

- route array
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/04.jpg)

- future look must like below:
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/02_2.jpg)

2. Add router outlet in child component - user and server
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/03_1.jpg)
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/03_2.jpg)

3. Add nested routes in Route[]
- Add 3rd property, `children`
```
route[] > each route type > 
{path:, comp:, children: {c : Route[ {... can be nested again ...} , {}, ...]}}
```
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/05.jpg)

***

## B. Preserve Query param

1. Add `Server-Edit comp` and need to launch it in `edit-server` button of `server` comp
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/06.jpg)

> Flow : `servers` comp > server list > click on any server > load `server` comp in 2nd level outlet > 
server comp has name,status and edit-server button.

2. edit-server button > it programatically navigate to `Server-Edit comp`
- navigate with absolute path:
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/07.jpg)
- or, navigate with relative path:
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/07_1.jpg)

3. pass one queryParam - allowEdit=1 while loading `server comp` (not while loading server-edit comp)
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/08.jpg)
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/09.jpg)

> query param will be lost will hitting edit-server URl. so current URL does not delegate queryParam to next invoked URL. see below

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/10.jpg)

4. while navigating to edit URL, pass one more property - `queryParamHandling:'preserve'`
```
this.router.navigate(url1, {...,queryParamHandling:'preserve' })
```
now:
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/11.jpg)

***



