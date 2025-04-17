import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    let editablePlayerName;

    editablePlayerName = !isEditing ? (
        <span className="player-name">{playerName}</span>
    ) : (
        // <input type="text" defaultValue={name} required />
        <input type="text" value={playerName} onChange={handleChange} required />
    );

    let btnCaption = !isEditing ? 'Edit' : 'Save';

    function handleEditClick() {
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                {/* <span className="player-name">{name}</span> */}
                <span className="player-symbol">{symbol}</span>
            </span>
            {/* <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button> */}
            <button onClick={handleEditClick}>{btnCaption}</button>
        </li>
    );
}