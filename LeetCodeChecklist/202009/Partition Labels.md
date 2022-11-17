##### Solution

Iterate the list, merge the first appearance of a character with the last appearance of that character.

##### Code

```javascript
/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    const arr = S.split('').map((_, i) => i)
    for (let i = 0; i < S.length; i++) {
        let char = S[i]
        for (let j = S.length-1; j > i; j--) {
            if (S[j] === S[i]) {
                for (let k = i; k <= j; k++) {
                    arr[k] = arr[i]
                }
                break
            }
        }
    }
    const res = []
    let prev = -1
    for (let i = 0; i < arr.length; i++) {
        if (prev !== arr[i]) {
            res.push(1)
        } else {
            res[res.length-1]++
        }
        prev = arr[i]
    }
    return res
};
```

