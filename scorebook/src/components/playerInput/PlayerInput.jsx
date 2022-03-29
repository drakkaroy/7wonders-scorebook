import React from 'react';

const PlayerInput = (props) => {
    const { onChange, onBlur } = props;

    return (
        <>
            <input type='text' onChange={onChange} onBlur={onBlur} />
        </>
    );
};

export default PlayerInput;
