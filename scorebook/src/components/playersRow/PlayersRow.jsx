import React from 'react';

const PlayersRow = (props) => {
    const { players, onChange, onBlur } = props;

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
            {players.map((item, idx) => {
                return (
                    <div
                        key={idx}
                        className='scorebook__column'
                        style={columnStyles}
                    >
                        {/* {players[idx]} */}
                        <input
                            data-position={idx}
                            type='text'
                            onChange={onChange}
                            onBlur={onBlur}
                            placeholder={`player ${idx + 1}`}
                            autoFocus={true}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default PlayersRow;
