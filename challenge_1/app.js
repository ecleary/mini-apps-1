//// Init //// View initialization on first load ////////

// Document

const body = document.body;
const app = document.createElement('div');
const title = document.createElement('h1');
const helloWorld = document.createTextNode('Hello, Tic-Tac-Toe World');
const gameboard = document.createElement('table');

title.append(helloWorld);
app.append(title);
app.append(gameboard);
body.append(app);

// Game board

for (let i = 0; i < 3; i++) {
  let row = document.createElement('tr');
  for (let j = 0; j < 3; j++) {
    let space = document.createElement('td');
    space.className = `space row-${i} col-${j}`;
    // space.setAttribute('alt', `r${i}-c${j}`);
    space.style.cssText = 'width: 80px; height: 80px; text-align: center; cursor: pointer;';
    let position = document.createElement('h1');
    position.id = `r${i}-c${j}`;
    // position.append(document.createTextNode('X'));
    space.append(position);
    row.append(space);
  }
  gameboard.append(row);
}

// Board lines

gameboard.setAttribute('cellspacing', '0');

const middleColumn = document.getElementsByClassName('col-1');
const middleRow = document.getElementsByClassName('row-1');

for (let i = 0; i < middleColumn.length; i++) {
  let currentStyle = middleColumn[i].getAttribute('style');
  currentStyle = currentStyle ? ' ' + currentStyle : '';
  middleColumn[i].style.cssText = 'border-left: 5px solid black; border-right: 5px solid black;' + currentStyle;
}

for (let i = 0; i < middleRow.length; i++) {
  let currentStyle = middleRow[i].getAttribute('style');
  currentStyle = currentStyle ? ' ' + currentStyle : '';
  middleRow[i].style.cssText = 'border-top: 5px solid black; border-bottom: 5px solid black;' + currentStyle;
}

// Next move indicator

const nextMoveIndicator = document.createElement('div');
nextMoveIndicator.style.cssText = 'margin-top: 30px; margin-bottom: 30px;';
nextMoveIndicator.append('Next move: X');
app.insertBefore(nextMoveIndicator, gameboard);

// Reset button

const resetButtonContainer = document.createElement('div');
const resetButton = document.createElement('button');

resetButtonContainer.setAttribute('style', 'margin-top: 30px;');
resetButton.append('Reset game');
resetButtonContainer.append(resetButton);
app.append(resetButtonContainer);


//// Models //// Data storage ////////

// Serve next piece and current piece

let nextPiece = 'X';

const getNextPiece = () => {
  const currentPiece = nextPiece;
  nextPiece = nextPiece === 'X' ? 'O' : 'X';
  return {currentPiece, nextPiece};
};

const resetPiece = () => {
  nextPiece = 'X';
  return nextPiece;
};

// Serve game progress



//// Controllers //// Request and response handling ////////

// Place piece

const placePiece = (event) => {
  const {id, childNodes} = event.target.childNodes[0];
  if (id && childNodes.length === 0) {
    const {currentPiece, nextPiece} = getNextPiece();
    appendPieceToSpace(id, currentPiece);
    updateNextMove(nextPiece);
  }
};

// Reset next piece

const resetNextPiece = () => {
  const piece = resetPiece();
  updateNextMove(piece);
};

// Check for winner



// Declare winner



//// Views //// DOM manipulation and event listeners ////////

// Listen for click and append piece

const spaces = document.getElementsByClassName('space');

for (let i = 0; i < spaces.length; i++) {
  spaces[i].onclick = placePiece;
}

const appendPieceToSpace = (id, piece) => {
  const targetElement = document.getElementById(id);
  targetElement.append(piece);
};

// Update next move

const updateNextMove = (piece) => {
  nextMoveIndicator.removeChild(nextMoveIndicator.lastChild);
  nextMoveIndicator.append(`Next move: ${piece}`);
};

// Reset board

const clearBoard = () => {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const position = document.getElementById(`r${i}-c${j}`);
      if (position.lastChild) {
        position.removeChild(position.lastChild);
      }
    }
  }
  resetNextPiece();
};

resetButton.onclick = clearBoard;
