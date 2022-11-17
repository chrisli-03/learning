#### Simplify Path

Medium

[Link](https://leetcode.com/problems/simplify-path/)

###### Solution

Split the original path by consecutive slashes

Iterate the path array and build the new path

###### Code

```javascript
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    // split the path by consecutive slashes, this removes all consecutive slashes
    let pathArr = path.split(/\/+/)
    let simplePathArr = []
    pathArr.forEach(file => {
        // a dot means current directory, which is reduntant, ignore it
        if (file === '.') {}
        else if (file === '..') { // two dots means go up one level
            simplePathArr.pop()
        }
        else if (file !== '') { // if directory is not empty, push it to array, this removes trailing slashes
            simplePathArr.push(file)
        }
    })
    // add back beginning shash and return
    return '/' + simplePathArr.join('/')
};
```

