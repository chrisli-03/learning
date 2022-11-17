##### Solution

Keep reading with read4 until we have read at least n characters, then cut off extra characters

##### Code

```javascript
var solution = function(read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Number of characters to read
     * @return {number} The number of actual characters read
     */
    return function(buf, n) {
        const chars = []
        for (let i = 0; i < Math.ceil(n/4); i++) {
            const charsRead = read4(chars)
            for (let j = 0; j < charsRead; j++) {
                buf.push(chars[j])
            }
        }
        if (buf.length > n) buf.length = n
        return 4
    };
};
```

