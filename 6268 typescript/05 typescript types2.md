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

declaring array type
```
// string[] means type array and all elements inside are type string
let foo: string[];
foo = ['string1', 'string2']; // ok
foo = [1, 2, 3]; // error, elements must be type number

let foo: Array<number>; // same as above, different syntax
```

declaring tuple type
a tuple is an array of fixed length
```
// arr with element 1 as type string, and element 2 as type string
let foo: [string, string];
foo = ['string1', 'string2']; // ok
foo = ['string']; // error, no second element
foo = ['string', 1]; // error, second element must be type string
```

declaring enum type
```
enum Gender {
    male = 0, // typescript can assign the value automatically, so the `= 0` and `= 1` are optional
    female = 1
} 

let foo: {name: string, gender: Gender};
foo = { name: 'my name', gender: Gender.male };
console.log(foo.gender === Gender.male);
```

intersection type
like creating union with |, you can create intersection with &
```
// this means foo must have name with type string and age with type number
let foo: { name: string } & { age: number }
foo = { name: 'my name', age: 10 }; // ok
foo = { name: 'my name' }; // error, missing age
```

type aliases
you can create aliase for a type and reuse it
```
type Person = {
    name: string,
    age: number
}

let foo: Person;
foo = { name: 'my name', age: 10 }; // ok
foo = { name: 'my name' }; // error, missing age
let bar: Person;
let baz: Person;
// ...
```
