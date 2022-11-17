##### Solution

Keep moving distinct elements to front.

##### Code

```javascript
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0
    let pointer = 1
    for (let i = 0; i < nums.length-1; i++) {
        if (nums[i] < nums[i+1]) nums[pointer++] = nums[i+1]
    }
    return pointer
};
```

