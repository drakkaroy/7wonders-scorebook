import React, { useEffect, useState } from 'react';
import Row from '../row/Row';
import PlayersRow from '../playersRow/PlayersRow';
import Input from '../input/Input';

const Table = () => {
    const maxPlayers = 7;
    const minPlayers = 3;
    // const initialMatrix = Array.from(Array(minPlayers).fill(0));
    const initialMatrix = [];
    const [playersCount, setPlayersCount] = useState(0);
    const [players, setPlayers] = useState([]);
    // const index = playersCount - 1;
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

    const inputList = {
        'index': index,
        'wonder': <Input 
            type='number' 
            onBlur={handleBlurWonderInput} 
            index={index} 
            classes='scorebook__input bg-gray'
        />,
        'coin': <Input 
            type='number' 
            onBlur={handleBlurCoinInput} 
            index={index} 
            classes='scorebook__input bg-orange'
        />,
        'war': <Input 
            type='number' 
            onBlur={handleBlurWarInput} 
            index={index} 
            classes='scorebook__input bg-red'
        />,
        'civil': <Input 
            type='number' 
            onBlur={handleBlurCivilInput} 
            index={index} 
            classes='scorebook__input bg-blue'
        />,
        'trade': <Input 
            type='number' 
            onBlur={handleBlurTradeInput} 
            index={index} 
            classes='scorebook__input bg-orange'
        />,
        'science': <Input 
            type='number' 
            onBlur={handleBlurScienceInput} 
            index={index} 
            classes='scorebook__input bg-green'
        />,
        'guild': <Input 
            type='number' 
            onBlur={handleBlurGuildInput} 
            index={index} 
            classes='scorebook__input bg-gray'
        />
    }

    console.log(inputList);
    useEffect(() => {
        // setPlayers(Array.from(Array(minPlayers).fill('')));
        // setWonderValues(Array.from(Array(minPlayers).fill(0)));
        // setCoinValues(Array.from(Array(minPlayers).fill(0)));
        // setWarValues(Array.from(Array(minPlayers).fill(0)));
        // setCivilValues(Array.from(Array(minPlayers).fill(0)));
        // setTradeValues(Array.from(Array(minPlayers).fill(0)));
        // setScienceValues(Array.from(Array(minPlayers).fill(0)));
        // setGuildValues(Array.from(Array(minPlayers).fill(0)));
        // setScoreValues(Array.from(Array(minPlayers).fill(0)));

        // setWondersRow(Array.from(Array(minPlayers).fill(inputList.wonder)));
        // setCoinsRow(Array.from(Array(minPlayers).fill(inputList.coin)));
        // setWarsRow(Array.from(Array(minPlayers).fill(inputList.war)));
        // setCivilsRow(Array.from(Array(minPlayers).fill(inputList.civil)));
        // setTradesRow(Array.from(Array(minPlayers).fill(inputList.trade)));
        // setSciencesRow(Array.from(Array(minPlayers).fill(inputList.science)));
        // setGuildsRow(Array.from(Array(minPlayers).fill(inputList.guild)));
    },[]);

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
        // console.log('players: ', players);
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
            <Row columns={wondersRow} label='Wonder' />
            <Row columns={coinsRow} label='Gold' />
            <Row columns={warsRow} label='War' />
            <Row columns={civilsRow} label='Civil' />
            <Row columns={tradesRow} label='Trade' />
            <Row columns={sciencesRow} label='Science' />
            <Row columns={guildsRow} label='Guild' />
            {index >= 0 && scoreValues.length > 0 && (
                <Row columns={scoreValues}  label='Score'/>
            )}
            <div>
                <button onClick={handleClickNewPlayer}>Add new player</button>
            </div>
        </div>
    );
};

export default Table;
