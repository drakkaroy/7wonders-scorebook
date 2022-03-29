import React, { useState } from 'react';

const Row = (props) => {
    const { rowsSize, columns, rows } = props;

    return (
        <div className='row'>
            {rows.map((item, idx) => {
                return (
                    <div className='column' key={idx}>
                        {item}
                    </div>
                );
            })}
        </div>
    );
};

export default Row;
