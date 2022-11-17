#### Add Two Numbers

Medium

###### Solution

Traverse the two linked lists in parallel and add their values one by one, straight forward.

###### Code

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let result = new ListNode(1), node = result, sum = 0;
    while (l1||l2||sum) {
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        node.next = new ListNode(sum % 10);
        node = node.next;
        sum = (sum/10)|0;
    }
    return result.next;
};
```

