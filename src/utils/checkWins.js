const chkLine = (a,b,c,d) => {
    // Check first cell non-zero and all cells match
    return (a && (a === b) && (a === c) && (a === d));
}

export const chkWinner = (board) => {
    // Check down
    for (let r = 0; r <= 3; r++) {
        for (let c = 0; c < 7; c++) {
            if (chkLine(board[r][c], board[r+1][c], board[r+2][c], board[r+3][c])) {
                return 1;
            }
        }
    }

    // Check right
    for (let r = 0; r <= 6; r++) {
        for (let c = 0; c <= 3; c++) {
            if (chkLine(board[r][c], board[r][c+1], board[r][c+2], board[r][c+3])) {
                return 1;
            }
        }
    }

    // Check down-right
    for (let r = 0; r <= 3; r++) {
        for (let c = 0; c <= 3; c++) {
            if (chkLine(board[r][c], board[r+1][c+1], board[r+2][c+2], board[r+3][c+3])) {
                return 1;
            }
        }
    }

    // Check down-left
    for (let r = 3; r <= 6; r++) {
        for (let c = 0; c <= 3; c++) {
            if (chkLine(board[r][c], board[r-1][c+1], board[r-2][c+2], board[r-3][c+3])) {
                return 1;
            }
        }
    }

    return 0;
}