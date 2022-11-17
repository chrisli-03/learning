##### Solution

Use a stack to keep the expected bracket, for every open parentheses expect the corresponding close parentheses, for every close parentheses if it's expected (top of stack), pop it from stack.

If stack is empty after iterating string then it's valid else it's invalid.

##### Code

```javascript
var isValid = function(s) {
    let expectArr = []
    s = s.split('')
    for (let i = 0; i < s.length; i++) {
        const temp = s.shift()
        i--
        if (temp === '(') { expectArr.push(')') }
        else if (temp === '[') { expectArr.push(']') }
        else if (temp === '{') { expectArr.push('}') }
        else {
            const expect = expectArr.pop()
            if (temp !== expect) return false
        }
    }
    return expectArr.length === 0
};
```

