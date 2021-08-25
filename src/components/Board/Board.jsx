import React, { useState, useEffect } from 'react';
import { Cell } from '../Cell'
import { generateBoard, getNextBoard } from './utilities';

export function Board({ size, frameRate }) {
  const initialBoard = generateBoard(size);

  const [board, setBoard] = useState(initialBoard);

  useEffect(() => {
    const setGeneration = () => {
      const nextBoard = getNextBoard(board);

      setBoard(nextBoard);
    };

    const timeout = setTimeout(setGeneration, frameRate);

    return function cleanup() {
      clearTimeout(timeout)
    }
  })

  const rowStyles = {
    display: "flex"
  }

  return (
    <div>
      {
        board.map((row, index) => {
          return <div key={index} style={rowStyles}>
            {row.map((value, index) => {
              return <Cell key={index} live={value} />
            }
            )}
          </div>
        })
      }
    </div>)
}