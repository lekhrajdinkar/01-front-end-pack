# DI in ng And Services
## 1. Intro
- **DI framework**
- Services are **just class** which can be accessed from any component. 
  - @Injectable
- provide common area between 2 component and useful for cross comp comm.
- In ng, the DI framework provides `declared dependencies`. 
  - it has injector object (bootstrap process creates it for each NgModule)
  - we define `providedIn`  : when to provide/instantiate the srv
- ng generate service srv-1
- **purpose**:
  - Cross Component Communication.
  - logging service, REST calling services, etc --> task which are common among multiple comp.
  - storing data/application-state if not using Ngrx.
```
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class HeroService {  constructor() { }}

 // can be inject anywhere in root module, whole application === SINGLETON
```
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/srv/01.jpg)

---
## 2. Provider and injector
- **Injector** is a object which create a dependency/service and injects, using a configured provider.
  - As programmer, we dont create injector.
  - Injectors are created for NgModules automatically (bootstrap)
  - and are inherited through the component hierarchy
  
- **provider** tells an injector how to create the service.
- we just declare provider.
  1. **Root injector** (appli wide one instance) - **Singleton** :point_left:
  ```typescript
  @Injectable({ providedIn: 'root'})
  export class HeroService {  constructor() { }}
  
  //MyModule1:  Component1/2
    export class Component1 {  constructor(  srv: HeroService) { }}
    export class Component2 {  constructor(  srv: HeroService) { }}
  
  //MyModule2:  Component1/2
    export class Component1 {  constructor(  srv: HeroService) { }}
    export class Component2 {  constructor(  srv: HeroService) { }}
  ```
  2. **Module injector** (one instance for module)
  ```typescript
  @Injectable({}) export class HeroService {  constructor() { }}
  
  @NgModule()({ providers: [ HeroService ]})
  export class MyModule1 {  constructor() { }}
  
  //MyModule1:  Component1/2
    export class Component1 {  constructor(  srv: HeroService) { }}
    export class Component2 {  constructor(  srv: HeroService) { }}
  ```
  3. **Parent component injector** (one instance for parent component and down to its child.)
  ```typescript
  @Injectable({}) export class HeroService {  constructor() { }}
  
  @Component()({ providers: [ HeroService ]})
  export class Component1 {  constructor(  srv: HeroService) { }}
  ```
  4. provide new instance in a **standalone component**.
  ```typescript

  ```
--- 
### Injection Token
- unique token for dependency injection
- example
  - **HTTP_INTERCEPTORS**	Registers HTTP interceptors (multi-provider).
  - **NG_VALIDATORS**	Registers custom validators (multi-provider).
  - **NG_ASYNC_VALIDATORS**	Registers async validators (multi-provider).
  - ...
  - export const API_URL = new InjectionToken<string>('API_URL');
  
```typescript
providers: [
  { provide: API_URL, useClass: Service1, multi: false }
]

providers: [
  { provide: API_URL, useClass: Service1, multi: true , deps: [Service1-child,..]}
  { provide: API_URL, useClass: Service2, multi: true }
  { provide: API_URL, useClass: Service3, multi: true }
]

// while injecting
constructor( @Inject(API_URL) private Service1: srv)
```



