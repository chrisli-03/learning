##### Solution

Reverse the number and compare with original, if they are the same then it is a palindrome number.

Except for edge cases like negative numbers which are never palindrome number.

##### Code

```javascript
var isPalindrome = function(x) {
    // edge cases
    if (x < 0) return false;
    if (x < 10) return true;
    if (x % 10 === 0) return false;
    // reverse the number and compare with original
    let a = x, b = 0;
    while (a > 0) {
        b = b*10 + a%10;
        a = Math.floor(a/10);
    }
    return b === x;
};
```

