import React, { useState } from 'react';
import { Cell } from '../Cell'

const generateBoard = (columnCount, rowCount) => {
  const board = []

  for (let i = 0; i < columnCount; i++) {
    board.push(Array(rowCount).fill(0))
  }

  return board;
}

const populateBoard = (board, columns, rows, count) => {

  for (let i = 0; i < count; i++) {
    const randomY = Math.floor(Math.random() * columns)
    const randomX = Math.floor(Math.random() * rows)

    board[randomY][randomX] = 1
  }
}

export function Board({ columns, rows }) {
  const initialBoard = generateBoard(columns, rows);
  populateBoard(initialBoard, columns, rows, 5)

  const [board, setBoard] = useState(initialBoard);

  const styles = {
    border: "solid 1px black",
  }

  const rowStyles = {
    display: "flex"
  }

  return (
    <div style={styles}>
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