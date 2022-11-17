##### Solution

Find the largest multiple of divisor lower than dividend by multiplying divisor by 2 each time, subtract it from dividend, repeat until dividend is smaller than divisor.

##### Code

```javascript
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    var res = 0
    var sign = -1
    if ((dividend < 0 && divisor < 0) || (dividend > 0 && divisor > 0)) {
        sign = 1
    }
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
    while (dividend >= divisor) {
        var temp = divisor
        var i = 0
        while (temp + temp <= dividend) {
            temp = temp + temp
            i++
        }
        dividend = dividend - temp
        res += 1 << i
    }
    if (res === -2147483648) return sign < 0 ? -2147483648 : 2147483647
    return sign < 0 ? 0 - res : res
};
```

