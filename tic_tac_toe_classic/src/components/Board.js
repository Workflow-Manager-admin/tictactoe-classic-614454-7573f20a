import React from 'react';

// PUBLIC_INTERFACE
const Board = ({ squares, onClick }) => {
  /**
   * Renders a 3x3 grid of squares for the TicTacToe game
   * @param {Array} squares - Array of 9 elements representing the board state
   * @param {Function} onClick - Callback function when a square is clicked
   */
  return (
    <div className="game-board">
      {squares.map((square, index) => (
        <button
          key={index}
          className="square"
          onClick={() => onClick(index)}
        >
          {square}
        </button>
      ))}
    </div>
  );
};

export default Board;
