//// Init //// View initialization on first load ////////

const init = {};

// Document

init.body = document.body;
init.app = document.createElement('div');
init.title = document.createElement('h1');
init.titleText = document.createTextNode(`Let’s Play Tic-Tac-Toe`);
init.gameboard = document.createElement('table');

init.title.append(init.titleText);
init.app.append(init.title);
init.app.append(init.gameboard);
init.body.append(init.app);

// Game board

for (let i = 0; i < 3; i++) {
  let row = document.createElement('tr');
  for (let j = 0; j < 3; j++) {
    let space = document.createElement('td');
    space.className = `space row-${i} col-${j}`;
    space.style.cssText = 'width: 80px; height: 80px; text-align: center; cursor: pointer;';
    let position = document.createElement('h1');
    position.id = `r${i}-c${j}`;
    space.append(position);
    row.append(space);
  }
  init.gameboard.append(row);
}

// Board lines

init.gameboard.setAttribute('cellspacing', '0');

init.middleColumn = document.getElementsByClassName('col-1');
init.middleRow = document.getElementsByClassName('row-1');

for (let i = 0; i < init.middleColumn.length; i++) {
  let currentStyle = init.middleColumn[i].getAttribute('style');
  currentStyle = currentStyle ? ' ' + currentStyle : '';
  init.middleColumn[i].style.cssText = 'border-left: 5px solid black; border-right: 5px solid black;' + currentStyle;
}

for (let i = 0; i < init.middleRow.length; i++) {
  let currentStyle = init.middleRow[i].getAttribute('style');
  currentStyle = currentStyle ? ' ' + currentStyle : '';
  init.middleRow[i].style.cssText = 'border-top: 5px solid black; border-bottom: 5px solid black;' + currentStyle;
}

// Next move indicator

init.nextMoveIndicator = document.createElement('div');
init.nextMoveIndicator.style.cssText = 'margin-top: 30px; margin-bottom: 30px;';
init.nextMoveIndicator.append('Next move: X');
init.app.insertBefore(init.nextMoveIndicator, init.gameboard);

// Reset button

init.resetButtonContainer = document.createElement('div');
init.resetButton = document.createElement('button');

init.resetButtonContainer.setAttribute('style', 'margin-top: 30px;');
init.resetButton.append('Reset game');
init.resetButtonContainer.append(init.resetButton);
init.app.append(init.resetButtonContainer);

//// Models //// Data storage ////////

const models = {};

// Serve next piece and current piece

models.nextPiece = 'X';

models.getNextPiece = () => {
  const currentPiece = models.nextPiece;
  models.nextPiece = models.nextPiece === 'X' ? 'O' : 'X';
  const nextPiece = models.nextPiece;
  return {currentPiece, nextPiece};
};

models.resetPiece = () => {
  models.nextPiece = 'X';
  return models.nextPiece;
};

// Serve game progress

models.gameInProgress = true;
models.piecesPlaced = 0;

models.checkGameProgress = () => {
  return models.gameInProgress;
};

models.endGame = () => {
  models.gameInProgress = false;
};

models.countMove = () => {
  models.piecesPlaced++;
  return models.piecesPlaced;
};

models.resetGameProgress = () => {
  models.gameInProgress = true;
  models.piecesPlaced = 0;
};

// Manage winner

models.checkForRowWin = () => {
  for (let i = 0; i < 3; i++) {
    let stack = '';
    for (let j = 0; j < 3; j++) {
      let currentPiece = document.getElementById(`r${i}-c${j}`).innerText;
      if (typeof currentPiece === 'string') {
        stack += currentPiece;
      }
    }
    let win = models.checkStatus(stack);
    if (win) {
      return win;
    }
  }
  return false;
};

models.checkForColWin = () => {
  for (let i = 0; i < 3; i++) {
    let stack = '';
    for (let j = 0; j < 3; j++) {
      let currentPiece = document.getElementById(`r${j}-c${i}`).innerText;
      if (typeof currentPiece === 'string') {
        stack += currentPiece;
      }
    }
    let win = models.checkStatus(stack);
    if (win) {
      return win;
    }
  }
  return false;
};

models.checkForMajDiagWin = () => {
  let stack = '';
  for (let i = 0; i < 3; i++) {
    let currentPiece = document.getElementById(`r${i}-c${i}`).innerText;
    if (typeof currentPiece === 'string') {
      stack += currentPiece;
    }
  }
  let win = models.checkStatus(stack);
  if (win) {
    return win;
  }
  return false;
};

models.checkForMinDiagWin = () => {
  let stack = '';
  for (let i = 0; i < 3; i++) {
    let currentPiece = document.getElementById(`r${2 - i}-c${i}`).innerText;
    if (typeof currentPiece === 'string') {
      stack += currentPiece;
    }
  }
  let win = models.checkStatus(stack);
  if (win) {
    return win;
  }
  return false;
};

models.checkStatus = (stack) => {
  if (stack === 'XXX') {
    models.gameInProgress = false;
    return 'X';
  } else if (stack === 'OOO') {
    models.gameInProgress = false;
    return 'O';
  }
  return false;
};

//// Controllers //// Request and response handling ////////

const controllers = {};

// Place piece

controllers.placePiece = (event) => {
  if (models.checkGameProgress()) {
    const {id, childNodes} = event.target.childNodes[0];
    if (id && childNodes.length === 0) {
      const {currentPiece, nextPiece} = models.getNextPiece();
      views.appendPieceToSpace(id, currentPiece);
    }
  }
};

// Reset game

controllers.resetNextPiece = () => {
  const piece = models.resetPiece();
  views.updateNextMove(piece);
};

controllers.resetGameProgress = () => {
  models.resetGameProgress();
};

// Check for winner

controllers.checkForWin = () => {
  const checks = [
    models.checkForRowWin,
    models.checkForColWin,
    models.checkForMajDiagWin,
    models.checkForMinDiagWin
  ];
  let proceedToNextMove = true;
  for (let i = 0; i < checks.length; i++) {
    let check = checks[i]();
    if (check) {
      controllers.declareWinner(check);
      proceedToNextMove = false;
      break;
    }
  }
  if (proceedToNextMove) {
    views.updateNextMove(models.nextPiece);
    let movesPlayed = models.countMove();
    if (movesPlayed === 9) {
      models.endGame();
      views.announceDraw();
    }
  }
};

// Declare winner

controllers.declareWinner = (winner) => {
  views.announceWinner(winner);
};

//// Views //// DOM manipulation and event listeners ////////

const views = {};

// Listen for click and append piece

views.spaces = document.getElementsByClassName('space');

for (let i = 0; i < views.spaces.length; i++) {
  views.spaces[i].onclick = controllers.placePiece;
}

views.appendPieceToSpace = (id, piece) => {
  const targetElement = document.getElementById(id);
  targetElement.append(piece);
  controllers.checkForWin();
};

// Update next move

views.updateNextMove = (piece) => {
  init.nextMoveIndicator.removeChild(init.nextMoveIndicator.lastChild);
  init.nextMoveIndicator.append(`Next move: ${piece}`);
};

// Reset board

views.clearBoard = () => {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const position = document.getElementById(`r${i}-c${j}`);
      if (position.lastChild) {
        position.removeChild(position.lastChild);
      }
    }
  }
  controllers.resetNextPiece();
  controllers.resetGameProgress();
};

init.resetButton.onclick = views.clearBoard;

// Announce end of game

views.announceWinner = (winner) => {
  init.nextMoveIndicator.removeChild(init.nextMoveIndicator.lastChild);
  init.nextMoveIndicator.append(`${winner} wins!`);
};

views.announceDraw = () => {
  init.nextMoveIndicator.removeChild(init.nextMoveIndicator.lastChild);
  init.nextMoveIndicator.append(`It's a draw!`);
};
