#### Longest Substring Without Repeating Characters

###### Solution

Iterate the string, for each character check if the first index is the current index, if not then a duplicate is found, check if the previous substring is longer than previous, if yes use it as longest substring.

Repeat with the remaining substring.

###### Code

```javascript
var lengthOfLongestSubstring = function(s) {
    let max = start = 0, found;
    for (let i = 0; i < s.length; i++) {
        found = s.indexOf(s[i], start);
        if (found < i) {
            max = Math.max(i-start, max);
            start = found+1;
        }
    }
    // special case, last substring is solution
    if (found === s.length-1) {
        max = Math.max(s.length-start, max);
    }
    return max;
};
```

