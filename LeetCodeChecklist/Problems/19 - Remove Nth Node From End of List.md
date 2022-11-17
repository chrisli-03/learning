##### Solution

2 Pointers with distance n, when right pointer reaches end, remove node on left pointer.

##### Code

```javascript
var removeNthFromEnd = function(head, n) {
    if (head.next === null) return null
    let p1 = p2 = head
    while (n > 0) { p2 = p2.next; n-- }
    if (p2 === null) return head.next
    while (p2.next != null) {
        p1 = p1.next
        p2 = p2.next
    }
    p1.next = p1.next.next
    return head
};
```

