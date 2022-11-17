#### Subsets II

https://leetcode.com/explore/challenge/card/august-leetcoding-challenge-2021/613/week-1-august-1st-august-7th/3837/

###### Solution

for every number, add a new item with that number appended to the end, use a set to track duplicates.

###### Code

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort();
    let res = [''];
    const seen = new Set();
    while(nums.length > 0) {
        const num = nums.pop();
        const newRes = [];
        res.forEach((n) => {
            if (!seen.has(num+','+n)) {
                newRes.push(num+','+n);
                seen.add(num+','+n);
            }
        });
        res = [...res, ...newRes];
    }
    return res.map(n => {
        const arr = n.split(',')
        arr.pop();
        return arr.map(n => +n)
    });
};
```

