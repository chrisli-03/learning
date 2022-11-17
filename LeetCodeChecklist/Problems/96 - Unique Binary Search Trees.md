##### Solution

Dynamic programming, get the number of unique binary trees for length 1, then 2, then 3, etc.

##### Code

```javascript
var numTrees = function(n) {
    const arr = new Array(n+1).fill(0)
    arr[0] = 1
    arr[1] = 1
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            arr[i] += arr[j-1] * arr[i-j]
        }
    }
    return arr[n]
};
```

