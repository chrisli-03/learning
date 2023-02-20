##### Scalar Types

###### integers

unsigned

u8, u16, u32, u64, u128, usize

signed

i8, i16, i32, i64, i128, isize

i32 is generally the fastest on all architectures even 64bit

not all architectures supports every size, a 16-bit microcontroller might only support size 8 and 16

###### floats

f32, f64

f64 can be slow on 32-bit architectures

IEEE-754 standards

underscores in number are ignored, `1_1` is the same as `11`

you can also suffix the literal with the type you want

```rust
let x: u16 = 5;
let y: f32 = 3.14;
// same as
let x = 5u16;
let y = 3.14f32;
// improve readability with underscore
let x = 5_u16;
let y = 3.14_f32;
```

useful if you want to pass it to a generic function that could accept multiple numeric types

###### boolean

bool, value can be true or false

###### character

char, 4 bytes or 32 bits

this makes array of characters usc-4 or utf-32 string

strings are utf-8 and characters are not, so strings do not use characters internally

most of the time you want to use a length 1 string instead of character

##### Compound Types

###### tuple

tuple store multiple values with *any* types

destructure

`let info: (u8, f64, i32) = (1, 3.3, 999)`

access single index use `.`

```rust
let info = (1, 3.3, 999);
let foo = info.0;
let bar = info.1;
let baz = info.2;
```

maximum arity (number of items) in a tuple is 12

###### array

array stores multiple values with the *same* type

you can set individual items in array with `,` or repeat them with `;`

type of array always use `;`

```rust
let arr: [u8; 3] = [0, 0, 0];
let arr2: [u8; 3] = [0; 3];
```

array has maximum length of 32

array live on stack by default and is fixed size, so normally you would use vector or slice of vector instead of array

##### Control Flow

###### if

unlike javascript, rust almost never coerce types

`if` is an expression not statement, statements dont return values, expressions do

so this code

```rust
if num == 5 {
    msg = "five";
} else {
    msg = "other";
}
```

is the same as

```rust
msg = if num == 5 {
    "five"
} else {
    "other"
};
```

`{}` is mandatory not optional like some other languages

if you use the value like in an assignment, you must add the `;` at the end

the types in all conditions must be the same

you can also replace ternary operators like `a ? b : c` to if `a { b } else { c }`

###### loop

loop works mostly like any other languages

unconditional loop is `loop {...}`

you can add labels to a loop similar to javascript

label begins with a single apostrophe `'`

```rust
'foo: loop {
    loop {
        loop {
            break 'foo;
        }
    }
}
```

continue is similar

conditional loop is `while foo() {...}` where foo() returns a boolean value

for loop iterates an iterator

`for num in [1, 2, 3].iter() {...}`

for loop with a range use `..` start is inclusive and end is exclusive

`for num in 0..50 {...}` is 0 to 49

if you use `..=` then the end is inclusive

`for num in 0..=50 {...}` is 0 to 50

##### Strings

two commonly used string types

1. borrowed string type `str`

2. string type `String`

a literal like "foo" is always a borrowed string slice

data in borrowed string slice cannot be modified, data in String can be modified

`"foo".to_string();` creates a String from a borrowed string slice, `String::from("foo");` does the same thing

borrowed string slice is pointer to some byte and a length

String is pointer to some byte, a length, and a capacity

borrowed string slice is like a subset of String

both are valid utf-8 by definition

cannot be indexed by character positions, `str[0]` doesn't work, this is because unicode scalars in utf-8 can be represented by 1, 2, 3 or 4 bytes, and unicode scalars can join together to make unicode graphemes, rust guarantees constant time operation which making indexing strings not possible


