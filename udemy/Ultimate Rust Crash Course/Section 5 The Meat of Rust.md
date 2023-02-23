##### Structs

use `struct` keyword to create a struct

```rust
struct Foo {
    a: bool,
    b: u8,
}

// instanciating a struct, need specify a value to every field
let bar = Foo {
    a: true,
    b: 1,
};
```

typically you would create a constructor to create struct with default values, methods and associated functions are defined in an implementation using `impl` keyword

```
impl Foo {
    fn new() -> Self {
        Self {
            a: true,
            b: 1,
        }
    }
}

let bar = Foo::new();
bar.a;
bar.some_fn();
```

associated function doesn't have a form of self (eg. &self) as its first parameter, this is often called class methods in other languages.

associated function is often used as constructor

you can replace `Self` with the actual struct name, `Foo` in the top example

methods always take some form of self as their first argument (self, &self, &mut self)

rust has no struct (or class) inheritance, and use traits instead

##### Traits

traits are similar to interfaces in other languages

you can create a trait with the `trait` keyword, then add an implementation for a struct that has that trait, to do so you must implement the functions inside the trait

```rust
struct Cat {
    name: String,
}

trait Noisy {
    fn get_noise(&self) -> &str
}

impl Noisy for Cat {
    fn get_noise(&self) -> &str { "Meow" }
}
```

advantage compared to adding the function directly to `Cat` implementation is you can have generic functions that accepts any value that implements the trait

```rust
fn print_noise<T: Noisy>(item: T) {
    println!("{}", item.get_noise());
}
```

here you can pass any value that implements Noisy trait, like Cat, or anything else

special trait `Copy`, if a type implements Copy, then it is copied instead of moved in move situations, simple primitive types like integer. float, boolean, implements Copy, type using heap cannot impement Copy

Traits implements inheritance, so a trait can inherit another trait

if you define a implementation in trait, you dont have to do it in the implementation

```rust
trait Run {
    fn run(&self) {
        println!("I'm running!");
    }
}

struct Cat {}
impl Run for Cat{}

fn main() {
    let cat = Cat {};
    cat.run();
}
```

you cannot add fields in traits, instead you can add getter&setter

##### Collections

Vector - `Vec<T>` holds a list of variables of one type

```rust
let mut v: Vec<i32> = Vec::new();
v.push(2);
v.push(4);
v.push(6);
let x = v.pop();
println!("{}", v[1]);
```

create vector from literal values with `vec!` eg. `let mut v = vec![2,4,6];`

Hash Map - `HashMap<K, V>`

```rust
let mut h: HashMap<u8, bool> = HashMap::new();
h.insert(5, true);
h.insert(6, false);
let have_five = h.remove(&5).unwrap();
```

other collections like VecDeque, LinkedList, HashSet, BinaryHeap (like priority queue), BTreeMap, BTreeSet

##### Enums

specify enum with `enum` keyword

```rust
enum Color {
    Red,
    Blue,
    Yellow,
}
let red = Color::Red;
```

data types enum can have

```rust
enum DispenserItem {
    Empty,
    Ammo(u8),
    Things(String, i32),
    Place {x: i32, y: i32},
}
use DispenserItem::*;
let item = Empty;
let item2 = Ammo(32);
let item3 = Things("hat".to_string(), 2);
let item4 = Place { x:32, y:15 };

// implement functions and methods for enum
impl DispenserItem {
    fn dispaly(&self) {}
}

// using generic
enum Option<T> {
    Some(T),
    None,
}
```

Often used enums are `Option` and `Result`

example of Result

```rust
use std::fs::File;

fn main() {
    // if you dont use res, compile will throw an error
    let res = File::open("foo");
    if res.is_ok() {
        let f = res.unwrap();
    }
}
```

alternatively to using if res.is_ok(), you can use a full pattern matching

```rust
```rust
use std::fs::File;

fn main() {
    // if you dont use res, compile will throw an error
    let res = File::open("foo");
    match res {
        Ok(f) => { /* do stuff */ },
        Err(e) => { /* do stuff */ },
    }
}
```
```

in pattern matching `_` means all cases, usually used as default case or else case

match is kind of like switch in other languages
