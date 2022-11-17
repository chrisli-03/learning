##### Solution

Split, reverse then flip the sign.

Only thing to watch out for is out of bound numbers.

###### Code

```javascript
var reverse = function(x) {
    var n = Math.abs(x)
    var sign = x < 0 ? -1 : 1
    var ans = sign * ('' + n).split('').reverse().join('')
    return ans < -(2**31) || ans > 2**31-1 ? 0 : ans
};
```

