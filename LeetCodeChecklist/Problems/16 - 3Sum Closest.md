##### Solution

Sort array in ascending order, iterate through the array, for every element use 2 pointers to iterate the rest of the array, move pointers together attempt to make sum close to target as possible.

##### Code

```javascript
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a,b) => a-b);
    let res = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < nums.length-2; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue;
        let left = i+1, right = nums.length-1;
        while (left < right) {
            let diff = nums[i] + nums[left] + nums[right];
            res = Math.abs(target - diff) < Math.abs(target - res) ? diff : res;
            if ((nums[i] + nums[left] + nums[right]) === target) {
                return target;
            } else if ((nums[i] + nums[left] + nums[right]) > target) {
                right--;
                while (right > left && nums[right] === nums[right+1]) right--;
            } else if ((nums[i] + nums[left] + nums[right]) < target) {
                left++;
                while (left < right && nums[left] === nums[left-1]) left++;
            }
        }
    }
    return res;
};
```

