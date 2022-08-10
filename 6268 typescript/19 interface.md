an `interface` describes the structure of a class
it is similar to `type`, and you can use it to describe an object
unlike `type`, you can have multiple `interface` with the same name, it will behave as a union of all interfaces with that name
you can also add abstract function to interface
to use interface with class use `implements` keyword
```
interface MyInterface {
    name: string;
    age: number;
    sayHello() {};
}

class MyClass implements MyInterface {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHello() {
        console.log('hello');
    }
}
```