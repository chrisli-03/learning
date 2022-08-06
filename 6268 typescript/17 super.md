the keyword `super` is similar to `this`, this is a reference to the object itself, super is a reference to the parent class
if the child class has its own constructor, it must call `super()` inside the constructor
```
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHello() {
        console.log(`hi im ${this.name}`);
    }
}

class Dog {
    legs: number;

    constructor(name: string, legs: number) {
        super(name); // mandatory, calling constructor of parent class
        this.legs = number;
    }

    sayHello() {
        super.sayHello(); // calls the sayHello method in parent class
        console.log(`i have ${this.legs} legs`);
    }
}

const dog = new Dog('dog 1', 4);
dog.sayHello(); // hi im dog 1 i have 4 legs, the first part is from sayHello of Animal class, the second part is from sayHello of Dog class
```