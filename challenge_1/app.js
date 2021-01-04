//// Init //// Onload view initialization ////////

// document.body.onload = () => {
//   body.append(app);
// }

const body = document.body;
const app = document.createElement('div');
const title = document.createElement('h1');
const helloWorld = document.createTextNode('Hello, Tic-Tac-Toe World');
const gameboard = document.createElement('table');

// title.style.cssText = 'color: blue';

title.appendChild(helloWorld);
app.appendChild(title);
app.appendChild(gameboard);
body.append(app);

for (let i = 0; i < 3; i++) {
  let row = document.createElement('tr');
  row.className = `row-${i}`;
  for (let j = 0; j < 3; j++) {
    let space = document.createElement('td');
    space.className = `col-${j}`;
    let spaceFiller = document.createElement('h2');
    spaceFiller.id = `r${i}-c${j}`;
    spaceFiller.appendChild(document.createTextNode('X'));
    space.appendChild(spaceFiller);
    row.appendChild(space);
  }
  gameboard.appendChild(row);
}

const testElems1 = body.getElementsByClassName('col-1');
// const testElems1 = document.getElementsByClassName('col-1');

for (let i = 0; i < testElems1.length; i++) {
  testElems1[i].style['border-left'] = 'solid black 1px';
  // testElems1[i].setAttribute('style', 'border-left: solid black 1px');
  // testElems1[i].style.cssText = 'border-left: solid black 1px';
}






//// Views //// DOM manipulation and event listeners ////////



//// Controllers //// Request and response handling ////////



//// Models //// Data storage ////////


