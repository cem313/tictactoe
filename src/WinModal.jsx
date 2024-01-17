import React from 'react'
import "./WinModal.css"

function WinModal({ winner, refreshBoard }) {
  return (
    <div className='win-modal'>
      <p className='gray-text'> {winner === "O" ? "CPU " : "YOU"}{winner === "" ? "TIED :(" : "WON!"}</p>
      <h1 className='turquoise-text'>{winner} TAKES THE ROUND</h1>
      <div className='win-modal__actions'>
        <button className='quit' onClick={refreshBoard}>QUIT</button>
        <button className='next-round' onClick={refreshBoard}>NEXT ROUND</button>
      </div>
    </div>

  )
}

export default WinModal