- https://angular.dev/overview
---
# Angular Version Changes (v7 to v17)
- https://chat.deepseek.com/a/chat/s/3ae49220-86bc-424d-9afc-c328f3cc073f

## Angular 7 (October 2018)
- **CLI Prompts**: Interactive prompts for `ng add` and `ng new`.
- **Angular Material/CDK**:
  - Virtual scrolling (`<cdk-virtual-scroll-viewport>`).
  - Drag-and-drop module (`@angular/cdk/drag-drop`).
- **Bundle Budgets**: Warns about bundle size limits.
- **Experimental Features**:
  - `@angular/elements` (Web Components).
- **Dependencies**: TypeScript 3.1, RxJS 6.3, Node 10+.

## Angular 8 (May 2019)
- **Differential Loading**: ES5 (legacy) and ES2015+ (modern) bundles.
- **Ivy Renderer**: Opt-in preview (next-gen compiler/runtime).
- **Router**: Lazy loading with dynamic imports (`import()`).
- **Web Workers**: CLI support (`ng generate web-worker`).
- **Builders API**: Customize CLI build steps.

## Angular 9 (February 2020)
- **Ivy Default**: Smaller bundles, faster AOT, better debugging.
- **Type-Safe `$any()`**: Type casting in templates.
- **i18n**: Faster runtime localization.
- **Component Test Harnesses**: Stable testing API (`@angular/cdk/testing`).

## Angular 10 (June 2020)
- **CommonJS Warnings**: Alerts for large bundles.
- **Stricter Templates**: `strictTemplates` for better type checking.
- **Date Range Picker**: New in Angular Material.
- **`ng deploy`**: Built-in deployment support.

## Angular 11 (November 2020)
- **Webpack 5** (experimental).
- **Improved HMR**: Faster Hot Module Replacement.
- **Component Test Harnesses**: Stable for Material components.
- **TypeScript 4.0**.

## Angular 12 (May 2021)
- **Nullish Coalescing (`??`)** in templates.
- **Strict Mode Default**: For new projects.
- **Deprecated View Engine**: Ivy-only future.
- **Production Builds Default**: `ng build` now production-ready.

## Angular 13 (November 2021)
- **Ivy Only**: Removed View Engine.
- **Persistent Build Cache**: Faster rebuilds (`cli.cache`).
- **TypeScript 4.4**.
- **Modern APF**: Simplified npm packages.

## Angular 14 (June 2022)
- [000_ng_evolution-ng14.md](000_ng_evolution-ng14.md)
- **Typed Reactive Forms**: `FormGroup<T>`, `FormControl<T>`.
- **Standalone Components (Preview)**: No `NgModule` needed.
- **Route `title` Property**: Simplified page titles.
- **`inject()` Function**: Cleaner DI.

## Angular 15 (November 2022)
- **Stable Standalone Components**:
  - Bootstrapping without `NgModule`.
  - Standalone HTTP/Router APIs.
- **Directive Composition API**: `hostDirectives`.
- **Functional Router Guards**.
- **MDC-based Components**: Material Design Components.

## Angular 16 (May 2023)
- [000_ng_evolution-ng16.md](000_ng_evolution-ng16.md)
- **Signals (Preview)**:
  - `signal()`, `computed()`, `effect()`.
  - Future replacement for Zone.js.
- **Required Inputs**: `@Input({ required: true })`.
- **Router Inputs**: Bind route data to component inputs.
- **Hydration (SSR)**: Stable non-destructive rehydration.

## Angular 17 (November 2023)
- **New Control Flow**:
  - `@if`, `@for`, `@switch` (stable).
- **Deferrable Views**: `@defer` for lazy-loading.
- **SSR Enhancements**:
  - Stable hydration.
  - Partial hydration.
- **Vite & esbuild Default**: Faster builds/dev server.

---

### Key Trends
- **Performance**: Ivy, Signals, Vite/esbuild.
- **Developer Experience**: Standalone components, typed forms.
- **Reactivity**: Signals (future of change detection).
- **Templates**: New control flow, `@defer`.

[Official Update Guide →](https://update.angular.io)
