import React, { useState } from 'react';
import Player from './Player'
import GameBoard from './GameBoard';
import '../Css/Game.css';
import { WINNING_COMBINATIONS } from '../assets/winning_combinations'
import Log from './Log'
import GameOver from './GameOver';

let intialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

const Game = () => {

  const [activeplayer, setActiveplayer] = useState('X');
  const [gameturn, setGameturn] = useState([]);
  const [players, setPlayers] = useState({
    'X' : 'Player 1',
    'O' : 'Player 2'
  })

  let gameboard = [...intialGameBoard.map(innerarray => [...innerarray])];

  for (const i of gameturn) {
    const { position, player } = i;
    const { rowIndex, colIndex } = position;

    gameboard[rowIndex][colIndex] = player;
  }

  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameboard[combination[0].row][combination[0].col]
    const secondSquare = gameboard[combination[1].row][combination[1].col]
    const thirdSquare = gameboard[combination[2].row][combination[2].col]

    if (firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare) {
      winner = players[firstSquare];
      break;
    }

    if (gameturn.length === 9 && !winner) {
      winner = 'Draw!';
    }
  }

  const handleselectsqure = (row, col) => {
    setActiveplayer((currentplayer) => currentplayer === 'X' ? 'O' : 'X');

    setGameturn((prevturn) => {

      let currentPlayer = activeplayer;
      if (prevturn.length > 0 && prevturn[0].player === 'X') {
        currentPlayer = 'O';
      }

      const updatedturn = [{ position: { rowIndex: row, colIndex: col }, player: currentPlayer },
      ...prevturn]
      return updatedturn;
    })
  }

  const restart = () => {
    setGameturn([]);
    setActiveplayer('O')
  }

  const handleplayernamecange = (symbol, newName) => {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]:newName
      }
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id='players' className='highlight-player'>
          <Player intialName="Player 1" symbol="X" isActive={activeplayer === 'X'} onchangeName={handleplayernamecange} />
          <Player intialName='Player 2' symbol="O" isActive={activeplayer === 'O'} onchangeName={handleplayernamecange}/>
        </ol>

        {winner && <GameOver winner={winner} onClick={restart}/>}
        <GameBoard onSelectsqure={handleselectsqure} board={gameboard} />
      </div>

      <Log turn={gameturn} />
    </main>
  )
}

export default Game