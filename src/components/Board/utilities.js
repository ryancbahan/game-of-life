export function generateBoard(size) {
  const board = [];

  for (let i = 0; i < size; i++) {
    const rows = [];

    for (let j = 0; j < size; j++) {
      rows.push(Math.round(Math.random()));
    }

    board.push(rows);
  }

  return board;
}

export function getNextBoard(board) {
  const newBoard = [];

  for (let i = 0; i < board.length; i++) {
    const newRow = [];

    for (let j = 0; j < board[i].length; j++) {
      let liveNeighbors = 0;

      const cell = board[i][j];
      const isCurrentlyAlive = Boolean(cell);
      const isFirstRow = i === 0;
      const isLastRow = i === board.length - 1;

      if (!isFirstRow) {
        liveNeighbors += board[i - 1][j];
        liveNeighbors += board[i - 1][j - 1];
        liveNeighbors += board[i - 1][j + 1];
      }

      if (!isLastRow) {
        liveNeighbors += board[i + 1][j];
        liveNeighbors += board[i + 1][j - 1];
        liveNeighbors += board[i + 1][j + 1];
      }

      liveNeighbors += board[i][j - 1];
      liveNeighbors += board[i][j + 1];

      if (!isCurrentlyAlive && liveNeighbors !== 3
        || isCurrentlyAlive && liveNeighbors > 3
        || isCurrentlyAlive && liveNeighbors < 2) {
        newRow.push(0)
      }

      if (isCurrentlyAlive && liveNeighbors > 1 && liveNeighbors < 4) {
        newRow.push(1)
      }

      if (!isCurrentlyAlive && liveNeighbors === 3) {
        newRow.push(1)
      }
    }

    newBoard.push(newRow);
  }
  return newBoard;
}