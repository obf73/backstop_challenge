/**
36. Valid Sudoku
Medium
Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.
A partially filled sudoku which is valid.
The Sudoku board could be partially filled, where empty cells are filled with the character '.'.
Example 1:
Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true
Example 2:
Input:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being 
    modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
Note:
A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
The given board contain only digits 1-9 and the character '.'.
The given board size is always 9x9.
 */

 /**
 * @param {character[][]} board
 * @return {boolean}
 */

const validateRow = (row) => {
  let cellCache = {};
  row.forEach(cell => {
    if(cell !== '.') {
      if(cellCache[cell]) {
        console.log('board is not valid')
        return false;
      }
      cellCache[cell] = true;
    }
  })
  console.log('row is valid')
  return true;
}

const validateColumn = column => {
    let cellCache = {}
    for(let j = 0; j < board.length; j++) {
      if(board[j][i] !== '.') {
        if(cellCache[board[j][i]]) {
          console.log({cell: board[j][it]})
          console.log('board is not valid');
          return false
        }
      cellCache[board[j][i]] = true
      }
    }
    console.log('column is valid')
}

var isValidSudoku = function(board) {
  // board.forEach(r => {
  //   validateRow(r);
  // })
  // for(let i = 0; i < board.length; i++) {
  //   let cellCache = {}
  //   for(let j = 0; j < board.length; j++) {
  //     if(board[j][i] !== '.') {
  //       if(cellCache[board[j][i]]) {
  //         console.log({cell: board[j][it]})
  //         console.log('board is not valid');
  //         return false
  //       }
  //     cellCache[board[j][i]] = true
  //     }
  //   }
  //   console.log('column is valid')
  // }
  let cellCache = {
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
    9: {},
  }

  const returnSub = (i, j) => {
    let cacheSub = 0
    if(i <= 2) {
      //  in first sub
      if(j <= 2) {
        cacheSub = 1
        //  in first sub
      } else if (j > 2 && j < 6) {
        cacheSub = 2
        // in second sub
      } else {
        cacheSub = 3
        // in 3rd sub
      }
    } else if (i > 2 && i < 6) {
      // in second sub
      if(j <= 2) {
        cacheSub = 4
        //  in first sub
      } else if (j > 2 && j < 6) {
        cacheSub = 5
        // in second sub
      } else {
        cacheSub = 6
        // in 3rd sub
      }
    } else {
      // in 3rd sub
      if(j <= 2) {
        cacheSub = 7
        //  in first sub
      } else if (j > 2 && j < 6) {
        cacheSub = 8
        // in second sub
      } else {
        cacheSub = 9
        // in 3rd sub
      }
    }
    return cacheSub
  }
  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board.length; j++) {
      if(board[i][j] !== '.') {
        const cacheSub = returnSub(i, j);
        if(!cellCache[cacheSub][board[i][j]]) {
          cellCache[cacheSub][board[i][j]] = true
          console.log({cell: [board[i][j]]})
          console.log({cacheSub})
          console.log({cache: cellCache})
        } else {
          console.log(`board ${cacheSub} is not valid`)
          console.log(`value ${board[i][j]} already exists`)
          return 
        }
      }
    }
    console.log('board is valid')
  }

}

const board = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];
isValidSudoku(board);
  