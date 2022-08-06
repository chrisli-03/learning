a class is like a template for objects, it defines what data and methods an object has
syntax for class in typescript
```
class {className} {
    {propertyName}: {propertyType}
    
    constructor({paramName}: {paramType}) {
        this.{paramName} = {paramName}
    }

    {methodName}() {
        // ...
    }
}
```

example of a class in typescript
```
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`hello, my name is ${this.name}`);
    }
}
```

static keyword makes a property or method part of the class instead of the object created
```
class Foo {
    static bar: string = 'baz';
    static method() {
        //...
    }
}

const obj = new Foo();
console.log(obj.bar); // undefined
console.log(Foo.bar); // baz
```

readonly keyword makes a property unmodifiable (like const, cannot assign another value)
```
class Foo {
    readonly bar: string = 'baz';
}

const obj = new Foo();
obj.bar = 'another value'; // error
```