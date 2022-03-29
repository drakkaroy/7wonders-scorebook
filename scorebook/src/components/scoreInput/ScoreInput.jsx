import React from 'react';

const ScoreInput = (props) => {
    const { value, onChange, onBlur } = props;

    return (
        <>
            <input type='number' value={value} onChange={onChange} onBlur={onBlur} />
        </>
    );
};

export default ScoreInput;
