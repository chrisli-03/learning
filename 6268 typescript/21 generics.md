generic can be used to a undecided type so a function/class can work over a varierty of types rather than a single one
```
function fn<Type>(a: Type): Type {
    return a;
}

// both are ok
let foo = fn<string>('hello');
let bar = fn<number>(10);
```

you can also have multiple generics
```
function fn<T, K>(a: T, b: K): T {
    console.log(b);
    return b;
}
let foo = fn<number, string>(10, 'hello');
```

you can also have generic extends from an interface
```
interface Interface {
    length: number;
}

function fn<T extends Interface>(a: T): number {
    return a.length;
}

let foo = fn<number>(10); // this will fail because number does not have length property
let bar = fn<string>('hello'); // this works because string has length property
```

using generic with class
```
class MyClass<T> {
    name: T;
    constructor(name: T) {
        this.name = name;
    }
}

const foo = new MyClass<string>('my name');
```