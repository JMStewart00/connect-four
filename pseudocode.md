### WIN CONDITIONS
### Down
Row 0-3
Column 0-6
[r][c], [r+1][c], [r+2][c], [r+3][c]

### Right
Row 0-6
Column 0-3
[r][c], [r][c+1], [r][c+2], [r][c+3]

### Down-Right
Row 0-3
Column 0-3
[r][c], [r+1][c+1], [r+2][c+2], [r+3][c+3]

### Down-Left
Row 3-6
Column 0-3
[r][c], [r-1][c+1], [r-2][c+2], [r-3][c+3]


```javascript
const BOARD = [
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
]
```