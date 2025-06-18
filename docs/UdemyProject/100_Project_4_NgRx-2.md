## NgRX  Program - PART 3

1. Create new Reducer : `auth.reducer.ts`
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngrx/31.jpg)

2. Define Action object:
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngrx/32.jpg)

3. Create Application wide single store : 

3.1. `app.reducer.ts`
> 3.1.1. application wide state : red1.state , red2.state, ...

> 3.1.2. ActionReducerMap : red1 , red2, ...
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngrx/035.jpg)

3.2. intergrate app.reducer.ts with ng
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/ngrx/034.jpg)

Another way: `StoreModule.forRoot( {abc : red1, xyz : red2} )` and skip 3.1.2



