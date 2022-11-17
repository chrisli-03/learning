##### Solution

Two pointers points to 2 adjacent nodes, swap them, move pointers to next pair, repeat for all nodes.

##### Code

```javascript
var swapPairs = function(head) {
    if (head === null || head.next === null) return head
    return swapPairsHelper(head, head.next)
};

var swapPairsHelper = function(p1, p2) {
    if (p2 === null) return p1
    let temp = swapPairsHelper(p2.next, p2.next === null ? null : p2.next.next)
    p1.next = temp
    p2.next = p1
    return p2
}
```

