var sudokuGrid = {
  1: [6,8,1,7,5,9,2,3,4],
  2: [7,4,3,2,1,8,6,9,5],
  3: [5,9,2,4,6,3,7,1,8],
  4: [2,3,4,9,7,5,8,6,1],
  5: [1,5,7,8,2,6,3,4,9],
  6: [9,6,8,3,4,1,5,7,2],
  7: [3,1,6,5,9,2,4,8,7],
  8: [4,2,9,6,8,7,1,5,3],
  9: [8,7,5,1,3,4,9,2,6],
}

var sudoku = function (sudokuGrid) {
  var obj;
  for(var key in sudokuGrid) {
    obj = {};
    for(var i =0; i<9; i++) {
      if(sudokuGrid[key][i] > 9 || sudokuGrid[key][i] < 1 || obj.hasOwnProperty(sudokuGrid[key][i])) {
        return 'Invalid Sudoku in row ' + key;
      }
      else {
        obj[sudokuGrid[key][i]] = true;
      }
    }
  }
  for(var i=0; i<9; i++) {
    obj = {};
    for(var key in sudokuGrid) {
      if(obj.hasOwnProperty(sudokuGrid[key][i])) {
        return 'Invalid Sudoku in column ' + i+1;
      }
      else {
        obj[sudokuGrid[key][i]] = true;
      }
    }
  }
  for(var d=0; d<9; d+=3) {
    for(s=0; s<9; s+=3) {
      obj = {};
      for(var i=s; i<s+3; i++) {
        for(var k=1+d; k<4+d; k++) {
          if(obj.hasOwnProperty(sudokuGrid[k][i])) {
            return 'Invalid Sudoku in location ' + i + ', ' + k;
          }
          else {
            obj[sudokuGrid[k][i]] = true;
          }
        }
      }
    }
  }
  return 'your Sudoku is valid yaaaaaaaay!! :)';
}

sudoku(sudokuGrid);