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

gameboard.setAttribute('cellspacing', '0');

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

// Reset button

const resetButtonContainer = document.createElement('div');
const resetButton = document.createElement('button');

resetButtonContainer.setAttribute('style', 'margin-top: 20px;');
resetButton.append('Reset game');
resetButtonContainer.append(resetButton);
app.append(resetButtonContainer);


//// Models //// Data storage ////////

// Serve piece

let nextPiece = 'X';

const getNextPiece = () => {
  const currentPiece = nextPiece;
  nextPiece = nextPiece === 'X' ? 'O' : 'X';
  return currentPiece;
};

// Serve game progress



//// Controllers //// Request and response handling ////////

// Place piece

const placePiece = (event) => {
  const {id, childNodes} = event.target.childNodes[0];
  if (id && childNodes.length === 0) {
    const piece = getNextPiece();
    appendPieceToSpace(id, piece);
  }
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
};

resetButton.onclick = clearBoard;
