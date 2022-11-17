#### Two Sum

Easy

###### Solution

Iterate the array, for each element n and target t, if t-n already exist in hash map, return the index of t-n and n. Otherwise set element n and its index in hash map.

###### Code

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = new Map();
    for (var i = 0; i < nums.length; i++) {
        var n = target - nums[i];
        if (map.has(n)) {
            return [map.get(n), i];
        }
        map.set(nums[i], i);
    }
    return [];
};
```

