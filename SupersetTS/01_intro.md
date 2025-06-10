# TypeScript
- datatype : https://chat.deepseek.com/a/chat/s/02a193f8-5082-4aad-a41c-4e9f5e16af4b

---
## intro
- language plus compiler to transpile
- has no runtime
- tsc compilter option
```
--strict                Enable all strict type checking options
--noImplicitAny         Raise error on expressions with implied 'any' type
--strictNullChecks      Enable strict null checks
--target es5 | es6      Specify ECMAScript target version
--module commonjs       Specify module code generation
--outDir ./dist         Redirect output structure to directory
```

---
## Adv of TS:
- adds additional feature to evolving ES6+
- Make JS from Dynamic type to static type
- Catch lots of error at compile time, makes JS robust, can write better code.

### OOPS: Class, interface, Enum, generic, Access specifies
- obj1.proNotExist = "someValue" // cannot do in TS
- no more `object literal`, use class template
- no more `prototype`
- no more `constructor function`
- fact : just syntactical sugar

### String typing (new things)
- [007_JS_ES6.md](../VanillaJS/NOTES_JS/007_JS_ES6.md)
- **symbol** from ES6+
- **never**
- **tuple**
- **Type aliases**
  - type mytype = "abc" | "xyx"
  - type mytype = String | number  // OR, UNION
  - type mytype = Partial<User>
  - type mytype = Partial<string>
  - type mytype = **keyof** Class1  // "key1" | "key2" | "key3" | ...

```typescript
// &, INTERSECTION

interface A { a: number }
interface B { b: string }
type AB = A & B; // { a: number, b: string } 
```
- **Utility Types** :point_left:
  - type mytype = `Partial<T>` / `Required<T>`  : all properties of T to **optional /required**
  - type mytype = `Readonly<T>` : all properties of Type set to **readonly**.
  - type mytype = `Pick<T> / omit<T>`
  - type mytype = `Record<K,T>`
  - type mytype = `ReturnType<() => string>`
  - type mytype = `NonNullable<T>`
  - ...
  - so basically, source type : T,K || target type : mytype
  - mpre: https://chat.deepseek.com/a/chat/s/3c19b702-9118-49ed-9599-35975a1fbef5
  
- **Index signature** :point_left:
```typescript
interface MyObject {
  [propName: string]: any; // Index signature
}

const obj: MyObject = {
  name: "Alice", // OK (string)
  age: 30,       // OK (number)
  isAdmin: true, // OK (boolean)
  someMethod() { return 42; } // OK (function)
};

// ----
interface MyObject {
  [propName: Class1]: any; // INVALID : can only have keys of type string, number, or symbol
}
```



