#### Optimize Water Distribution in a Village

https://leetcode.com/explore/featured/card/august-leetcoding-challenge-2021/613/week-1-august-1st-august-7th/3834/

###### Solution

Keep a queue of cost to provide water to each node and sort by cost

###### Code

```javascript
/**
 * @param {number} n
 * @param {number[]} wells
 * @param {number[][]} pipes
 * @return {number}
 */
var minCostToSupplyWater = function(n, wells, pipes) {
    const queue = wells.map((cost, i) => [i, cost]);
    queue.sort((a, b) => b[1] - a[1]);
    const status = wells.slice();
    status.fill(0);
    let ret = 0;
    while (queue.length > 0 && status.indexOf(0) >= 0) {
        const [i, cost] = queue.pop();
        if (status[i] === -1) {
            continue;
        }
        ret += cost;
        status[i] = -1;
        pipes.forEach((pipe) => {
            if (pipe[0]-1 === i && status[pipe[1]-1] !== -1) {
                queue.push([pipe[1]-1, pipe[2]]);
            } else if (pipe[1]-1 === i && status[pipe[0]-1] !== -1) {
                queue.push([pipe[0]-1, pipe[2]]);
            }
        });
        queue.sort((a, b) => b[1] - a[1]);
    }
    return ret;
};
```

