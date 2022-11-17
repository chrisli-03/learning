#### Search a 2D Matrix

Medium

###### Solution 1

2 Binary search

First binary search to locate the row

Second binary search to locate the exact index

```javascript
var binarySearch = function(arr, target) {
    let start = 0, end = arr.length-1
    while (start < end) {
        let mid = Math.ceil(start + (end - start)/2)
        if (arr[mid] > target) {
            end = mid-1
        }
        else if (arr[mid] < target) {
            start = mid
        }
        else return mid
    }
    return start + (end - start)/2
}

var searchMatrix = function(matrix, target) {
    if (matrix.length === 0) return false
    const colArr = matrix.map(row => row[0])
    let row = binarySearch(colArr, target)
    const rowArr = matrix[row]
    let i = binarySearch(rowArr, target)
    return rowArr[i] === target
};
```

###### Solution 2

Treating the matrix as one sorted array

```javascript
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0) return false
    if (matrix[0].length === 0) return false
    let n = matrix.length
    let m = matrix[0].length
    let start = 0, end = n * m - 1
    while (start < end) {
        let mid = Math.floor(start + (end - start)/2)
        if (matrix[Math.floor(mid/m)][mid%m] < target) {
            start = mid + 1
        }
        else {
            end = mid
        }
    }
    return matrix[Math.floor(end/m)][end%m] === target
};
```

