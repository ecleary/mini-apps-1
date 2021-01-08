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
