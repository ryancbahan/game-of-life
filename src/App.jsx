import React from 'react'
import { Board } from './components/Board'

const SIZE = 100;
const FRAMERATE = 50;

const styles = {
  width: "100vw",
  height: "100vh",
  overflow: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

function App() {
  return (
    <div style={styles}>
      <Board size={SIZE} frameRate={FRAMERATE} />
    </div>
  )
}

export default App
