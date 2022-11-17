##### Solution

Recursively build left and right tree

##### Code

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
 * @param {number} n
 * @return {TreeNode[]}
 */
var helper = function(start, end) {
    const allTrees = []
    if (start > end) {
        allTrees.push(null)
        return allTrees
    }
    
    // pick up a root
    for (let i = start; i<= end; i++) {
        const leftTrees = helper(start, i-1)
        const rightTrees = helper(i+1, end)
        for (const l of leftTrees) {
            for (const r of rightTrees) {
                const currentTree = new TreeNode(i, l, r)
                allTrees.push(currentTree)
            }
        }
    }
    return allTrees
}

var generateTrees = function(n) {
    if (n === 0) return []
    return helper(1, n)
};
```

