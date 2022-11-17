##### Solution

Merge lists one by one

##### Code

```javascript
var mergeKLists = function(lists) {
    if (lists === null || lists.length === 0) return null; 
    return split(lists, 0, lists.length-1)
};

var split = function(lists, start, end) {
    if (start === end) return lists[start]
    if (start === end-1) return merge2Lists(lists[start], lists[end])
    const mid = start + ((end - start)/2)^0
    const l1 = split(lists, start, mid), l2 = split(lists, mid+1, end)
    return merge2Lists(l1, l2)
};

var merge2Lists = function(l1, l2) {
    if (l1 === null) return l2
    if (l2 === null) return l1
    let prehead = new ListNode(-1)
    let pointer = prehead
    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            pointer.next = l1
            l1 = l1.next
        } else {
            pointer.next = l2
            l2 = l2.next
        }
        pointer = pointer.next
    }
    if (l1 != null) pointer.next = l1
    if (l2 != null) pointer.next = l2
    return prehead.next
};
```

