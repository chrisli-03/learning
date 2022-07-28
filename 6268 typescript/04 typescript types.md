available types
- number
- string
- boolean
- any (can be any type, usually frowned upon)
- a fixed value
- unknown (used if you don't know what the type is)
- void
- never
- object
- array
- tuple
- enum

you can create union type with vertical bar |
```
let a: 1 | 2; // a can be the number 1 or the number 2
a = 1; // ok
a = 2; // ok
a = 3; // the number 3 results in error

let b: number | string // b can be either number or string
b = 1; // ok
b = 'string'; // ok
b = true; // boolean results in error
```

type any is a way to optout the typing
normally you should not use type any because it defeats the purpose of typescript
if you declare a variable without any type and value, it is defaulted to type any

if you don't know what the type of a variable is, you can use type unknown
difference between type any and type unknown is you can assign variable with type any to variables with other types
```
let anyVar: any;
anyVar = 'string';

let unknownVar: unknown;
unknownVar = 1;

let num: number;
num = anyVar; // ok
num = unknownVar; // error, even though the value of unknownVar is a number, but because of its type this will still output an error

// however you can still assign it after a type check
if (typeof unknownVar === 'number') {
    num = unknownVar; // ok
}
```

type assertion is a way to manually assign a type to a variable, following the above example
```
// type assertion
num = unknownVar as number;
num = <number>unknownVar;
```

type void is usually used for functions without a return
typescript can automatically detect function return type, functions without a return are default type void
```
function fn(): void {
    // ...    
}
```

type never is used for functions that never returns normally or ends
```
function fn(): never {
    throw new Error();
}
// or 
function fn(): never {
    while(true) {
        // ...
    }
}
```

type object is not very useful on its own since almost everything is javascript is object
```
let foo: object;
foo = {}; // ok
foo = function() {}; // ok
```

but you can assign types to the keys of an object
```
let foo: {name: string};
foo = {name: 'string'}; // ok
foo = {other: 'string'}; // error
foo = {name: 'string', age: 10}; // error, although it has name and correct type, but the extra age still causes error
```

optional type in object can be assigned with question mark ?
```
let foo: {name: string, age?: number}
foo = {name: 'string'}; // ok
foo = {name: 'string', age: 10}; // ok
```

allowing all other keys
```
// [propName: string] means the key needs to be a string, the any after means the value can be any type
let foo: {name: string, [propName: string]: any} // name with type string is required, other key value are all acepted
c = {name: 'string', a: 1, b: true} // ok
```

declaring function parameter types
```
// this means foo should be a function that accepts 2 parameters of type number, and returns a number
let foo: (a: number, b: number) => number;
```

