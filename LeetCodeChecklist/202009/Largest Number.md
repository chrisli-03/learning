##### Solution

Sort array by comparing the number the two elements make up

##### Code

```javascript
var largestNumber = function(nums) {
    nums.sort((a, b) => {
        a = a.toString()
        b = b.toString()
        return Number(b+a) - Number(a+b)
    })
    return nums.join('').replace(/^0+$/g, '0')
};
```

