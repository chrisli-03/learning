##### Solution

Simple iteration

##### Code

```javascript
var romanToInt = function(s) {
    let p = 0, res = 0
    while (p < s.length) {
        switch(s[p]) {
            case 'M':
                res += 1000
                break
            case 'D':
                res += 500
                break
            case 'C':
                if (p + 1 < s.length && s[p+1] === 'M') {
                    res += 900
                    p++
                } else if (p + 1 < s.length && s[p+1] === 'D') {
                    res += 400
                    p++
                } else {
                    res += 100
                }
                break
            case 'L':
                res += 50
                break
            case 'X':
                if (p + 1 < s.length && s[p+1] === 'C') {
                    res += 90
                    p++
                } else if (p + 1 < s.length && s[p+1] === 'L') {
                    res += 40
                    p++
                } else {
                    res += 10
                }
                break
            case 'V':
                res += 5
                break
            case 'I':
                if (p + 1 < s.length && s[p+1] === 'X') {
                    res += 9
                    p++
                } else if (p + 1 < s.length && s[p+1] === 'V') {
                    res += 4
                    p++
                } else {
                    res += 1
                }
                break
        }
        p++
    }
    return res
};
```

