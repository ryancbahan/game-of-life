import React, { useState, useEffect } from 'react';
import { Cell } from '../Cell'

const generateBoard = (size) => {
  const board = []

  for (let i = 0; i < size; i++) {
    board.push(Array(size).fill(0))
  }

  return board;
}

const populateBoard = (board, size) => {

  for (let i = 0; i < size * 2; i++) {
    const getRandomNumber = () => Math.floor(Math.random() * size);

    board[getRandomNumber()][getRandomNumber()] = 1;
  }
}

function getNextBoard(board) {
  const newBoard = [];

  for (let i = 0; i < board.length; i++) {
    const newRow = [];

    for (let j = 0; j < board[i].length; j++) {
      let liveNeighbors = 0;

      const cell = board[i][j];
      const isCurrentlyAlive = Boolean(cell);
      const isFirstRow = i === 0;
      const isLastRow = i === board.length - 1;
      const isFirstItem = j === 0;
      const isLastItem = j === board[i].length - 1;

      if (!isFirstRow) {
        if (board[i - 1][j]) {
          liveNeighbors++
        }
        if (board[i - 1][j - 1]) {
          liveNeighbors++
        }
        if (board[i - 1][j + 1]) {
          liveNeighbors++
        }
      }

      if (!isLastRow) {
        if (board[i + 1][j]) {
          liveNeighbors++
        }
        if (board[i + 1][j - 1]) {
          liveNeighbors++
        }
        if (board[i + 1][j + 1]) {
          liveNeighbors++
        }
      }

      if (!isFirstItem) {
        if (board[i][j - 1]) {
          liveNeighbors++
        }
      }

      if (!isLastItem) {
        if (board[i][j + 1]) {
          liveNeighbors++
        }
      }

      if (!isCurrentlyAlive && liveNeighbors !== 3) {
        newRow.push(0)
      }

      if (!isCurrentlyAlive && liveNeighbors === 3) {
        newRow.push(1)
      }

      if (isCurrentlyAlive && liveNeighbors > 3) {
        newRow.push(0)
      }

      if (isCurrentlyAlive && liveNeighbors < 2) {
        newRow.push(0)
      }

      if (isCurrentlyAlive && liveNeighbors > 1 && liveNeighbors < 4) {
        newRow.push(1)
      }
    }

    newBoard.push(newRow);
  }
  return newBoard;
}

export function Board({ size }) {
  const initialBoard = generateBoard(size);
  populateBoard(initialBoard, size);

  const [board, setBoard] = useState(initialBoard);

  useEffect(() => {
    const setGeneration = () => {
      const nextBoard = getNextBoard(board);

      setBoard(nextBoard);
    };
    const timeout = setTimeout(setGeneration, 1000);

    return function cleanup() {
      clearTimeout(timeout)
    }
  })


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