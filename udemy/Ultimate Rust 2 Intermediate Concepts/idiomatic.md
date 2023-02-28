##### rustfmt

rustfmt (rust format) formats your code for you

command is `cargo fmt`

rustfmt will not add new lines, but it will collapse multi-lines

customize rustfmt in `.rustfmt.toml` file

##### clippy

command `cargo clippy` will check and compile your code

1. style

this code compiles but it is not idiomatic because of the redundant return statement

```rust
fn number() -> i32 {
    return 5;
}
```

this code is

```rust
fn number() -> i32 {
    5
}
```

2. correctness

this code compiles but it is useless, so clippy will give you a warning

```rust
loop {
    break;
}
```

3. complexity

clippy can guess if your code is too complex, like unnecessary brackets

```rust
let x = (5);
```

but if you know it is fine then you can tell clippy to ignore it using

`#[allow(clippy::too_many_arugments)]`

the text in bracket after allow depends on the warning you got

4. performance

clippy will warn you if it knows there is a better performance

this code that calculates the length of a vector

`let len = iterator.clone().collect::<Vec<i32>>().len();`

has a much faster way of doing it without cloning

`let len = iterator.len()`


