#### Search In Rotated Sorted Array II

Medium

###### Solution

Use regular binary search, but check if target should be in left array or right array first, if target is in left array and mid is pointing in right array, we treat value of mid as infinite to search the left array and vise versa.

###### Code

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    if (nums.length === 0) return false
    if (nums[0] === target) return true
    let start = 0, end = nums.length-1
    let left = nums[0] < target
    let first = 0, last = nums.length-1
    // binary search
    while (start < end) {
        let mid = Math.floor((start + end) >> 1)
        let val = nums[mid]
        if (val === nums[last]) { // mid equals last, cant draw conclusion, skip
            end--
            last--
            continue
        } else if (val === nums[first]) { // mid equals first, cant draw conclusion, skip
            start++
            first++
            continue
        }
        if (left && val < nums[first]) { // we know value is in left array and mid is in right array, treat as infinite to search left side
            val = Infinity
        } else if (!left && val > nums[last]) { // we know value is in right array and mid is in left array, treat as -infinite to search right side
            val = -Infinity
        }
        // typical binary search stuff
        if (val > target) {
            end = mid
        } else if (val < target) {
            start = mid+1
        } else {
            return true
        }
    }
    return nums[end] === target
};
```

