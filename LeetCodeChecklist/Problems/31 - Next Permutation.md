##### Solution

Brute force

##### Code

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let i = nums.length-1
    while (i > 0) {
        if (nums[i] > nums[i-1]) {
            let swap = nums.reduce((acc, n, j) => {
                if (j >= i && n > nums[i-1]) {
                    return n > nums[acc] ? acc : j
                }
                else return acc
            }, i)
            const temp = nums[swap]
            nums[swap] = nums[i-1]
            nums[i-1] = temp
            break
        }
        i--
    }
    for (let j = nums.length-1; j >= i; j--) {
        for (let k = j-1; k >= i; k--) {
            [nums[j], nums[k]] = [nums[k], nums[j]]
        }
    }
    return
};
```

