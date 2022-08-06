constructor is a function that is called during object creation
the keyword `this` inside constructor is a reference to the object being created, and in non static methods it is a reference to the object calling the method
```
class Foo {
    prop: string;

    constructor(param: string) {
        this.prop = param; // this assigns param to the property prop of the object being created
    }
}

const obj1 = new Foo('im obj 1'); // you can think of this as calling the constructor inside class Foo
const obj2 = new Foo('im obj 2');
console.log(obj1.prop); // im obj 1
console.log(obj2.prop); // im obj 2
```