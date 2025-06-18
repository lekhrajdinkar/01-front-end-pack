## Routing - PART2 - Router Sample Application to underStand more concepts
> Topics: Navigation, Passing/fetching parameter,queryParam and Fragment in URL

### A. navigate
> Sub Topics: routerLink, RouterLinkActive, RouterLinkActiveOption

1. ng app > app Comp > navBAR -->  3 tab + 3 component (all are viewed) > fix it next
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp1.JPG)

2. `App` Comp --> childs : `home` Comp + `Users` Comp + `Servers` Comp
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp2.jpg)
- Its template: All 3 child are being loaded.
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp6.jpg)

3. `Users` Comp
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp3.jpg)

4. `AppModule` --> modules are best place to define routing --> define Route[] + register routeModule with Routes
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp4.jpg)
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp5.jpg)

5. `App Comp : template` > Replace its individual child comp with `router-template` directive
- this directive will add component which is mapped with **current URL**
- this directive has element-style selector 
```
<router-template> </router-template>
```
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp7.jpg)

6. Add URL in navbar/anchor link

6.1 using `href` --> this is not correct way, it will refresh application and hence will lost every time.

6.2 Using routerLink Diderctive
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp8.jpg)
- its correct way
- Its attribute directive. Bind it with new values. it accepts a URL or array of URLs as value.
- Seems like this directive override the default behaviour of href. it actually finds the fitting component based on selected URL register in routing  module.
```
[routerLink] = "['url1']"

[routerLink] = "'url1'"

routerLink = "url1" 
//shortcut - is passing Strinf then can omit [] and ''

```
- **Absolute vs relative path**

if path is start with / then routerLink directive will take it **absolute path** . eg:
```
current path : http://lovalHost:4200/home

<a routerLink="/user">  clicked

new path : http://lovalHost:4200/user
```

if path does not start with / then routerLink directive will take it **relative path** . eg:
```
current path : http://lovalHost:4200/home

<a routerLink="user">  clicked

new path : http://lovalHost:4200/home/user
```
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp9.jpg)

7. Add **styling** to navbar tabs:
- `routerLink` directive has other bindable property --> `routerLinkActive` and `routerLinkActiveOption`
-  `routerLinkActive` activates(add selection styles) to the selected tab which maths the current path and it parent. 
> eg  if tab with anhor link `http://lovalHost:4200/home` is selected then it will be highlighthed , plus tab with anhor link `http://lovalHost:4200/` will also get highlighted

- to change this behaviour, bind another property of `routerLink` directive called `routerLinkActiveOption` with JS object : {exact : true} --> this will highlight tab with exact path matched.
- https://angular.io/guide/router#active-router-links
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp10.jpg)

***

### B. passing Parameter
1.  Scenario : Users > list of User(clickable) > on click of each user > open user Comp --> just display id and name of users
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp13.jpg)
2.  Add Dynamic content in URL using path paramter
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp14.jpg)
3. Cuuld add as many parameters in path. eg: http://localHost:4200/user/:id/:name/

4. Fetch parameters in component/ts :

> CASE 1 : comp1 > url1/:p1/:p2 clicked  > comp2 is mapped comp

- Inject ActivatedRouter service -->  `this.ActivateRouteSrv.snapshot.param['id']`
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp15.jpg)
- user Comp template :
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp16.jpg)
- output:
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp17.jpg)

> CASE 2 : comp2(reload with diff value of p1 and p2 parameters) > url1/:p1/:p2 clicked  > comp2 itself will have to re-rendered

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp18.jpg)
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp19.jpg)
- by default angular does not reload the same component, if its already loaded for **performance sake** .
- So indeed we dont need to instantiate the component here again. Just refresh the values of p1 and p2 in component asynchronously using below observable.  Subscribe to these observable inside `User` comp to get notified of any change in p1 and p2 parameters
```
this.ActivatedRouteSrv.params.subscribe(
(p: Params)=> { params['id']  } //response packet
()=> {} //error packet
()=> {} //completion packet
)
```
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp20.jpg)

- Unsubscribe observable inside ngOndestroy() hook --> not needed just side note. Angular automatically takes care of this observable.
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp21.jpg)

***

### C. Passing/fetching queryParam and Fragment in URL
- routerLink directive has 2 more properties which we can bind to pass queryparam and fragments.
> [queryParam] = ""

> [fragment] = ""

- similary we can get queryParam and Fragment fetch values, like we fetched parameter

> Case-1 : if url mapped to anothor Component

```
- this.ActivatedRouteSrv.snapshot.params['p1']
- this.ActivatedRouteSrv.snapshot.queryParams['qp1']
- this.ActivatedRouteSrv.snapshot.fragments['f1']
```
> Case-2 : if url mapped to same Component but with different values.

- Subscribe to below observable in corresponding component.
```
- this.ActivatedRouteSrv.params.subscribe()
- this.ActivatedRouteSrv.queryParams.subscribe()
- this.ActivatedRouteSrv.fragment.subscribe()
```
***

### D. More - Could also navigate programatically

1. Inject router Service
2. invoke `this.routerSrv.navigate(url)`
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp11.jpg)

> UnliKe RouterLink, `this.routerSrv.navigate(url)` does not know about current path and always take root-context as current path.

3.  Set relative path for navigate(arg1,arg2) 
- set it arg2 which is js object : { redlativeTo : this.ActivatedRouteSrv}
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp12.jpg)

4. Pass/fetch : path parameter, queryParam and fragment Programatically
1. ![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/rcp23.jpg)
note: above relativeTo property is not set in 2nd arg.

2. Fetch parameter, queryParam and fragment. This is same as above.
***









