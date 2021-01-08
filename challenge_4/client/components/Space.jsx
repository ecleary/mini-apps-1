import React from 'react';
const Component = React.Component;

class Space extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handlePlacePiece = this.handlePlacePiece.bind(this);
  };

  handlePlacePiece() {
    const {rowNum, colNum, onPlacePiece} = this.props;
    onPlacePiece(rowNum, colNum);
  };

  render() {
    const {rowNum, colNum, placedPiece} = this.props;
    let spaceColor = placedPiece === ''
      ? 'rgba(100, 100, 100, 0.1)'
      : placedPiece;
    const spaceStyle = {
      cursor: 'pointer',
      fontSize: '60px',
      color: spaceColor
    };

    return (
      <span onClick={this.handlePlacePiece} style={spaceStyle}>●&nbsp;&nbsp;</span>
    );
  };
}

export default Space;

// const thing = {r0c0: '', r0c1: '', r0c2: '', r0c3: '', r0c4: '', r0c5: '', r0c6: '', r1c0: '', r1c1: '', r1c2: '', r1c3: '', r1c4: '', r1c5: '', r1c6: '', r2c0: '', r2c1: '', r2c2: '', r2c3: '', r2c4: '', r2c5: '', r2c6: '', r3c0: '', r3c1: '', r3c2: '', r3c3: '', r3c4: '', r3c5: '', r3c6: '', r4c0: '', r4c1: '', r4c2: '', r4c3: '', r4c4: '', r4c5: '', r4c6: '', r5c0: '', r5c1: '', r5c2: '', r5c3: '', r5c4: '', r5c5: '', r5c6: ''};

// this.state = {
//   r0c0: '', r0c1: '', r0c2: '', r0c3: '', r0c4: '', r0c5: '', r0c6: '',
//   r1c0: '', r1c1: '', r1c2: '', r1c3: '', r1c4: '', r1c5: '', r1c6: '',
//   r2c0: '', r2c1: '', r2c2: '', r2c3: '', r2c4: '', r2c5: '', r2c6: '',
//   r3c0: '', r3c1: '', r3c2: '', r3c3: '', r3c4: '', r3c5: '', r3c6: '',
//   r4c0: '', r4c1: '', r4c2: '', r4c3: '', r4c4: '', r4c5: '', r4c6: '',
//   r5c0: '', r5c1: '', r5c2: '', r5c3: '', r5c4: '', r5c5: '', r5c6: '',
//   nextPiece: ''
// };

/*
this.state = { r0c0: this.state.gameBoard[0][0], r0c1: this.state.gameBoard[0][1], r0c2: this.state.gameBoard[0][2], r0c3: this.state.gameBoard[0][3], r0c4: this.state.gameBoard[0][4], r0c5: this.state.gameBoard[0][5], r0c6: this.state.gameBoard[0][6], r1c0: this.state.gameBoard[1][0], r1c1: this.state.gameBoard[1][1], r1c2: this.state.gameBoard[1][2], r1c3: this.state.gameBoard[1][3], r1c4: this.state.gameBoard[1][4], r1c5: this.state.gameBoard[1][5], r1c6: this.state.gameBoard[1][6], r2c0: this.state.gameBoard[2][0], r2c1: this.state.gameBoard[2][1], r2c2: this.state.gameBoard[2][2], r2c3: this.state.gameBoard[2][3], r2c4: this.state.gameBoard[2][4], r2c5: this.state.gameBoard[2][5], r2c6: this.state.gameBoard[2][6], r3c0: this.state.gameBoard[3][0], r3c1: this.state.gameBoard[3][1], r3c2: this.state.gameBoard[3][2], r3c3: this.state.gameBoard[3][3], r3c4: this.state.gameBoard[3][4], r3c5: this.state.gameBoard[3][5], r3c6: this.state.gameBoard[3][6], r4c0: this.state.gameBoard[4][0], r4c1: this.state.gameBoard[4][1], r4c2: this.state.gameBoard[4][2], r4c3: this.state.gameBoard[4][3], r4c4: this.state.gameBoard[4][4], r4c5: this.state.gameBoard[4][5], r4c6: this.state.gameBoard[4][6], r5c0: this.state.gameBoard[5][0], r5c1: this.state.gameBoard[5][1], r5c2: this.state.gameBoard[5][2], r5c3: this.state.gameBoard[5][3], r5c4: this.state.gameBoard[5][4], r5c5: this.state.gameBoard[5][5], r5c6: this.state.gameBoard[5][6], nextPiece: '' };


this.state = { r0c0: [], r0c1: [], r0c2: [], r0c3: [], r0c4: [], r0c5: [], r0c6: [], r1c0: [], r1c1: [], r1c2: [], r1c3: [], r1c4: [], r1c5: [], r1c6: [], r2c0: [], r2c1: [], r2c2: [], r2c3: [], r2c4: [], r2c5: [], r2c6: [], r3c0: [], r3c1: [], r3c2: [], r3c3: [], r3c4: [], r3c5: [], r3c6: [], r4c0: [], r4c1: [], r4c2: [], r4c3: [], r4c4: [], r4c5: [], r4c6: [], r5c0: [], r5c1: [], r5c2: [], r5c3: [], r5c4: [], r5c5: [], r5c6: [], nextPiece: '' };
*/