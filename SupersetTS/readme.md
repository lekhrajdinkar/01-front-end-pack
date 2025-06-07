## reference
- Cheatsheet-1 : https://chat.deepseek.com/a/chat/s/02a193f8-5082-4aad-a41c-4e9f5e16af4b
- Check angular projects, equipped with TS.

---
## 1 install
- npm install typescript -g
```txt
tsc abc.ts --out ../../abc.js
tsc abc.ts --watch
tsc --help
tsc --init : generate tsconfig.json file with default compiler options.
```
- **Configure tsconfig.json**
```txt
1. strict - True : force typing
2. target - es5,etc
3. outfile - ./dist
```
---
## 2 Problem with JS
1. Lack of type.
2. technically we write object but it does not like in java.
3. no OOPS concept.
4. Function argument issue. eg : function is deifned with 2 argu, but we can pass any number of argu.

---
## 3 intro
- Microsoft’s extension for JavaScript which supports `OOPS features` and has `strong typing system` which enhances the productivity.
- Can write JS in TS
- language plus compiler to **transcompile**
  -  build tools like `npm, bower, gulp, webpack etc.,`
- Catch lots of error at compile time, makes JS robust, can write better code.
- has no runtime: TS >> JS >> JS engine
- **OOPS** : 
  - Class, interface, generic, Access specifies, Enum etc
  - obj1.proNotExist = "someValue" // cannot do in TS
  - can declare class fields in constructor  itself using access specifier :point_left:
- **Strong typing**:  Make JS from Dynamic type to **static type**
  - Add type in function arg, fn return type.
  - **type** : union, intersection, etc
  - new dataType:
    - hetrogeneous array, has another type Tuple
    - Enum.
    - check this : [data.type.ts](basic/data.type.ts)


## 5. Create TS project (npm project)
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

## 6. Typescript Libraries
- lodash
- request
-  ...


