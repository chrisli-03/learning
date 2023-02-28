##### doc

command for generating a document is

`cargo doc`

or

`cargo doc --no-deps --open`

--no-deps generates only your code without the dependencies

--open will open your doc in browser after it is generated

##### line comments

documentation comment starts with 3 slashes `///`

only the first line is shown on the main page, the other lines are shown when you click on it and redirect to detail page

##### block comments

block comment starts with `/**` and end with `**/`

##### links

links start with [\` and ends with ]\`

for example [\`PUZZLE_PIECIES\`] gives a link to PUZZLE_PIECES

the backticks are optional but it gives you a monospace font

if the link is not in scope you can use an absolute path to it like `[Spawn a thread](std::thread::spawn)`

##### inner comments

inner line comments start with `//!`

inner block comments start with `/*!` and end with `!*/`

##### struct

fields for a struct are commented individually

```rust
/// this is a puzzle
pub struct Puzzle {
    /// number of pieces
    pub num_pieces: u32,
    /// descriptive name
    pub name: String,
}
```

##### impl

impl are not usually documented because it would be documented already in struct

functions inside impl should still be documented


