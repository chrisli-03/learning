##### Iterator Adaptors

eg. map, filter

```rust
let v = vec![6, 7, 8];

let total: i32 = v
    .into_iter() //6, 7, 8
    .map(|x: i32| x * 3) // 18, 21, 24
    .filter(|y: &i32| *y % 2 == 0) // 18, 24
```

##### Iterator Consumers

iterators don't do anything unless consumed

eg. for_each, sum

```rust
let v = vec![6, 7, 8];

v.into_iter() //6, 7, 8
    .map(|x: i32| x * 3) // 18, 21, 24
    .filter(|y: &i32| *y % 2 == 0) // 18, 24
    .for_each(|z| println!("{}", z));
```

##### Turbofish

`::<>` is used to specify the type of the generic parameter or parameters for a generic function or method, it goes between the function name and parameters

eg. for a generic function `.sum`  it would look like this `.sum::<i32>()`

##### .collect()

`.collect()` is another iterator consumer that returns a collection (iterator -> vector), it is also generic but it already knows type of individual items and only need to know type of container, so you can use `_`  to indicate type of items

```rust
let v = vec![6, 7, 8];

let v2: Vec<_> = v
    .into_iter() //6, 7, 8
    .map(|x: i32| x * 3) // 18, 21, 24
    .filter(|y: &i32| *y % 2 == 0) // 18, 24
    .collect::<Vec<_>>();
```

##### Some common iterators

`v.into_iter()` -> `for _ in v`  takes ownership

`v.iter()` -> `for _ in &v`  borrows reference only

`v.iter_mut()` -> `for _in &mut v`  borrows mutable reference (edit inplace)

##### drain()

the `drain()` method takes ownership of some or all items in the collection, remove them from the original collection and allowing you to continue to use the original collection

`v.drain(..)` the two dots indicate you want to drain all items


