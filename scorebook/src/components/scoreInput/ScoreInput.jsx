import React from 'react';

const ScoreInput = (props) => {
    const { value, onChange, onBlur, index } = props;

    return (
        <>
            <input
                type='number'
                // value={10}
                onChange={onChange}
                onBlur={onBlur}
                data-position={index}
            />
        </>
    );
};

export default ScoreInput;
