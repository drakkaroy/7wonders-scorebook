import React from 'react';

const PlayerInput = (props) => {
    const { value, onChange, onBlur } = props;

    return (
        <>
            <input type='text' value={value} onChange={onChange} onBlur={onBlur} autoFocus={true} />
        </>
    );
};

export default PlayerInput;
