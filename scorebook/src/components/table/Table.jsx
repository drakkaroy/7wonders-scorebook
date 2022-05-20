import React, { useEffect, useState } from 'react';
import Row from '../row/Row';
import PlayersRow from '../playersRow/PlayersRow';
import Input from '../input/Input';

const Table = () => {
    const maxPlayers = 7;
    const minPlayers = 3;
    const initialMatrix = [];
    const [playersCount, setPlayersCount] = useState(minPlayers);
    const [players, setPlayers] = useState([]);
    
    const [index, setIndex] = useState(playersCount - 1);
    const [pointer, setPointer] = useState(null);

    // Row Inputs
    const [wondersRow, setWondersRow] = useState(initialMatrix);
    const [coinsRow, setCoinsRow] = useState(initialMatrix);
    const [warsRow, setWarsRow] = useState(initialMatrix);
    const [civilsRow, setCivilsRow] = useState(initialMatrix);
    const [tradesRow, setTradesRow] = useState(initialMatrix);
    const [sciencesRow, setSciencesRow] = useState(initialMatrix);
    const [guildsRow, setGuildsRow] = useState(initialMatrix);

    // Row Values
    const [wonderValues, setWonderValues] = useState(initialMatrix);
    const [coinValues, setCoinValues] = useState(initialMatrix);
    const [warValues, setWarValues] = useState(initialMatrix);
    const [civilValues, setCivilValues] = useState(initialMatrix);
    const [tradeValues, setTradeValues] = useState(initialMatrix);
    const [scienceValues, setScienceValues] = useState(initialMatrix);
    const [guildValues, setGuildValues] = useState(initialMatrix);
    const [scoreValues, setScoreValues] = useState(initialMatrix);

    const getColumnValues = (columnIndex) => {
        // Return an Array with values of the column
        const column = [];
        column.push(wonderValues[columnIndex]);
        column.push(coinValues[columnIndex]);
        column.push(warValues[columnIndex]);
        column.push(civilValues[columnIndex]);
        column.push(tradeValues[columnIndex]);
        column.push(scienceValues[columnIndex]);
        column.push(guildValues[columnIndex]);
        return column;
    };

    const addValues = () => {
        // Update array values with 0 each new player
        setPlayers((prev) => [...prev, '']);
        setWonderValues((prev) => [...prev, 0]);
        setCoinValues((prev) => [...prev, 0]);
        setWarValues((prev) => [...prev, 0]);
        setCivilValues((prev) => [...prev, 0]);
        setTradeValues((prev) => [...prev, 0]);
        setScienceValues((prev) => [...prev, 0]);
        setGuildValues((prev) => [...prev, 0]);
        setScoreValues((prev) => [...prev, 0]);
    };

    const addRows = () => {
        // Update array values with input field each new player
        const inputList = setColumnInputs(index);
        setWondersRow((prev) => [...prev, inputList.wonder]);
        setCoinsRow((prev) => [...prev, inputList.coin]);
        setWarsRow((prev) => [...prev, inputList.war]);
        setCivilsRow((prev) => [...prev, inputList.civil]);
        setTradesRow((prev) => [...prev, inputList.trade]);
        setSciencesRow((prev) => [...prev, inputList.science]);
        setGuildsRow((prev) => [...prev, inputList.guild]);
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
            setIndex(index + 1);
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
                return players.map((item, idx) =>
                    idx === parseInt(indexAttribute) ? newPlayer : item
                );
            });
        }
    };

    const handleBlurWonderInput = (event) => {
        const indexAttribute = event.target.attributes['data-position'].value;
        const wonderPointer = 10 * indexAttribute + 1;
        const value = event.target.value !== '' ? event.target.value : 0;

        setWonderValues((wonderValues) => {
            return wonderValues.map((item, idx) =>
                idx === parseInt(indexAttribute) ? parseInt(value) : item
            );
        });

        setPointer(wonderPointer);
    };

    const handleBlurCoinInput = (event) => {
        const indexAttribute = event.target.attributes['data-position'].value;
        const coinPointer = 10 * indexAttribute + 2;
        const value = event.target.value !== '' ? event.target.value : 0;

        setCoinValues((coinValues) => {
            return coinValues.map((item, idx) =>
                idx === parseInt(indexAttribute) ? parseInt(value) : item
            );
        });

        setPointer(coinPointer);
    };

    const handleBlurWarInput = (event) => {
        const indexAttribute = event.target.attributes['data-position'].value;
        const warPointer = 10 * indexAttribute + 3;
        const value = event.target.value !== '' ? event.target.value : 0;

        setWarValues((warValues) => {
            return warValues.map((item, idx) =>
                idx === parseInt(indexAttribute) ? parseInt(value) : item
            );
        });

        setPointer(warPointer);
    };

    const handleBlurCivilInput = (event) => {
        const indexAttribute = event.target.attributes['data-position'].value;
        const pointer = 10 * indexAttribute + 4;
        const value = event.target.value !== '' ? event.target.value : 0;

        setCivilValues((prev) => {
            return prev.map((item, idx) =>
                idx === parseInt(indexAttribute) ? parseInt(value) : item
            );
        });

        setPointer(pointer);
    };

    const handleBlurTradeInput = (event) => {
        const indexAttribute = event.target.attributes['data-position'].value;
        const pointer = 10 * indexAttribute + 5;
        const value = event.target.value !== '' ? event.target.value : 0;

        setTradeValues((prev) => {
            return prev.map((item, idx) =>
                idx === parseInt(indexAttribute) ? parseInt(value) : item
            );
        });

        setPointer(pointer);
    };

    const handleBlurScienceInput = (event) => {
        const indexAttribute = event.target.attributes['data-position'].value;
        const pointer = 10 * indexAttribute + 6;
        const value = event.target.value !== '' ? event.target.value : 0;

        setScienceValues((prev) => {
            return prev.map((item, idx) =>
                idx === parseInt(indexAttribute) ? parseInt(value) : item
            );
        });

        setPointer(pointer);
    };

    const handleBlurGuildInput = (event) => {
        const indexAttribute = event.target.attributes['data-position'].value;
        const pointer = 10 * indexAttribute + 7;
        const value = event.target.value !== '' ? event.target.value : 0;

        setGuildValues((prev) => {
            return prev.map((item, idx) =>
                idx === parseInt(indexAttribute) ? parseInt(value) : item
            );
        });

        setPointer(pointer);
    };

    const setColumnInputs = (columnIndex) => {
        return {
            'wonder': <Input 
                type='number' 
                onBlur={handleBlurWonderInput} 
                index={columnIndex} 
                classes='scorebook__input bg-gray'
            />,
            'coin': <Input 
                type='number' 
                onBlur={handleBlurCoinInput} 
                index={columnIndex} 
                classes='scorebook__input bg-orange'
            />,
            'war': <Input 
                type='number' 
                onBlur={handleBlurWarInput} 
                index={columnIndex} 
                classes='scorebook__input bg-red'
            />,
            'civil': <Input 
                type='number' 
                onBlur={handleBlurCivilInput} 
                index={columnIndex} 
                classes='scorebook__input bg-blue'
            />,
            'trade': <Input 
                type='number' 
                onBlur={handleBlurTradeInput} 
                index={columnIndex} 
                classes='scorebook__input bg-orange'
            />,
            'science': <Input 
                type='number' 
                onBlur={handleBlurScienceInput} 
                index={columnIndex} 
                classes='scorebook__input bg-green'
            />,
            'guild': <Input 
                type='number' 
                onBlur={handleBlurGuildInput} 
                index={columnIndex} 
                classes='scorebook__input bg-gray'
            />
        }
    };

    const setBookWithMinPlayers = () => {
        const wondersRow = [];
        const coinsRow = [];
        const warsRow = [];
        const civilsRow = [];
        const tradesRow = [];
        const sciencesRow = [];
        const guildsRow = [];

        for (let index = 0; index < minPlayers; index++) {
            console.log(index);
            const inputList = setColumnInputs(index);
            wondersRow.push(inputList.wonder);
            coinsRow.push(inputList.coin);
            warsRow.push(inputList.war);
            civilsRow.push(inputList.civil);
            tradesRow.push(inputList.trade);
            sciencesRow.push(inputList.science);
            guildsRow.push(inputList.guild);
        }

        setWondersRow(wondersRow);
        setCoinsRow(coinsRow);
        setWarsRow(warsRow);
        setCivilsRow(civilsRow);
        setTradesRow(tradesRow);
        setSciencesRow(sciencesRow);
        setGuildsRow(guildsRow);

        setPlayers(Array.from(Array(minPlayers).fill('')));
        setWonderValues(Array.from(Array(minPlayers).fill(0)));
        setCoinValues(Array.from(Array(minPlayers).fill(0)));
        setWarValues(Array.from(Array(minPlayers).fill(0)));
        setCivilValues(Array.from(Array(minPlayers).fill(0)));
        setTradeValues(Array.from(Array(minPlayers).fill(0)));
        setScienceValues(Array.from(Array(minPlayers).fill(0)));
        setGuildValues(Array.from(Array(minPlayers).fill(0)));
        setScoreValues(Array.from(Array(minPlayers).fill(0)));
    };

    useEffect(() => {
        setBookWithMinPlayers();
    },[]);

    useEffect(() => {
        // Add rows and values each new player
        if (playersCount >= 1 && playersCount <= maxPlayers && playersCount !== minPlayers) {
            addRows();
            addValues();
        }
    }, [playersCount]);

    useEffect(() => {
        // Pointer is updated each OnBlur event
        if (pointer) {
            updateScoreValue();
        }
    }, [pointer]);

    return (
        <div className={`scorebook__table cols-${playersCount}`}>
            <PlayersRow
                players={players}
                onChange={handleChangeNewPlayer}
                onBlur={handleBlurNewPlayer}
            />
            <Row columns={wondersRow} label='Wonder' />
            <Row columns={coinsRow} label='Gold' />
            <Row columns={warsRow} label='War' />
            <Row columns={civilsRow} label='Civil' />
            <Row columns={tradesRow} label='Trade' />
            <Row columns={sciencesRow} label='Science' />
            <Row columns={guildsRow} label='Guild' />
            {playersCount > 0 && scoreValues.length > 0 && (
                <Row columns={scoreValues}  label='Score'/>
            )}
            <div className='scorebook__button-container'>
                <button onClick={handleClickNewPlayer} className='scorebook__button'>Add new player</button>
            </div>
        </div>
    );
};

export default Table;
