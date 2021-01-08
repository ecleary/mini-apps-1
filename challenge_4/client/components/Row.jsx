import React from 'react';
import Space from './Space.jsx';

const Row = (props) => {
  const {gameRow, row, onPlacePiece} = props;
  const rowOfSpaces = [];
  for (let i = 0; i < gameRow.length; i++) {
    let placedPiece = gameRow[i];
    let space = <Space key={`${row}-${i}`} row={row} col={i} onPlacePiece={onPlacePiece} placedPiece={placedPiece} />;
    rowOfSpaces.push(space);
  }

  return (
    <div>
      {rowOfSpaces}
    </div>
  );
};

export default Row;
