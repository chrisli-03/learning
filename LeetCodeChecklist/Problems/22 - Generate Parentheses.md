##### Solution

BFS

##### Code

```javascript
var generateParenthesis = function(n) {
    let res = []
    helper(n, 0, 0, res, '')
    return res
};

var helper = function(n, used, closed, acc, cur) {
    if (used < n)
        helper(n, used+1, closed, acc, cur+'(')
    if (used > closed) 
        helper(n, used, closed+1, acc, cur+')')
    if (n*2 === used + closed)
        acc.push(cur)
}
```

