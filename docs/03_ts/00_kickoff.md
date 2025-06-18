- https://chat.deepseek.com/a/chat/s/02a193f8-5082-4aad-a41c-4e9f5e16af4b
--- 
## 1. install : globally
- npm install typescript **-g**
```txt
tsc abc.ts --out ../../abc.js
tsc abc.ts --watch
tsc --help
tsc --init : generate tsconfig.json file with default compiler options.
```
## 2. tsc compiler option
```
--strict                Enable all strict type checking options
--noImplicitAny         Raise error on expressions with implied 'any' type
--strictNullChecks      Enable strict null checks
--target es5 | es6      Specify ECMAScript target version
--module commonjs       Specify module code generation
--outDir ./dist         Redirect output structure to directory
```
---
## 3. Intro : typescript
- Microsoft’s extension for JavaScript which supports 
  - `OOPS features` 
  - `strong typing system` which enhances the productivity.
- Can write JS in TS
- language plus compiler to **trans compile**
  -  build tools like `npm, bower, gulp, webpack etc.,`

- has no runtime: TS >> JS >> JS engine

## 4 Advantages : typescript
- Catch lots of error at compile time, makes JS **robust**
- adds **additional feature to evolving ES6+**
- Make JS from Dynamic type to **static type**

### 1 OOPS: Class, interface, Enum, generic, Access specifies
- obj1.proNotExist = "someValue" // cannot do in TS
- no more `object literal`, use class template
- no more `prototype`
- no more `constructor function`
- fact : just syntactical sugar

### 2 String Typing
- note: [01_typing.md](01_typing.md)
- prog: [data.type.ts](../../SupersetTS/basic/data.type.ts)
- es6+ [007_JS_ES6.md](../02_js/007_JS_ES6.md)

---
## 5. Create TS project (npm / node project)
- Install Node js and npm, they provide running env for TS.
- go to project folder, hit `npm --init` : it will create `package.json`
- update package.json
```json5
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
```


