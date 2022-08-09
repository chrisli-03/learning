an abstract class is only meant to be used to extend by other classes, not create objects
create abstract class with `abstract` keyword
```
abstract class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const animal = new Animal('dog'); // error
```

abstract class also has abstract method, abstract method do not have actually implementation and should be override by child class
create abstract method with `abstract` keyword
```
abstract class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract sayHello: void;
}

class Dog extends Animal {

}

const dog = new Dog('dog');
dog.sayHello(); // error, although parent class has abstract method sayHello, but its not override in Dog class
```