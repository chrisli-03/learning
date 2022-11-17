##### Solution

Iterate the list, update current minimum price seen so far and use current minimum price to calculate current maximum profit.

##### Code

```javascript
var maxProfit = function(prices) {
    let curMax = 0
    let curMin = Number.MAX_SAFE_INTEGER
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < curMin) curMin = prices[i]
        if (prices[i] - curMin > curMax) curMax = prices[i] - curMin
    }
    return curMax
};
```

