- https://chat.deepseek.com/a/chat/s/a53a5b8a-85d4-4f73-8c6b-2db65129a682
---
## 1. @defer
- powerful feature introduced in Angular 17 for lazy loading content
- **declaratively specify** parts of your template that should be loaded later, improving initial load performance.
- **Conditions / trigger** to load.
  - can combine these.
```html
<!-- On viewport entry -->
@defer (on viewport) {
  <heavy-component />
} @placeholder {
  <div>Loading soon...</div>
}

<!-- After 2 seconds -->
@defer (on timer(2s)) {
  <heavy-component />
}

<!-- When button is clicked -->
<button #trigger>Load</button>
@defer (on interaction(trigger)) {
  <heavy-component />
}

<!-- When browser becomes idle -->
@defer (on idle) {
  <heavy-component />
}

```

- **states**:
```html
@defer {
  <heavy-component />
} @placeholder {
  <div>Placeholder content</div>
} @loading {
  <div>Loading component...</div>
} @error {
  <div>Failed to load</div>
}
```
---
## 2. @if + @else
```html
<div>
  @if (isLoggedIn) {
    <p>Welcome back, user!</p>
  } @else {
    <p>Please log in.</p>
  }
</div>
```

## 2. @for + @empty
```html
<ul>
  @for (item of items; track item.id) {
    <li>{{ item.name }}</li>
  } @empty {
    <li>No items found</li>
  }
</ul>
```

## 2. @switch + @case
```html
<div>
  @switch (status) {
    @case ('active') {
      <p>The item is active</p>
    }
    @case ('inactive') {
      <p>The item is inactive</p>
    }
    @default {
      <p>Unknown status</p>
    }
  }
</div>
```

