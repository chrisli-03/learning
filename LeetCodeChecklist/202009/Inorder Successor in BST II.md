##### Solution

If node has a right child, find the most left node of left child, because be definition all parent nodes of node must be larger than any node in right subtree, or it's not a BST.

If node does not have a right child but has a parent, keep going up and keep track of smallest value larger than node, if no parent has value larger than node, return null.

If node has neither right child or parent, it is the largest node, return null.

##### Code

```javascript
/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var inorderSuccessor = function(node) {
    if (node.right !== null) {
        let res = node.right
        while (res.left !== null) {
            res = res.left
        }
        return res
    } else if (node.parent !== null) {
        let res = node
        let cur = null
        while (res.parent !== null) {
            if (res.parent.val > node.val) {
                if (cur === null || cur > node.parent.val) {
                    cur = res.parent
                }
            }
            res = res.parent
        }
        return cur
    }
    return null
};
```

