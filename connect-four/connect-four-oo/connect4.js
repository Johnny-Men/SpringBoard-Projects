/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */


  

class Game{
  constructor(p1,p2,height,width){
    this.players = [p1,p2];
    this.HEIGHT = height;
    this.WIDTH = width;
    this.board = [];
    this.currPlayer = this.players[0];
  }
  
  startGame(){
    this.makeHtmlBoard();

    const removeForm = document.createElement('form');


    const resetButton = document.createElement('button');

    resetButton.innerText = "New Game";

    removeForm.append(resetButton);

    const body = document.querySelector('body');

    body.append(removeForm);

    resetButton.addEventListener('click', this.makeBoard());

  }
  
  makeBoard() {
    for (let y = 0; y < this.HEIGHT; y++) {
      this.board.push(Array.from({ length: this.WIDTH }));
    }
    const colorButton = document.querySelector('.color-button');
    colorButton.addEventListener('click', (evt =>{
      this.startGame();
    }));
  }

   makeHtmlBoard() {
    const board = document.getElementById('board');
  
    // make column tops (clickable area for adding a piece to that column)
    const top = document.createElement('tr');
    top.setAttribute('id', 'column-top');
    top.addEventListener('click', this.handleClick.bind(this))
  
    for (let x = 0; x < this.WIDTH; x++) {
      const headCell = document.createElement('td');
      headCell.setAttribute('id', x);
      top.append(headCell);
    }
    
    board.append(top);
  
    // make main part of board
    for (let y = 0; y < this.HEIGHT; y++) {
      const row = document.createElement('tr');

  
      for (let x = 0; x < this.WIDTH; x++) {
        const cell = document.createElement('td');
        cell.setAttribute('id', `${y}-${x}`);
        row.append(cell);
      }
  
      board.append(row);
    }
  }
 findSpotForCol(x) {
    for (let y = this.HEIGHT - 1; y >= 0; y--) {
      if (!this.board[y][x]) {
        return y;
  
      }
    }
    return null;
  }
  placeInTable(y, x) {
    const piece = document.createElement('div');
    piece.classList.add('piece');
    console.log(this.currPlayer);
    if(this.currPlayer === this.players[0]){
      piece.style.backgroundColor = this.currPlayer;
    }
    else{piece.style.backgroundColor = this.players[1];}
    piece.style.top = -50 * (y + 2);
    const spot = document.getElementById(`${y}-${x}`);
    console.log(spot);
    spot.append(piece);
  }
  endGame(msg) {
    alert(msg);
  }
  handleClick(evt) {
    // get x from ID of clicked cell
    const x = +evt.target.id;
    // get next spot in column (if none, ignore click)
    const y = this.findSpotForCol(x);
    if (y === null){
      return;

    }
    console.log(x,y);
    // place piece in board and add to HTML table
    this.board[y][x] = this.currPlayer;
    this.placeInTable(y, x);

    
    // check for win
    if (this.checkForWin()) {
      return this.endGame(`Player ${this.currPlayer} won!`);
    }
    
    // check for tie
    if (this.board.every(row => row.every(cell => cell))) {
      return this.endGame('Tie!');
    }
      
    // switch players
  //  this.currPlayer === this.players[0] ? this.players[1] : this.players[0];
  //  console.log(this.currPlayer);
  if(this.currPlayer === this.players[0]){
    this.currPlayer = this.players[1];
  }
  else{
    this.currPlayer = this.players[0];
  }
  }
  checkForWin() {
    const _win = (cells) => {
      // Check four cells to see if they're all color of current player
      //  - cells: list of four (y, x) cells
      //  - returns true if all are legal coordinates & all match currPlayer
      return cells.every(([y, x])=>{
          y >= 0 &&
          y < this.HEIGHT &&
          x >= 0 &&
          x < this.WIDTH &&
          this.board[y][x] === this.currPlayer
      });
    }
  
    for (let y = 0; y < this.HEIGHT; y++) {
      for (let x = 0; x < this.WIDTH; x++) {
        // get "check list" of 4 cells (starting here) for each of the different
        // ways to win
        const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
        const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
        const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
        const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];
  
        // find winner (only checking each win-possibility as needed)
        if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
          return true;
        }
      }
    }
  }
}

class Player {
  constructor(color){
    this.color = color;
  }
}

const colorButton = document.querySelector('.color-button');
  
  colorButton.addEventListener('click', function(evt){
    evt.preventDefault();
    let p1Color = new Player(document.querySelector('.player-1').value);
    let p2Color = new Player(document.querySelector('.player-2').value);
    const newGame = new Game(p1Color.color,p2Color.color,6,7);
    newGame.startGame();
    p1Color.value = '';
    p2Color.value = '';
  })


// firstGame.makeHtmlBoard();


// const WIDTH = 7;
// const HEIGHT = 6;

// let currPlayer = 1; // active player: 1 or 2
// let board = []; // array of rows, each row is array of cells  (board[y][x])

// /** makeBoard: create in-JS board structure:
//  *   board = array of rows, each row is array of cells  (board[y][x])
//  */

// function makeBoard() {
//   for (let y = 0; y < HEIGHT; y++) {
//     board.push(Array.from({ length: WIDTH }));
//   }
// }

// /** makeHtmlBoard: make HTML table and row of column tops. */

// function makeHtmlBoard() {
//   const board = document.getElementById('board');

//   // make column tops (clickable area for adding a piece to that column)
//   const top = document.createElement('tr');
//   top.setAttribute('id', 'column-top');
//   top.addEventListener('click', handleClick);

//   for (let x = 0; x < WIDTH; x++) {
//     const headCell = document.createElement('td');
//     headCell.setAttribute('id', x);
//     top.append(headCell);
//   }

//   board.append(top);

//   // make main part of board
//   for (let y = 0; y < HEIGHT; y++) {
//     const row = document.createElement('tr');

//     for (let x = 0; x < WIDTH; x++) {
//       const cell = document.createElement('td');
//       cell.setAttribute('id', `${y}-${x}`);
//       row.append(cell);
//     }

//     board.append(row);
//   }
// }

/** findSpotForCol: given column x, return top empty y (null if filled) */

// function findSpotForCol(x) {
//   for (let y = HEIGHT - 1; y >= 0; y--) {
//     if (!board[y][x]) {
//       return y;
//     }
//   }
//   return null;
// }

// /** placeInTable: update DOM to place piece into HTML table of board */

// function placeInTable(y, x) {
//   const piece = document.createElement('div');
//   piece.classList.add('piece');
//   piece.classList.add(`p${currPlayer}`);
//   piece.style.top = -50 * (y + 2);

//   const spot = document.getElementById(`${y}-${x}`);
//   spot.append(piece);
// }

// /** endGame: announce game end */

// function endGame(msg) {
//   alert(msg);
// }

// /** handleClick: handle click of column top to play piece */

// function handleClick(evt) {
//   // get x from ID of clicked cell
//   const x = +evt.target.id;

//   // get next spot in column (if none, ignore click)
//   const y = findSpotForCol(x);
//   if (y === null) {
//     return;
//   }

//   // place piece in board and add to HTML table
//   board[y][x] = currPlayer;
//   placeInTable(y, x);
  
//   // check for win
//   if (checkForWin()) {
//     return endGame(`Player ${currPlayer} won!`);
//   }
  
//   // check for tie
//   if (board.every(row => row.every(cell => cell))) {
//     return endGame('Tie!');
//   }
    
//   // switch players
//   currPlayer = currPlayer === 1 ? 2 : 1;
// }

// /** checkForWin: check board cell-by-cell for "does a win start here?" */

// function checkForWin() {
//   function _win(cells) {
//     // Check four cells to see if they're all color of current player
//     //  - cells: list of four (y, x) cells
//     //  - returns true if all are legal coordinates & all match currPlayer

//     return cells.every(
//       ([y, x]) =>
//         y >= 0 &&
//         y < HEIGHT &&
//         x >= 0 &&
//         x < WIDTH &&
//         board[y][x] === currPlayer
//     );
//   }

//   for (let y = 0; y < HEIGHT; y++) {
//     for (let x = 0; x < WIDTH; x++) {
//       // get "check list" of 4 cells (starting here) for each of the different
//       // ways to win
//       const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
//       const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
//       const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
//       const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

//       // find winner (only checking each win-possibility as needed)
//       if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
//         return true;
//       }
//     }
//   }
// }


