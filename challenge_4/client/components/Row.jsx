import React from 'react';
import Space from './Space.jsx';

const Row = (props) => {
  const {gameRow, rowNum, onPlacePiece} = props;
  const row = [];
  for (let i = 0; i < gameRow.length; i++) {
    let placedPiece = gameRow[i];
    let space = <Space key={i} rowNum={rowNum} colNum={i} onPlacePiece={onPlacePiece} placedPiece={placedPiece} />;
    row.push(space);
  }

  return (
    <div>
      {row}
    </div>
  );
};

export default Row;
