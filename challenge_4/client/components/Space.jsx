import React from 'react';
const Component = React.Component;

class Space extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handlePlacePiece = this.handlePlacePiece.bind(this);
  };

  handlePlacePiece() {
    const {row, col, onPlacePiece} = this.props;
    onPlacePiece(row, col);
  };

  render() {
    const {row, col, placedPiece} = this.props;
    const cursor = this.props.legend ? 'default' : 'pointer';
    const spaceColor = placedPiece === '' ? 'rgba(100, 100, 100, 0.1)' : placedPiece;
    const spaceStyle = {
      cursor: cursor,
      fontSize: '60px',
      color: spaceColor
    };

    return (
      <span onClick={this.handlePlacePiece} style={spaceStyle}>●&nbsp;&nbsp;</span>
    );
  };
}

export default Space;
