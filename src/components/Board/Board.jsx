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
  console.log({ board })

  for (let i = 0; i < board.length; i++) {
    console.log('row')
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[i][j];
      console.log({ cell })
    }
  }
}

export function Board({ size }) {
  const initialBoard = generateBoard(size);
  populateBoard(initialBoard, size);

  const [board, setBoard] = useState(initialBoard);

  useEffect(() => {
    const setGeneration = () => {
      const nextBoard = getNextBoard(board);

      setBoard([...board]);
    };
    const timeout = setTimeout(setGeneration, 5000);

    return function cleanup() {
      clearTimeout(timeout)
    }
  }, [])


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