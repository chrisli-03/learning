##### Closures

syntax `|x, y| { x + y }`

eg

```rust
let add = |x, y| { x + y };
add(1, 2); // returns 3
```

use in functional programming

```rust
let mut v = vec![2, 4, 6];
v.iter()
    .map(|x| x * 3)
    .filter(|x| *x > 10)
    .fold(0, |acc, x| acc + x)
```

normally closure will borrow a reference to the variable it uses, but you can also use `move` to let the closure take ownership of the variable, and the closure can live longer than the variable, and you can move the closure to another thread

```rust
let s = "str".to_string();
let f = move || {
    println!("{}", s);
}
f();
```

##### Threads

rust threading is portable, so it should work on all platforms

```rust
use std::thread;

fn main() {
    // thread::spawn takes a closure with no arguments
    // this closure is executed as the main function of the thread
    let handle = thread::spawn(move || {
        // do stuff in a child thread
    });

    // do stuff simultaneously in the main thread

    // wait until thread has exited
    handle.join().unwrap();
}
```

for file access or io waiting, use async/await


