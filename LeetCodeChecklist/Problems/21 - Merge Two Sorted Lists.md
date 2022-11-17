##### Solution

Create a new list, if head of list 1 is smaller than head of list 2, move head of list 1 to new list, else move head of list 2 to new list. Continue until one list is empty, append the remaining of the other list to new list.

##### Code

```javascript
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) return l2
    if (l2 === null) return l1
    let p = new ListNode(0)
    let head = p
    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            p.next = l1
            l1 = l1.next
        } else {
            p.next = l2
            l2 = l2.next
        }
        p = p.next
    }
    if (l1 === null) p.next = l2
    if (l2 === null) p.next = l1
    return head.next
};
```

