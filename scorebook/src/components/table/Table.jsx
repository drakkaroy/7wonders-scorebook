import React, { useEffect, useState } from 'react';
import Row from '../row/Row';
import PlayerInput from '../playerInput/PlayerInput';
import ScoreInput from '../scoreInput/ScoreInput';
import ScoreRow from '../scoreRow/ScoreRow';

const Table = () => {
    const maxPlayers = 7;
    const [playersCount, setPlayersCount] = useState(0);
    const [players, setPlayers] = useState([]);
    const index = playersCount - 1;
    const [pointer, setPointer] = useState(null);

    // Row Inputs
    const [playersRow, setPlayerRow] = useState([]);
    const [wondersRow, setWondersRow] = useState([]);
    const [coinsRow, setCoinsRow] = useState([]);

    // Row Values
    const [wonderValues, setWonderValues] = useState([]);
    const [coinValues, setCoinValues] = useState([]);
    const [scoreValues, setScoreValues] = useState([]);

    const addPlayer = (player) => {
        // console.log(player.target.value);
        // setPlayers(players.concat(player));
    };

    const getColumnValues = (index) => {
        const column = [];
        column.push(wonderValues[index]);
        column.push(coinValues[index]);
        return column;
    };

    const addValues = () => {
        // Fill array values with 0 each new player
        setWonderValues((wonderValues) => [...wonderValues, 0]);
        setCoinValues((coinValues) => [...coinValues, 0]);
        setScoreValues((scoreValues) => [...scoreValues, 0]);
    };

    const addRows = () => {
        setPlayerRow((playersRow) => [
            ...playersRow,
            <PlayerInput onChange={addPlayer} onBlur={handleBlurNewPlayer} />,
        ]);
        setWondersRow((wondersRow) => [
            ...wondersRow,
            <ScoreInput onBlur={handleBlurWonderInput} index={index} />,
        ]);
        setCoinsRow((coinsRow) => [
            ...coinsRow,
            <ScoreInput onBlur={handleBlurCoinInput} index={index} />,
        ]);
    };

    const sumColumnValues = (column) => {
        return column.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            0
        );
    };

    const updateScoreValue = () => {
        const pointerPosition = Math.floor(pointer / 10);
        const columnValues = getColumnValues(pointerPosition);
        const score = sumColumnValues(columnValues);

        setScoreValues((prev) => {
            return prev.map((item, idx) =>
                idx === pointerPosition ? score : item
            );
        });
    };

    const handleClickNewPlayer = () => {
        if (playersCount <= maxPlayers - 1) {
            setPlayersCount(playersCount + 1);
        }
    };

    const handleBlurNewPlayer = (event) => {
        const newPlayer = event.target.value;
        setPlayers((prev) => [...prev, newPlayer]);
    };

    const handleBlurWonderInput = (event) => {
        const indexAttribute = event.target.attributes['data-position'].value;
        const wonderPointer = 10 * indexAttribute + 1;
        const value = event.target.value !== '' ? event.target.value : 0;

        setWonderValues((wonderValues) => {
            return wonderValues.map((item, index) =>
                index === parseInt(indexAttribute) ? parseInt(value) : item
            );
        });

        setPointer(wonderPointer);
    };

    const handleBlurCoinInput = (event) => {
        const indexAttribute = event.target.attributes['data-position'].value;
        const coinPointer = 10 * indexAttribute + 2;
        const value = event.target.value !== '' ? event.target.value : 0;

        setCoinValues((coinValues) => {
            return coinValues.map((item, index) =>
                index === parseInt(indexAttribute) ? parseInt(value) : item
            );
        });

        setPointer(coinPointer);
    };

    useEffect(() => {
        if (index >= 0 && index <= maxPlayers) {
            addRows();
            addValues();
        }
    }, [playersCount]);

    useEffect(() => {
        if (pointer) {
            updateScoreValue();
        }
    }, [pointer]);

    useEffect(() => {
        console.log('players: ', players);
    }, [players]);

    useEffect(() => {
        if (wonderValues.length > 0) {
            // console.log('wonder values: ', wonderValues);
        }
    }, [wonderValues]);

    useEffect(() => {
        if (coinValues.length > 0) {
            // console.log('coin values: ', coinValues);
        }
    }, [coinValues]);

    useEffect(() => {
        if (scoreValues.length > 0) {
            // console.log('score values: ', scoreValues);
        }
    }, [scoreValues]);

    return (
        <div className='scorebook'>
            <Row rows={playersRow} />
            <Row rows={wondersRow} />
            <Row rows={coinsRow} />
            {index >= 0 && scoreValues.length > 0 && (
                <ScoreRow
                    scoreValues={scoreValues}
                    index={index}
                    players={players}
                />
            )}
            <div>
                <button onClick={handleClickNewPlayer}>Add new player</button>
            </div>
        </div>
    );
};

export default Table;
