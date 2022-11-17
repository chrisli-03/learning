##### Solution

BFS

##### Code

```javascript
var map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
}
var letterCombinations = function(digits) {
    if (digits.length === 0) return []
    var res = ['']
    for (var i = 0; i < digits.length; i++) {
        var char = digits[i]
        var newRes = []
        for (var j = 0; j < res.length; j++) {
            var str = res[j]
            for (var k = 0; k < map[char].length; k++) {
                newRes.push(str + map[char][k])
            }
        }
        res = newRes
    }
    return res
};
```

