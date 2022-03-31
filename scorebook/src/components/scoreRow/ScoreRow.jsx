import React from 'react';

const ScoreRow = (props) => {
    const { scoreValues, index, playersCount } = props;

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

    // const score = scoreValues[index];
    console.log('score values from score row');
    console.log('scorevalues; ', scoreValues);
    console.log('index: ', index);
    console.log('playerscount: ', playersCount);

    return (
        <div className='scorebook__row' style={rowStyles}>
            {[...Array(playersCount).keys()].map((item, idx) => {
                return (
                    <div
                        data-position={index}
                        key={idx}
                        className='scorebook__column'
                        style={columnStyles}
                    >
                        {scoreValues[idx]}
                    </div>
                );
            })}
        </div>
    );
};

export default ScoreRow;
