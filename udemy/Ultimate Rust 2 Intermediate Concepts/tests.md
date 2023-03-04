##### Unit Test

test for small piece of code

tests are usually a submodule in the same file at the end of a file with `#[cfg(test)]`

```rust
pub fn snuggle(bunnies: u128) -> u128 {
    bunnies * 8
}

#[cfg(test)]
mod test {
    use super::*; // this imports everything in the file
    
    #[test] // test attribute, tells cargo to run this during test
    fn snuggling_bunnies_multiply() {
        assert_eq!(snuggle(2), 16);
    }
}
```

 3 assert macros: `assert_eq!`, `assert_ne!`, `assert!`

`panic!` will fail the test unless test is marked with `#[should_panic]` attribute

command to run test is `cargo test test:bunny_result`

Definition

1. crate = package

2. crate = a library or binary

you can also specify which test to run with `cargo test 

##### Doc Test

doc-tests are typically in the form of documented examples, usually in the example section above actual code, between triple backticks

```rust
/// # Example
///
/// ```
/// # use hello::snuggle; // this is necessary for test to run but not displayed in documentation
/// let bunnies = sunngle(5);
/// assert_eq!(bunnies, 40);
/// ```
pub fn snuggle(bunnies: u128) -> u128 {
    bunnies * 8
}
```

##### Integration Test

integration tests are put inside a test folder

integration tests are usually test of multiple components together

the convension is to put everything you can in library and as little as possible in binary, so binary is small enough and no need to be tested

##### Benchmarks

built in benchmark for rust is not fully completed, convension is to use Criterion

you can create bench in Cargo.toml

```
[[bench]]
name = "snuggle_speed"
harness = false
```

the double `[` indicate there can be multiple of this tag

benchmark files are usually put inside bench folder

```rust
use criterion::{black_box, criterion_group, criterion_main, Criterion};
use hello:snuggle;

pub fn snuggle_benchmark(c: &mut Criterion) {
    c.bench_function("snuggle 2", |b| b.iter(|| snuggle(black_box(2))));
}

criterion_group!(benches, snuggle_benchmark);
criterion_main!(benches);
```

the command to run benchmark is `cargo bench`


