##### Question

There is a ball in a `maze` with empty spaces (represented as `0`) and walls (represented as `1`). The ball can go through the empty spaces by rolling **up, down, left or right**, but it won't stop rolling until hitting a wall. When the ball stops, it could choose the next direction.

Given the `maze`, the ball's `start` position and the `destination`, where `start = [startx, starty]` and `destination = [destinationx, destinationy]`, return `true` if the ball can stop at the destination, otherwise return `false`.

You may assume that **the borders of the maze are all walls** (see examples).

https://leetcode.com/explore/challenge/card/august-leetcoding-challenge/552/week-4-august-22nd-august-28th/3432/

##### Solution

BFS to track possible landing positions of ball, check if ball lands on destination. If ball has travelled to all possible positions, return false.

##### Code

```javascript
var hasPath = function(maze, start, destination) {
    const queue = [start]
    while(queue.length > 0) {
        const [x, y] = queue.pop()
        if (x === destination[0] && y === destination[1]) return true
        maze[x][y] = -1
        let up = x
        while(up >= 0) {
            if (up === 0 || maze[up-1][y] === 1) {
                if (maze[up][y] === 0) {
                    queue.push([up, y])
                    maze[up][y] = -1
                }
                break
            }
            up--
        }
        
        let down = x
        while(down < maze.length) {
            if (down === maze.length-1 || maze[down+1][y] === 1) {
                if (maze[down][y] === 0) {
                    queue.push([down, y])
                    maze[down][y] = -1
                }
                break
            }
            down++
        }
        
        let left = y
        while(left >= 0) {
            if (left === 0 || maze[x][left-1] === 1) {
                if (maze[x][left] === 0) {
                    queue.push([x, left])
                    maze[x][left] = -1
                }
                break
            }
            left--
        }
        
        let right = y
        while(right < maze[x].length) {
            if (right === maze[x].length-1 || maze[x][right+1] === 1) {
                if (maze[x][right] === 0) {
                    queue.push([x, right])
                    maze[x][right] = -1
                }
                break
            }
            right++
        }
    }
    return false
};
```

