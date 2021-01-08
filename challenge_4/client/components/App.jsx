import React from 'react';
const Component = React.Component;
import Row from './Row.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameBoard: [],
      nextPiece: ''//,
      /*r0c0: [], r0c1: [], r0c2: [], r0c3: [], r0c4: [], r0c5: [], r0c6: [], r1c0: [], r1c1: [], r1c2: [], r1c3: [], r1c4: [], r1c5: [], r1c6: [], r2c0: [], r2c1: [], r2c2: [], r2c3: [], r2c4: [], r2c5: [], r2c6: [], r3c0: [], r3c1: [], r3c2: [], r3c3: [], r3c4: [], r3c5: [], r3c6: [], r4c0: [], r4c1: [], r4c2: [], r4c3: [], r4c4: [], r4c5: [], r4c6: [], r5c0: [], r5c1: [], r5c2: [], r5c3: [], r5c4: [], r5c5: [], r5c6: []*/
    };
    this.determineFirstPiece = this.determineFirstPiece.bind(this);
    this.toggleNextPiece = this.toggleNextPiece.bind(this);
    this.handlePlacePiece = this.handlePlacePiece.bind(this);
    this.checkSpaceAvailability = this.checkSpaceAvailability.bind(this);
    this.checkGravity = this.checkGravity.bind(this);
  };

  componentDidMount() {
    this.setState({
      gameBoard: [
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '']
      ],
      /*
      r0c0: this.state.gameBoard[0][0], r0c1: this.state.gameBoard[0][1], r0c2: this.state.gameBoard[0][2], r0c3: this.state.gameBoard[0][3], r0c4: this.state.gameBoard[0][4], r0c5: this.state.gameBoard[0][5], r0c6: this.state.gameBoard[0][6], r1c0: this.state.gameBoard[1][0], r1c1: this.state.gameBoard[1][1], r1c2: this.state.gameBoard[1][2], r1c3: this.state.gameBoard[1][3], r1c4: this.state.gameBoard[1][4], r1c5: this.state.gameBoard[1][5], r1c6: this.state.gameBoard[1][6], r2c0: this.state.gameBoard[2][0], r2c1: this.state.gameBoard[2][1], r2c2: this.state.gameBoard[2][2], r2c3: this.state.gameBoard[2][3], r2c4: this.state.gameBoard[2][4], r2c5: this.state.gameBoard[2][5], r2c6: this.state.gameBoard[2][6], r3c0: this.state.gameBoard[3][0], r3c1: this.state.gameBoard[3][1], r3c2: this.state.gameBoard[3][2], r3c3: this.state.gameBoard[3][3], r3c4: this.state.gameBoard[3][4], r3c5: this.state.gameBoard[3][5], r3c6: this.state.gameBoard[3][6], r4c0: this.state.gameBoard[4][0], r4c1: this.state.gameBoard[4][1], r4c2: this.state.gameBoard[4][2], r4c3: this.state.gameBoard[4][3], r4c4: this.state.gameBoard[4][4], r4c5: this.state.gameBoard[4][5], r4c6: this.state.gameBoard[4][6], r5c0: this.state.gameBoard[5][0], r5c1: this.state.gameBoard[5][1], r5c2: this.state.gameBoard[5][2], r5c3: this.state.gameBoard[5][3], r5c4: this.state.gameBoard[5][4], r5c5: this.state.gameBoard[5][5], r5c6: this.state.gameBoard[5][6],
      */
      nextPiece: this.determineFirstPiece()
    });
  };

  determineFirstPiece() {
    const pieces = ['black', 'red'];
    const coinFlip = Math.floor(Math.random() * 2);
    return pieces[coinFlip];
  };

  toggleNextPiece() {
    const {nextPiece} = this.state;
    // console.log(nextPiece);
    const toggledNextPiece = nextPiece === 'black' ? 'red' : 'black';
    // console.log(toggledNextPiece);
    return toggledNextPiece;
  };

  handlePlacePiece(rowNum, colNum) {
    // console.log(`rowNum: ${rowNum}, colNum: ${colNum}`);
    const {gameBoard, nextPiece} = this.state;
    if (this.checkSpaceAvailability(rowNum, colNum) && this.checkGravity(rowNum, colNum)) {
      const updatedGameBoard = gameBoard.slice();
      updatedGameBoard[rowNum][colNum] = nextPiece;
      // console.log(updatedGameBoard);
      // const spaceToPlace = `r${rowNum}c${colNum}`;
      // console.log(spaceToPlace);
      // const pieceToPlace = nextPiece;
      // gameBoard[rowNum][colNum] = nextPiece;
      this.setState({
        gameBoard: updatedGameBoard,
        nextPiece: this.toggleNextPiece()
      });
      // console.log(this.state);
    }
  };

  checkSpaceAvailability(rowNum, colNum) {
    const {gameBoard} = this.state;
    // console.log(gameBoard[rowNum][colNum] === '');
    return gameBoard[rowNum][colNum] === '';
  };

  checkGravity(rowNum, colNum) {
    const {gameBoard} = this.state;
    if (rowNum === 5) {
      return true;
    } else if (gameBoard[rowNum + 1][colNum] !== '') {
      return true;
    }
    return false;
  };

  render() {
    const {gameBoard} = this.state;
    const board = [];
    for (let i = 0; i < gameBoard.length; i++) {
      let row = <Row key={i} gameRow={gameBoard[i]} rowNum={i} onPlacePiece={this.handlePlacePiece} />;
      board.push(row);
    }

    return (
      <div>
      <h1>Connect Four</h1>
      {board}
      </div>
    );
  };
}

export default App;
