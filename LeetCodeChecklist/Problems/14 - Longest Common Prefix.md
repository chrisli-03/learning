##### Solution

Iterate the first character of all strings, then second character, then third character, etc.

##### Code

```javascript
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';
    else if (strs.length === 1) return strs[0];
    let prefix = '';
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (!(strs[j][i] === strs[0][i]) || (strs[j].length === i)) {
                return prefix;
            }
        }
        prefix += strs[0][i];
    }
    return prefix;
};
```

