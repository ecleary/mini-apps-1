import React from 'react';
const Component = React.Component;
import Row from './Row.jsx';
import Space from './Space.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameBoard: [],
      nextPiece: '',
      gameInProgress: true
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

  handlePlacePiece(row, col) {
    const {gameBoard, nextPiece} = this.state;
    if (this.checkSpaceAvailability(row, col) && this.checkGravity(row, col)) {
      const updatedGameBoard = gameBoard.slice();
      updatedGameBoard[row][col] = nextPiece;
      this.setState({
        gameBoard: updatedGameBoard,
        nextPiece: this.toggleNextPiece()
      });
    }
  };

  checkSpaceAvailability(row, col) {
    const {gameBoard} = this.state;
    return gameBoard[row][col] === '';
  };

  checkGravity(row, col) {
    const {gameBoard} = this.state;
    if (row === 5) {
      return true;
    } else if (gameBoard[row + 1][col] !== '') {
      return true;
    }
    return false;
  };

  render() {
    const {gameBoard, nextPiece, gameInProgress} = this.state;
    const board = [];
    for (let i = 0; i < gameBoard.length; i++) {
      let row = <Row key={i} gameRow={gameBoard[i]} row={i} onPlacePiece={this.handlePlacePiece} />;
      board.push(row);
    }
    let message;
    if (gameInProgress) {
      message = (
        <div>
          <span style={{display: 'flex', alignItems:'center'}}>
            Next move: <Space placedPiece={nextPiece} legend={true} onPlacePiece={() => {}} />
          </span>
        </div>
      );
    } else {
      message = null;
    }

    return (
      <div>
        <h1>Connect Four</h1>
        {board}
        {message}
      </div>
    );
  };
}

export default App;
