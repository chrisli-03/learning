##### Solution

Use a pointer to point to first element equal to value, iterate the array, move each element not equal to value to pointer, move pointer forward. Repeat for all elements.

##### Code

```javascript
var removeElement = function(nums, val) {
    var p = 0
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[p] = nums[i]
            p++
        }
    }
    for (var i = p; i < nums.length; i++) {
        nums[i] = val
    }
    return p
};
```

