## Strong typing
- arr :Array<number> = [1,2,3]
- **symbol** from ES6+
- **never** : type with no possible values. scenarios:
```typescript
function throwError(message: string): never {  throw new Error(message);}
function infiniteLoop(): never {  while (true) {}}
const emptyArray: never[] = []; // You can't push anything into it:
type Impossible = string & number;
```

- **tuple** : heterogeneous array - fixed or vary size
- **Type aliases**
  - type mytype = "abc" | "xyx"
  - type mytype = String | number  // OR, **UNION**
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
    - more: https://chat.deepseek.com/a/chat/s/3c19b702-9118-49ed-9599-35975a1fbef5
  
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



