import React, { useEffect, useState } from 'react';
import Row from '../row/Row';
import Input from '../input/Input';

const PlayersRow = (props) => {
    const { players, onChange, onBlur } = props;
    const [columns, setColumns] = useState([]);

    const updateColumns = () => {
        const columns = players.map((item, idx) => {
            return (
                <Input 
                    type='text'
                    index={idx}
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder={`ply ${idx + 1}`}
                    autoFocus={true}
                    classes='scorebook__player-input'
                />
            )
        });
        setColumns(columns);
    };

    useEffect(() => {
        updateColumns();
    },[players])

    return (
        <Row columns={columns} />
    );
};

export default PlayersRow;
