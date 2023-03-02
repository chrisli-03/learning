##### Derivable Traits

 `Debug`

if everything in your struct or enum is Debug then you can derive using `#[derive(Debug)]`

 `Clone`

if everything in your struct or enum is Clone then you can derive using similar `[derive(Clone)]`

```rust
#[derive(Clone)]
pub struct Puzzle {
    pub num_pieces: u32,
    pub name: String,
}

// instances of Puzzle can now use .clone()
let puzzle2 = puzzle.clone();
```

`Copy`

struct or enum that implements copy will be copied instead of move

if a type uses the heap then it cannot be copied (eg. String)

Copy is a subtrait of Clone, so when you derive Copy you need to derive Clone as well

##### Implementable Traits

`Default`

default provides the default values for fields kind of like constructor does

```rust
impl Default for Puzzle {
    fn default() -> Self {
        Puzzle {
            num_pieces: PUZZLE_PIECES,
            name: "Forest Lake".to_string(),
        }
    }
}
```

the advantage of using default instead of a constructor is you can create an instance with some fields customized and rest using default

```rust
let puzzle = Puzzle {
    num_pieces: 3000,
    ..Default::default()
};
```

`PartialEq / Eq`

if a value is not equal to itself then a type cannot have Eq trait, eg. NaN is not equal to itself therefore floating type can only implement PartialEq trait

```rust
impl PartialEq for Puzzle {
    fn eq(&self, other: &Self) -> bool {
        (self.num_pieces == other.num_pieces) && (self.name == other.name)
    }
}
```

`From / Into`

if you implement From then you automatically get Into

`From<T> for U`, `Into<U> for T`

```rust
impl From<Puzzle> for String {
    fn from(puzzle: Puzzle) -> Self {
        puzzle.name
    }
}

let puzzle = Puzzle::default();
let t: String = puzzle.into();
```


