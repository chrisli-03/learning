#### Path Sum II

https://leetcode.com/explore/challenge/card/august-leetcoding-challenge-2021/613/week-1-august-1st-august-7th/3838/

###### Solution

for every leaf, if path sum is equal to target, return that node, else return empty

###### Code

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    if (root === null) {
        return [];
    }
    if (root.left === null && root.right === null) {
        if (root.val === targetSum) {
            return [[root.val]];
        } else {
            return [];
        }
    }
    let res = [];
    if (root.left !== null) {
        const path = pathSum(root.left, targetSum - root.val);
        if (path) {
            res = [...res, ...path.map(n => [root.val, ...n])];
        }
    }
    if (root.rigth !== null) {
        const path = pathSum(root.right, targetSum - root.val);
        if (path) {
            res = [...res, ...path.map(n => [root.val, ...n])];
        }
    }
    return res;
};
```

