##### Solution

List all possible numbers with sequential digits, pick numbers with in range.

##### Code

```javascript
var sequentialDigits = function(low, high) {
    const startDigits = low.toString().length
    const endDigits = high.toString().length
    const res = []
    const digits = '123456789'
    outer: for (let i = startDigits; i <= endDigits; i++) {
        for (let j = 0; j <= digits.length - i; j++) {
            const n = Number(digits.substring(j, j + i))
            if (n >= low && n <= high) res.push(n)
            else if (n > high) break outer
        }
    }
    return res
};
```

