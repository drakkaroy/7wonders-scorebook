import React from 'react';

const Row = (props) => {
    const { rows } = props;

    const rowStyles = {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto auto auto auto auto',
        backgroundColor: '#2196f3',
        padding: '10px',
    };

    const columnStyles = {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        border: '1px solid rgba(0, 0, 0, 0.8)',
        padding: '20px',
        fontsize: '30px',
        textAlign: 'center',
    };

    return (
        <div className='scorebook__row' style={rowStyles}>
            {rows.map((item, idx) => {
                return (
                    <div className='scorebook__column' key={idx} style={columnStyles}>
                        {item}
                    </div>
                );
            })}
        </div>
    );
};

export default Row;
