#### Subsets II

###### Solution

Simple recursive approach, keep adding in new numbers to create new subsets, ignore subsets seen before.

###### Code

```javascript
var subsetsWithDup = function(nums) {
    const res = [[]] // subsets
    const exist = new Set() // existing subsets
    const getSubsets = (cur, nums) => {
        nums.forEach((num, i) => {
            const arr = cur.slice()
            arr.push(num)
            arr.sort()
            if (exist.has(arr.join(''))) return // subset already exist
            exist.add(arr.join(''))
            res.push(arr)
            const leftNums = nums.slice()
            leftNums.splice(i, 1)
            if (leftNums.length > 0) getSubsets(arr, leftNums) // no available number left
        })
    }
    getSubsets([], nums)
    return res
};
```

