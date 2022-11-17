##### Solution

Use left and right pointers, move pointers together while updating max volume.

##### Code

```javascript
var maxArea = function(height) {
    let i = 0, j = height.length-1;
    let max = (j-i)*(Math.min(height[i], height[j]));
    while (i < j) {
        if (height[i] > height[j]) {
            j--;
        } else {
            i++;
        }
        max = Math.max(max, (j-i)*(Math.min(height[i], height[j])));
    }
    return max;
};
```

