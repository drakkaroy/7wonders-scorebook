import React, { useEffect, useState } from 'react';
import Row from '../row/Row';
import PlayersRow from '../playersRow/PlayersRow';
import Input from '../input/Input';

const Table = () => {
    const maxPlayers = 7;
    const [playersCount, setPlayersCount] = useState(0);
    const [players, setPlayers] = useState([]);
    const index = playersCount - 1;
    const [pointer, setPointer] = useState(null);

    // Row Inputs
    const [wondersRow, setWondersRow] = useState([]);
    const [coinsRow, setCoinsRow] = useState([]);
    const [warsRow, setWarsRow] = useState([]);
    const [civilsRow, setCivilsRow] = useState([]);
    const [tradesRow, setTradesRow] = useState([]);
    const [sciencesRow, setSciencesRow] = useState([]);
    const [guildsRow, setGuildsRow] = useState([]);

    // Row Values
    const [wonderValues, setWonderValues] = useState([]);
    const [coinValues, setCoinValues] = useState([]);
    const [warValues, setWarValues] = useState([]);
    const [civilValues, setCivilValues] = useState([]);
    const [tradeValues, setTradeValues] = useState([]);
    const [scienceValues, setScienceValues] = useState([]);
    const [guildValues, setGuildValues] = useState([]);
    const [scoreValues, setScoreValues] = useState([]);
    

    const getColumnValues = (index) => {
        const column = [];
        column.push(wonderValues[index]);
        column.push(coinValues[index]);
        column.push(warValues[index]);
        column.push(civilValues[index]);
        column.push(tradeValues[index]);
        column.push(scienceValues[index]);
        column.push(guildValues[index]);
        return column;
    };

    const addValues = () => {
        // Fill array values with 0 each new player
        setPlayers((players) => [...players, '']);
        setWonderValues((wonderValues) => [...wonderValues, 0]);
        setCoinValues((coinValues) => [...coinValues, 0]);
        setWarValues((warValues) => [...warValues, 0]);
        setCivilValues((prev) => [...prev, 0]);
        setTradeValues((prev) => [...prev, 0]);
        setScienceValues((prev) => [...prev, 0]);
        setGuildValues((prev) => [...prev, 0]);
        setScoreValues((scoreValues) => [...scoreValues, 0]);
    };

    const addRows = () => {
        setWondersRow((wondersRow) => [
            ...wondersRow,
            <Input 
                type='number' 
                onBlur={handleBlurWonderInput} 
                index={index} 
                classes='scorebook__input bg-gray'
            />,
        ]);
        setCoinsRow((coinsRow) => [
            ...coinsRow,
            <Input 
                type='number' 
                onBlur={handleBlurCoinInput} 
                index={index} 
                classes='scorebook__input bg-orange'
            />,
        ]);
        setWarsRow((warsRow) => [
            ...warsRow,
            <Input 
                type='number' 
                onBlur={handleBlurWarInput} 
                index={index} 
                classes='scorebook__input bg-red'
            />,
        ]);
        setCivilsRow((prev) => [
            ...prev,
            <Input 
                type='number' 
                onBlur={handleBlurCivilInput} 
                index={index} 
                classes='scorebook__input bg-blue'
            />,
        ]);
        setTradesRow((prev) => [
            ...prev,
            <Input 
                type='number' 
                onBlur={handleBlurTradeInput} 
                index={index} 
                classes='scorebook__input bg-orange'
            />,
        ]);
        setSciencesRow((prev) => [
            ...prev,
            <Input 
                type='number' 
                onBlur={handleBlurScienceInput} 
                index={index} 
                classes='scorebook__input bg-green'
            />,
        ]);
        setGuildsRow((prev) => [
            ...prev,
            <Input 
                type='number' 
                onBlur={handleBlurGuildInput} 
                index={index} 
                classes='scorebook__input bg-gray'
            />,
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

    const handleChangeNewPlayer = (event) => {
        // console.log(event.target.value);
    };

    const handleBlurNewPlayer = (event) => {
        const newPlayer = event.target.value;
        const indexAttribute = event.target.attributes['data-position'].value;
        if (newPlayer !== '') {
            setPlayers((players) => {
                return players.map((item, index) =>
                    index === parseInt(indexAttribute) ? newPlayer : item
                );
            });
        }
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

    const handleBlurWarInput = (event) => {
        const indexAttribute = event.target.attributes['data-position'].value;
        const warPointer = 10 * indexAttribute + 3;
        const value = event.target.value !== '' ? event.target.value : 0;

        setWarValues((warValues) => {
            return warValues.map((item, index) =>
                index === parseInt(indexAttribute) ? parseInt(value) : item
            );
        });

        setPointer(warPointer);
    };

    const handleBlurCivilInput = (event) => {
        const indexAttribute = event.target.attributes['data-position'].value;
        const pointer = 10 * indexAttribute + 4;
        const value = event.target.value !== '' ? event.target.value : 0;

        setCivilValues((prev) => {
            return prev.map((item, index) =>
                index === parseInt(indexAttribute) ? parseInt(value) : item
            );
        });

        setPointer(pointer);
    };

    const handleBlurTradeInput = (event) => {
        const indexAttribute = event.target.attributes['data-position'].value;
        const pointer = 10 * indexAttribute + 5;
        const value = event.target.value !== '' ? event.target.value : 0;

        setTradeValues((prev) => {
            return prev.map((item, index) =>
                index === parseInt(indexAttribute) ? parseInt(value) : item
            );
        });

        setPointer(pointer);
    };

    const handleBlurScienceInput = (event) => {
        const indexAttribute = event.target.attributes['data-position'].value;
        const pointer = 10 * indexAttribute + 6;
        const value = event.target.value !== '' ? event.target.value : 0;

        setScienceValues((prev) => {
            return prev.map((item, index) =>
                index === parseInt(indexAttribute) ? parseInt(value) : item
            );
        });

        setPointer(pointer);
    };

    const handleBlurGuildInput = (event) => {
        const indexAttribute = event.target.attributes['data-position'].value;
        const pointer = 10 * indexAttribute + 7;
        const value = event.target.value !== '' ? event.target.value : 0;

        setGuildValues((prev) => {
            return prev.map((item, index) =>
                index === parseInt(indexAttribute) ? parseInt(value) : item
            );
        });

        setPointer(pointer);
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
        <div className={`scorebook__table cols-${playersCount}`}>
            <PlayersRow
                players={players}
                onChange={handleChangeNewPlayer}
                onBlur={handleBlurNewPlayer}
            />
            <Row columns={wondersRow} />
            <Row columns={coinsRow} />
            <Row columns={warsRow} />
            <Row columns={civilsRow} />
            <Row columns={tradesRow} />
            <Row columns={sciencesRow} />
            <Row columns={guildsRow} />
            {index >= 0 && scoreValues.length > 0 && (
                <Row columns={scoreValues} />
            )}
            <div>
                <button onClick={handleClickNewPlayer}>Add new player</button>
            </div>
        </div>
    );
};

export default Table;
