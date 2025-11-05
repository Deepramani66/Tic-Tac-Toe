import React, { useState } from 'react'
import '../Css/Game.css'



const GameBoard = ({ onSelectsqure, board }) => {

    // const[gameboard, setGameboard] = useState(intialGameBoard);

    // const handleclick = (rowindex, colindex) => {
    //     setGameboard((pastboard) => {
    //         let updatedboard = [...pastboard.map(innerarray => [...innerarray])]
    //         updatedboard[rowindex][colindex] = activeplayersymbol;
    //         return updatedboard;
    //     })

    //     onSelectsqure();
    // }



    return (
        <ol id="game-board">
            {board.map((row, rowindex) => <li key={rowindex}>
                <ol>
                    {row.map((col, colindex) => 
                        <li key={colindex}>
                            <button onClick={() => onSelectsqure(rowindex, colindex)} disabled={col !== null}>
                                {col}
                            </button>
                        </li>
                        )
                    }
                </ol>
            </li>)}
        </ol>
    )
}

export default GameBoard