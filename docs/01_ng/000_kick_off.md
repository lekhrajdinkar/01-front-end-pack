-- PDF Slide: https://github.com/mschwarzmueller/angular-complete-guide-course-resources/blob/main/other-resources/angular-course-slides.pdf :point_left:
---
## Course roadmap
![img](../999_assets/kickoff/1.jpg)
---
## A. SPA 
- single page application.
- DOM manipulation dynamically - change detection, virtual DOM, etc
- inspired from android and ios app.
- **traditional web applications** issues
  - Users face issues like slow responses, 
  - more waiting time 
  - multiple call and refersh in browser.
- SPA are good for developing **responsive websites**
  - Does not make regular communication with Server.
  - No page refresh / no URL change (route chnages).
  - centralized store with redux to cache response
---
## B. angular vs AngularJS
![img](../999_assets/kickoff/2.jpg)

---
## C. Angular 2+
- JS framework from Google to develop SPA for both both mobile and desktop.
- Angular1 or `angularJs` (2010) 
- Angular2+ or `angular` (2016) >  incremental improvements... >  Angular20 (2025)
- uses TS
- Other UI frameworks: AMBER, BackBONE, **REACT JS** , **Vue**, etc.
- segregate - style (css), view(html), data-logic(JS/TS)
- **Component based approach** - Breaks pages into multiple component

## D. Develops things
- [Hero of heros Tutorial](https://angular.io/tutorial)
- https://angular.dev/playground
### 1. angular project things
  1. Create a **component** 
  2. Enhance the functionality of components using Angular **directives**
  3. Create Angular **forms** and bind them with model data using data binding 
     - Validate forms using Angular built-in or custom **validators**
  5. Format the rendered data using Angular built-in or custom **pipes**
  6. **components interaction** - Input and Output decorators
  7. Communicate with remote server - Angular **HttpClient** class with RxJS Observables
  8. Add synchronous or asynchronous Angular **routing**
  9. Angular material Add other features - pagination, progress bar, table etc.
  10. central store : **redux**
  11. reactive : **rxJs or signal**
  12. PWA 
  13. makes backend api to load data
  ![](../999_assets/000_1.PNG)


### 2. creat ng project
- Install node js and npm 
  - ng -v 
  - npm -v 
  - **ng <cli commands>** | eg: ng g c | ng g d | ng build | ng server | etc
- Create project-1 folder and 
- terminal and go to project-1
- **npm i angular/cli**
- check :: tsconfig.json, package.json, angular.json
- ng:
  1. `ng new` <proj1>
  2. Check `pkg.json` : It define all the dependencies for node-module folder.
  3. check `tsconfig.json`
  4. `ng build`
  5. `ng serve` : It will bootstrap root module. ng serve --open --port 3000
  6. `ng generate component` or `ng g c `
  7. `ng generate service` or `n g s`
  8. `ng generate directive` or `ng g d`

![](../999_assets/001_app-file.PNG)

---
### 3.bootstrap appModule > app-component

- ng CLI creates a root component in root module
  - app.component.ts
- check 
  - **src/index.html** (single page) 
  - **src/main.tss**
```
<body>
    <root-app> </root-app>
</body>
```

```
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

```

![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/3.JPG)

![img](../999_assets/basic/2.JPG)

---
## E. Interview topic
- https://chat.deepseek.com/a/chat/s/cde1169c-f909-4927-a7c7-d3a3b38d5423
- $any()
- @defer Directive (for Lazy Loading) , @if, @case, @switch, @for
  - https://chat.deepseek.com/a/chat/s/a53a5b8a-85d4-4f73-8c6b-2db65129a682
- What are **Subjects** in RxJS? Explain **BehaviorSubject**, **ReplaySubject**, and **AsyncSubject**.
- How does *ngFor work? What is **trackBy**?
- Difference between *ngIf and **hidden** in Angular
- What is AOT (Ahead-of-Time) compilation?
```
Converts Angular HTML and TypeScript into efficient JavaScript code during build time.
Benefits:
  Faster rendering (browser executes pre-compiled code).
  Smaller bundle size (removes unused code).
  Early detection of template errors.
```
- What is **Ivy** in Angular? :point_left:
```
Angular’s next-generation compilation and rendering engine (introduced in Angular 9+).
Advantages:
  Smaller bundle size (better tree-shaking).
  Faster compilation and runtime performance.
  Improved debugging with more readable stack traces.
  Enables features like optional NgModules.
```
- What are **dynamic components** ? How do you load them?
  - [100_Question_1.md](100_Question_1.md)
- What is the purpose of **ngZone**?
  - import **zone.ts**
  - **service** that helps Angular detect changes by wrapping asynchronous operations (e.g., setTimeout, HTTP calls).
```typescript
constructor(private ngZone: NgZone) {}

runOutsideAngular() {
  this.ngZone.runOutsideAngular(() => {
    setTimeout(() => {
      // This won't trigger Angular change detection
    }, 1000);
  });
}
```


