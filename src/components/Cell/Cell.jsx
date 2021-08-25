import React from 'react';

export function Cell({ live }) {
  const color = live ? "black" : "white"

  const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `${color}`,
    width: "0.5rem",
    height: "0.5rem"
  }

  return <div style={styles} />
}