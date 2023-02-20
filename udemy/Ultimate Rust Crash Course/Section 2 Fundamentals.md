##### Getting started

cargo - package manager for rust, similar to npm for nodejs

create a new rust project with `cargo new {project name}` command

rust config files use `.toml` extension, which stands for tom's obvious minimal language

rust source files use `.rs` extension

build and run rust project with `cargo run` command

compile without debug with `cargo run --release` command

default compile output directory is `target`, version control software like git should ignore this folder

##### Variables

declare variable with `let` keyword similar to javascript, variables in rust are strong typed, but you can ignore typing and let compiler figure it out automatically, or you can manually add typing with `:`

eg. `let num = 1;` or `let num: i32 = 1;`

variables by default are immutable (or constant), this helps improve safety, concurrency, and speed, to make variables mutable you should add `mut` keyword after `let`

eg. `let mut num = 1;`, then you can change it like `num = 2;`

declare constant variable with `const` keyword also similar to javascript, and there are some requirements for constant variable

1. convension is to use screaming snake case for constant variable name

2. type must be manually added, cannot ignore it like with `let`

3. the value must be a constant expression that can be determined at compile time

eg. `const SOME_CONSTANT: i32 = 1`

scoping in rust is similar to rust, create block scope with `{}`, variable in inner block overwrites varaible in the outer scope, this is called shadowing, you can also shadow variables in the same scope

```rust
fn main() {
    let mut x = 5; // creates mutable x
    let x = x; // this makes x immutable again
}
```

you can also shadow a variable to a different type inside the same scope

```rust
fn main() {
    let meme = "some string"; // string
    let meme = make_image(meme); // image
}
```

rust guarantees memory safety at compile time, this piece of code will throw and error during compile because foo is not assigned a value yet

```rust
fn main() {
    let foo: i32;
    println!("{}", foo);
}
```

even if you assign a value to foo inside a `if true` statement it still won't work, because conditional evaluation is handled at runtime, so it is not guaranteed at compile time, so this piece of code won't work

```rust
fn main() {
    let foo: i32;
    if true {
        foo = 1;
    }
    println!("{}", foo);
}
```

but it will work if you add an `else` statement, compiler knows this is safe and it can compile

```rust
fn main() {
    let foo: i32;
    if true {
        foo = 1;
    } else {
        foo = 2;
    }
    println!("{}", foo);
}
```

##### Functions

create functions with `fn` keyword, functions are hoisted to top like javascript, which means they dont have to appear before they are used, you specify the return type after the parameters with `->`

eg.

```rust
fn foo(a: f64, b: f64) -> f64 {
    return a * b;
}
```

you can leave out the semicolon on the last line and it will be treated as a return, this is called tail expression. eg. `{return a * b;}` is same as `{a * b}`

micros like `println!` always end in exclaimation mark

##### Module

in a project `hello`, `main.rs` is a special file that will be the hello binary, `lib.rs` is a special file that will be the root of hello library

everything in lib is private by default, use `pub` keyword to make it public

lib.rs

```rust
pub fn greet() {
    println!("hello world");
}
```

main.rs

```
fn main() {
    hello::greet();
}
```

`use` keyword is for importing something from library, without need to write absolute path everytime

main.rs

```rust
use hello::greet;

fn main() {
    greet();
}
```

the standard library std is imported by default

the name `crate` is same as `package` in other packages

you can add other packages to your project by adding them under `[dependencies]` in `Cargo.toml` file
