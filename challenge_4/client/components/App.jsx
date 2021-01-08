import React from 'react';
const Component = React.Component;
import Row from './Row.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameBoard: [],
      nextPiece: ''
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
    const toggledNextPiece = nextPiece === 'black' ? 'red' : 'black';
    return toggledNextPiece;
  };

  handlePlacePiece(rowNum, colNum) {
    const {gameBoard, nextPiece} = this.state;
    if (this.checkSpaceAvailability(rowNum, colNum) && this.checkGravity(rowNum, colNum)) {
      const updatedGameBoard = gameBoard.slice();
      updatedGameBoard[rowNum][colNum] = nextPiece;
      this.setState({
        gameBoard: updatedGameBoard,
        nextPiece: this.toggleNextPiece()
      });
    }
  };

  checkSpaceAvailability(rowNum, colNum) {
    const {gameBoard} = this.state;
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
