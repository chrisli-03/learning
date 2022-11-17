##### Solution

Use an array to keep track of numbers, use a pointer to keep track of where next number goes.

##### Code

```javascript
/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.arr = new Array(size)
    this.pointer = 0
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.arr[this.pointer++] = val
    if (this.pointer >= this.arr.length) this.pointer = 0
    return this.arr.reduce((arr, n) => arr + n, 0) / this.arr.filter(n => typeof n === 'number').length
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
```

