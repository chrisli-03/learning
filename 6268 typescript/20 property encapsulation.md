object properties can be changed freely in javascript, which may cause issue
```
class Person {
    age: number;

    constructor(age: number) {
        this.age = age;
    }
}

const person = new Person(10);
person.name = -10; // while this works and is the correct type, age should not be negative and this can potentially cause error in the program
```

in typescript you can use keyword `public`/`private` to change if the property is accessible outside of the class, public is used as default
its also a convention to use _ before private property name
```
class Person {
    private _age: number;

    constructor(age: number) {
        this._age = age;
    }
}

const person = new Person(10);
person._age = -10; // error, because age is private
```

to access private properties, a common method is to use a getter&setter function
the benefit of having a setter function is we can validate the value before setting
```
class Person {
    private _age: number;
    
    constructor(age: number) {
        this._age = age;
    }

    getAge() {
        return this._age;
    }

    setAge(age) {
        if (age < 0) { // throw error if age is invalid
            throw new Error('invalid age');
        }
        this._age = age;
    }
}

const person = new Person(10);
console.log(person._age); // error
console.log(person.getAge()); // ok
person._age = 15; // error
person.setAge(15); // ok
person.setAge(-10); // error
```

in typescript there is a syntax for getter and setter, and you can use it like a normal property instead of a function
```
class Person {
    private _age: number;

    constructor(age: number) {
        this._age = age;
    }

    get age() {
        return this._age;
    }

    set age(age: number) {
        if (age < 0) { // throw error if age is invalid
            throw new Error('invalid age');
        }
        this._age = age;
    }
}

const person = new Person(10);
console.log(person.age); // 10
person.age = 15; // ok
console.log(person.age); // 15
```

however when a property is private, its not accessible in child class that extends from it, for a property to be accessible in child class but not public, use `protected` keyword
```
class A {
    private numA: number;
    protected numB: number;
}

class B extends A {
    foo() {
        console.log(this.numA); // error
        console.log(this.numB); // ok
    }
}
```

you can also set keyword in constructor
```
class C {
    constructor(private age, protected name) {
        // ...
    }
}
```
