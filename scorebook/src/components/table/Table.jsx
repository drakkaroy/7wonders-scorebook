import React, { useEffect, useState } from 'react';
import Row from '../row/Row';
import PlayerInput from '../playerInput/PlayerInput';
import ScoreInput from '../scoreInput/ScoreInput';

const Table = () => {
    const maxPlayers = 7;
    const [playersCount, setPlayersCount] = useState(0);
    const [players, setPlayers] = useState([]);

    // Row Inputs
    const [playersRow, setPlayerRow] = useState([]);
    const [wondersRow, setWonderRow] = useState([]);
    const [coinsRow, setCoinsRow] = useState([]);

    // Row Values
    const [wondervalues, setWonderValues] = useState([]);
    const [coinValues, setCoinValues] = useState([]);

    const addPlayer = (player) => {
        console.log(player.target.value);
        // setPlayers(players.concat(player));
    };

    const handleOnBlur = (player) => {
        console.log(player.target.value);
        console.log('on blur done');
        setPlayers(players.concat(player.target.value));
    };

    const handleClick = () => {
        setPlayersCount(playersCount + 1);
        if (playersCount <= maxPlayers - 1) {
            setPlayerRow(playersRow.concat(<PlayerInput onChange={addPlayer} onBlur={handleOnBlur} />));
            setWonderRow(wondersRow.concat(<ScoreInput />));
            setCoinsRow(coinsRow.concat(<ScoreInput />));
        }
    };

    useEffect(() => {
        console.log('players: ', players);
    }, [players]);

    return (
        <div className='scorebook'>
            <Row rows={playersRow} />
            <Row rows={wondersRow} />
            <Row rows={coinsRow} />
            <div>
                <button onClick={handleClick}>Add new player</button>
            </div>
        </div>
    );
};

export default Table;
