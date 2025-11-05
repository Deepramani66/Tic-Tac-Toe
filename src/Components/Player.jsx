import React, { use, useState } from 'react'
import '../Css/Game.css'

const Player = ({ intialName, symbol, isActive, onchangeName }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(intialName)

    const handleClick = () => {
        // setIsEditing(isEditing ? false : true);
        setIsEditing((editing) => !editing)

        if(isEditing) {
            onchangeName(symbol, playerName);
        }
    }

    const handleChange = (event) => {
        setPlayerName(event.target.value);
    }

    let editableplayername = <span className='player-name'>{playerName}</span>;
    if(isEditing) {
        editableplayername = <input type='text' defaultValue={playerName} onChange={handleChange} required></input>;
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editableplayername}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}

export default Player