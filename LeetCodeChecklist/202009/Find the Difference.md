##### Solution

Count every character in t using an object, then for each character in s reduce the count, if count is 0 remove that key, the last key remaining is the solution.

##### Code

```javascript
var findTheDifference = function(s, t) {
    const map = {}
    Array.prototype.forEach.call(t, char => {
        if (!map[char]) {
            map[char] = 1
        } else {
            map[char]++
        }
    })
    Array.prototype.forEach.call(s, char => {
        map[char]--
        if (map[char] === 0) delete map[char]
    })
    return Object.keys(map)[0]
};
```

