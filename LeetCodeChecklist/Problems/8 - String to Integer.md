##### Solution

use parse int, watch out for max and min.

##### Code

```javascript
const max = Math.pow(2, 31);
var myAtoi = function(str) {
    let result = parseInt(str);
    if (result != result) return 0; // check for NaN
    if (result > max-1) return max-1;
    else if (result < -max) return -max;
    return result;
};
```

