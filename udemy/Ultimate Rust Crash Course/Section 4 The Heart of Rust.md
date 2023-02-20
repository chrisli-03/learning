##### Ownership

ownership is why rust is memory safe

3 rules

1. each value has an owner

2. only one owner

3. value gets dropped if its owner goes out of scope

```rust
let s1 = String::from("abc");
let s2 = s1; // s1's pointer to heap gets unassigned
println!("{}", s1); // error
```

when copying data only on stack, the method is `copy()`, when copying data involving heap, the method is `clone()`

##### References & Borrowing

`&` referes to a reference

```rust
let s1 = String::from("foo");
do_stuff(&s1);

// do_stuff borrows a reference to the value instead of taking ownership
// after function terminates the reference gets dropped instead of the value
fn do_stuff(s: &String) { ... } 
```

the compiler won't let you create a reference that out lives the value

the syntax for mutable reference is `&mut ` eg. `fn do_stuff(s: &mut String)`

at anytime, you can have *one* mutable reference or many immutable reference


