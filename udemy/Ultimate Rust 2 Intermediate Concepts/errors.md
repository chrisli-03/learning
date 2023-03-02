Error should be enum

eg

```rust
pub enum PuzzleError {
    WontFit(u16),
    MissingPiece,
}
```

Group errors as variants of as few enums as makes sense, eg. standard error and int error

You should only return error from your library not external dependencies

Enum should be non exhaustive (with `#[non_exhaustive]`)

Implement Debug, Display, Error in this order

instead of implementing everything there are packages like `thiserror` that help you create error more easily

`?` is the try block in rust, if you do `let foo = bar()?` foo is either the value returned from bar() or the error throwed during execution


