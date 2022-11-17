#### Longest Palindromic Substring

###### Solution

Manacher's algorithm

###### Code

```javascript
var longestPalindrome = function(s) {
    let arr = preProcess(s).split('');
    let n = arr.length, p = [];
    let curPalindromeCenter = 0, curPalindromeBoundary = 0;
    arr.forEach((n, i) => {
        p[i] = curPalindromeBoundary > i ? Math.min(p[2*curPalindromeCenter - i], curPalindromeBoundary - i) : 0;
        while (arr[i+1+p[i]] === arr[i-1-p[i]]) p[i]++;
        if (i+p[i] > curPalindromeBoundary) {
 			curPalindromeBoundary = i + p[i];
            curPalindromeCenter = i;
        }
    });
    let maxLen = 0;
    let centerIndex = 0;
    for (let i = 1; i < n-1; i++) {
        if (p[i] > maxLen) {
            maxLen = p[i];
            centerIndex = i;
        }
    }
    let pos = Math.floor((centerIndex - 1 - maxLen)/2);
    return s.substring(pos, pos+maxLen);
};
function preProcess(s) {
    if (s === "") return "^$";
    return "^#" + s.split('').join('#') + "#$";
}
```

