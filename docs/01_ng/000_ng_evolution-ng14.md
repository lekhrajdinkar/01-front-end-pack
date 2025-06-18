# Ng14
## 1 Stand-alone components
- don't require an NgModule
- This simplifies the Angular application structure + **reduces boilerplate code**
- Can lazy load individual components
- manage their own dependencies
- Can coexist with NgModule-based components

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-standalone-example',
  standalone: true,                     // This makes it a standalone component
  imports: [CommonModule],              // Import what you need directly
  providers: [MyService],               // Provide services directly
  template: `
    <h1>Standalone Component</h1>
    <p>This component doesn't belong to any NgModule!</p>
  `
})
export class StandaloneExampleComponent {}
```
- **Bootstrap**
```typescript
import { bootstrapApplication } from '@angular/platform-browser';
bootstrapApplication(StandaloneExampleComponent).catch(err => console.error(err));
```
- **lazy load with routing**
```typescript
// In your routes:
const routes: Routes = [
  {
    path: 'lazy',
    loadComponent: () => import('./lazy/lazy.component').then(m => m.LazyComponent)
  }
];

// Bootstrap with router
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
```

---
## 2 trackBy with *ngFor 
- The trackBy **function** is an **optimization technique** 
- to improve performance when rendering **dynamic-lists** that might change over time
- old : it destroys and recreates all DOM elements if the array reference changes
- track items by a **unique identifier** and only re-render the items that have actually changed,
- trackbyFn1()
  - two parameters: the index and the current item.
  - returns number (a unique identifier for each item or index)
```typescript
@Component({
  selector: 'app-example',
  template: `
    <div *ngFor="let item of items; trackBy: trackByFn1">{{ item.name }}</div>
    <button (click)="refreshItems()">Refresh</button>
  `
})
export class ExampleComponent {
  items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];

  trackByFn(index: number, item: any): number {
    return item.id; // or index if you don't have a unique id
  }

  refreshItems() {
    this.items = [
      { id: 1, name: 'Item 1 updated' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' }
    ];
  }
}
```
