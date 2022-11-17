#### Reverse Nodes in k-Group

https://leetcode.com/explore/featured/card/july-leetcoding-challenge-2021/610/week-3-july-15th-july-21st/3818/

Easy

###### Solution

use 2 pointers to track head and tail, reverse nodes in between, then repeat for next group.

eg.

[1,2,3,4,5], k = 2

[rev(1,2),rev(3,4), 5]

###### Code

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseList = function(head, tail) {
    const fn = function(head) {
        if (head === tail) {
            return head;
        }
        const next = fn(head.next);
        next.next = head;
        head.next = null;
        return head;
    }
    fn(head);
    return tail;
}

var reverseKGroup = function(head, k) {
    if (k === 1) {
        return head;
    }
    if (head === null) {
        return null;
    }
    let leftP = head;
    let rightP = head;
    let counter = 1;
    let rtn = null;
    let prevLeftP = null;
    while(rightP !== null) {
        if (counter === k) {
            let temp = rightP.next;
            const node = reverseList(leftP, rightP);
            if (prevLeftP) {
                prevLeftP.next = node;
            }
            prevLeftP = leftP;
            leftP.next = temp;
            leftP = temp;
            rightP = temp;
            if (!rtn) {
                rtn = node;
            }
            counter = 1;
        }
        if (rightP === null) {
            break;
        }
        rightP = rightP.next;
        counter += 1;
    }
    return rtn;
};
```

