##### Solution

Trim end spaces, split by space, pop last word

##### Code

```javascript
var lengthOfLastWord = function(s) {
    return s.trim().split(' ').pop().length
};
```

