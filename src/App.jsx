import React, { useState } from 'react'
import { Board } from './components/Board'

const SIZE = 5;

const styles = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={styles}>
      <Board size={SIZE} />
    </div>
  )
}

export default App
