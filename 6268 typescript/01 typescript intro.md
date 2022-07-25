because javascript is untyped, it has several problems
- error prone
- high maintenance cost  

which makes javascript not very good for building scalable applications

for example you could have variable a which is a number, and you expect it to be a number, but somewhere in the code it could be changed to a string, resulting in an error
```
    let a = 10;
    // ...
    a = 'hello world'
    // ...
    let b = a + 1; // error
```
the larger the application is, the harder it is to track this kind of error  

what is typescript? typescript is a superset of javascript, it adds typing on top of javascript

this solves many issues like the one mentioned above, if a variable is assigned a type an error will be thrown during compile if it is changed to another type, this reduces the maintainance cost segnificantly

typescript cannot be parsed by javascript parser, there for it must be compiled to javascript first, then parsed as javascript

why don't we parse typescript directly? it requires too much alteration to browsers and javascript engine, it may or maynot be supported natively in the future

to lower the learning curve for typescript, typescript fully supports javascript, you can also use plain javascript in typescript

what does typescript provide?
- types
- interface
- decorator
- configurable
- polyfill
- typing hint on ide