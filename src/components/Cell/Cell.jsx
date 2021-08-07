import React from 'react';

export function Cell({ live }) {
  const color = live ? "black" : "white"

  const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `${color}`,
    width: "1rem",
    height: "1rem"
  }

  return <div style={styles} />
}