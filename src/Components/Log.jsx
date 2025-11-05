import React from 'react'
import '../Css/Game.css'

const Log = ({turn}) => {

  return (
    <ol id='log'>
        {turn.map((val, key) => (
            <li key={`${val.position.rowIndex}${val.position.colIndex}`}>{val.player} Selected at {val.position.rowIndex}, {val.position.colIndex}</li>
        ))}
    </ol>
  )
}

export default Log