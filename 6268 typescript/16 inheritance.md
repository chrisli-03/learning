a class can inherit another parent class, the child class can use properties and methods from the parent class, this is a way to extract repetition from classes
child class can add its own properties and methods not in parent class
child class can also override the methods inherited from parent class
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

// this means class Dog inherits class Animal
class Dog extends Animal {
    bark() {
        console.log('woof');
    }
}

const dog1 = new Dog('dog 1');
console.log(dog1.sayHello()); // hi im dog 1, this works because although class Dog doesn't have this method, but sayHello is a method from parent class Animal
console.log(dog1.bark()); // woof, this is the method from class Dog

class Cat extends Animal {
    sayHello() {
        console.log(`meow im ${this.name}`);
    }
}
const cat1 = new Cat('cat 1');
console.log(cat1.sayHello()); // meow im cat 1, the method in class Cat is used instead of class Animal, this will not affect the output for sibling class Dog
```