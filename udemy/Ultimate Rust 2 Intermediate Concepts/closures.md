##### What is a closure

closure is an anonymous function that can borrow or capture data from the scope it is nested in

##### Syntax

`|params| expr`

`|params| { expr1 ; expr2 }`

##### Move

use `move` keyword to make closure take ownership of a value instead of borrowing a reference

```rust
let str = "some string";

let f = move || {
    println!("{}", str);
}

f(); // prints some string
```

note that str will not be accessible anymore because it no longer has ownership


