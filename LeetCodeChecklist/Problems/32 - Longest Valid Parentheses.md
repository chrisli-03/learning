##### Solution

Traverse from left to right, then right to left counting open and close parentheses, reset if invalid.

##### Code

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let left = 0, right = 0
    let res = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            left++
        } else {
            right++
        }
        if (left === right) {
            res = Math.max(res, left*2)
        } else if (right > left) {
            left = 0
            right = 0
        }
    }
    left = 0
    right = 0
    for (let i = s.length-1; i >= 0; i--) {
        if (s[i] === '(') {
            left++
        } else {
            right++
        }
        if (left === right) {
            res = Math.max(res, left*2)
        } else if (left > right) {
            left = 0
            right = 0
        }
    }
    return res
}
```

