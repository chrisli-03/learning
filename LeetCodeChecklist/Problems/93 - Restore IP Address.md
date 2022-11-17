##### Solution

Find all valid entries for first integer, then for each valid first integer, find all valid second integer, and etc.

##### Code

```javascript
var restoreIpAddresses = function(s) {
    const arr = s.split('')
    const queue = [[[], 0]]
    const res = []
    while(queue.length > 0) {
        const [cur, remaining] = queue.pop()
        if (cur.length === 4) {
            if (remaining > arr.length-1) {
                res.push(cur.join('.'))
            }
            continue
        }
        let n = arr[remaining]
        let i = 1
        while (Number(n) <= 255 && (n === '0' || /^[1-9]/.test(n))) {
            const temp = cur.slice()
            temp.push(n)
            queue.push([temp, remaining+i])
            n = n + arr[remaining+i++]
        }
    }
    return res
};
```

