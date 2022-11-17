##### Solution

Keep reducing number from largest roman number to lowest.

##### Code

```javascript
let roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
let ints = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
var intToRoman = function(num) {
    let res = '';
    for (let i = ints.length-1; i >= 0; i--) {
        let curNum = ints[i];
        while (num >= curNum) {
            num -= curNum;
            res += roman[i];
        }
    }
    return res;
};
```

