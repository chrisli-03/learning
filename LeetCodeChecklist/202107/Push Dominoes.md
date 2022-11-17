#### Push Dominoes

https://leetcode.com/explore/challenge/card/july-leetcoding-challenge-2021/610/week-3-july-15th-july-21st/3821/

###### Solution

If dominoes is ..L or L.L changed middle to L, if its R.. or R.R change middle to R.

traverse the array until no change can be made.

###### Code

```javascript
/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    let arr = ('.' + dominoes + '.').split('');
    let stateChanged = true;
    while (stateChanged) {
        let newArr = arr.slice();
        stateChanged = false;
        for (let i = 1; i < arr.length - 1; i++) {
            const state = arr[i-1] + arr[i] + arr[i+1];
            if (state === '..L' || state === 'L.L') {
                newArr[i] = 'L';
                stateChanged = true;
            } else if (state === 'R..' || state === 'R.R') {
                newArr[i] = 'R';
                stateChanged = true;
            }
        }
        arr = newArr;
    }
    return arr.slice(1, arr.length-1).join('');
};
```

