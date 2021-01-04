//// Init //// View initialization on first load ////////

// document.body.onload = () => {
//   body.append(app);
// }

const body = document.body;
const app = document.createElement('div');
const title = document.createElement('h1');
const helloWorld = document.createTextNode('Hello, Tic-Tac-Toe World');
const gameboard = document.createElement('table');

title.appendChild(helloWorld);
app.appendChild(title);
app.appendChild(gameboard);
body.append(app);

for (let i = 0; i < 3; i++) {
  let row = document.createElement('tr');
  row.className = `row-${i}`;
  for (let j = 0; j < 3; j++) {
    let space = document.createElement('td');
    space.className = `row-${i} col-${j}`;
    space.style.cssText = 'width: 70px; height: 70px; text-align: center;';
    let spaceFiller = document.createElement('h1');
    spaceFiller.id = `r${i}-c${j}`;
    spaceFiller.appendChild(document.createTextNode('X'));
    space.appendChild(spaceFiller);
    row.appendChild(space);
  }
  gameboard.appendChild(row);
}

const middleColumn = document.getElementsByClassName('col-1');
const middleRow = document.getElementsByClassName('row-1');

for (let i = 0; i < middleColumn.length; i++) {
  let currentStyle = middleColumn[i].getAttribute('style');
  currentStyle = currentStyle ? ' ' + currentStyle : '';
  middleColumn[i].style.cssText = 'border-left: 3px solid black; border-right: 3px solid black;' + currentStyle;
}

for (let i = 0; i < middleRow.length; i++) {
  let currentStyle = middleRow[i].getAttribute('style');
  currentStyle = currentStyle ? ' ' + currentStyle : '';
  middleRow[i].style.cssText = 'border-top: 3px solid black; border-bottom: 3px solid black;' + currentStyle;
}






//// Views //// DOM manipulation and event listeners ////////



//// Controllers //// Request and response handling ////////



//// Models //// Data storage ////////


