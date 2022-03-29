import React, { useEffect, useState } from 'react';
import styles from '../../assets/css/styles.module.css';
import Column from '../column/Column';
import Row from '../row/Row';
import PlayerInput from '../playerInput/PlayerInput';

const Table = () => {
    const maxPlayers = 7;
    const [playersCount, setPlayersCount] = useState(0);
    // const [players, setPlayers] = useState([]);
    const [rows, setRows] = useState([]);

    const addPlayer = (player) => {
        console.log(player.target.value);
        // setPlayers(players.concat(player));
    };

    const handleOnBlur = () => {
        console.log('on blur done');
    };

    const handleClick = () => {
        setPlayersCount(playersCount + 1);
        if (playersCount <= maxPlayers - 1) setRows(rows.concat(<PlayerInput onChange={addPlayer} onBlur={handleOnBlur} />));
    };

    return (
        <div className={styles.gridContainer}>
            <div>{/* <input type='text' name='player' value={player} id='' onChange={(e) => addPlayer(e.target.value)} onBlur={handleOnBlur} /> */}</div>
            <Row rows={rows} />
            <div>
                <button onClick={handleClick}>Add new player</button>
            </div>
        </div>
    );
};

export default Table;
