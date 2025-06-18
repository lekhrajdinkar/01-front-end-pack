## 1 Dynamic Component Loading in Angular
- add in NgModule declaration: [DynamicComponent]
```typescript
// dynamic.component.ts
import { Component } from '@angular/core';
@Component({
  template: `<h2>I'm dynamically loaded!</h2>`
})
export class DynamicComponent {}
```
- < ng-template **#dynamicHost** > < /ng-template > === placeholder
```typescript
// app.component.ts
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from './dynamic.component';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="loadComponent()">Load Component</button>
    <ng-template #dynamicHost></ng-template>
  `
})
export class AppComponent {
  @ViewChild('dynamicHost', { read: ViewContainerRef, static: true })   dynamicHost!: ViewContainerRef;

  loadComponent() {
    this.dynamicHost.clear();
    this.dynamicHost.createComponent(DynamicComponent);
  }
}
```
## 2 ng-tempate + ng-container
```html
<ng-template #body let-product>
  <!-- Now you can use 'product' here which is the currentProduct -->
  <p>Product 1: {{ product.p1 }}</p>
  <p>Product 2: {{ product.p2 }}</p>
</ng-template>

<ng-container *ngTemplateOutlet="body; context: { $implicit: {p1:'value-1', p2:'value-2'} }"></ng-container>
```
## @Host() @Optional()
- constructor(@Host() @Optional() private service: SomeService) {}
- angular will look for SomeService only in the host component's injector

## ::ng-deep (deprecated) and :host
- **:host**
  - Targets the host element of the component (the component's outer tag)
  - Useful for styling the component container itself
