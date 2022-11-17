#### ZigZag Conversion

###### Solution

Visit the characters in the same order as reading the ZigZag pattern.

Visit all characters in row 0, then row 1, then row 2, etc.

For all number k,

Characters in row `0` are located at indexes `k (2 * numRows - 2)`

Characters in row `numRows-1` are located at indexes `k (2 * numRows - 2) + numRows - 1`

Characters in inner row `i` are located at indexes `k (2 * numRows - 2) + i and (k + 1)(2 * numRows - 2) - i`

###### Code

```javascript
var convert = function(s, numRows) {
    if (numRows === 1) return s
    let ret = ''
    let n = s.length
    let cycleLen = 2 * numRows - 2
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j + i < n; j+= cycleLen) {
            ret = ret + s[j+i]
            if (i !== 0 && i !== numRows-1 && j+cycleLen-i < n) {
                ret = ret + s[j+cycleLen-i]
            }
        }
    }
    return ret
};
```

