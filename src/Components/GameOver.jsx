import React from 'react'
import '../Css/Game.css'

const GameOver = ({winner, onClick}) => {
  return (
    <div id='game-over'>
        <h2>GameOver</h2>
        <p>{winner} WON!</p>

        <button onClick={onClick}>Rematch!</button>
    </div>
  )
}

export default GameOver