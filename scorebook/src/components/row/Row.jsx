import React from 'react';

const Row = (props) => {
    const { columns = [], label } = props;

    return (
        <div className='scorebook__row'>
            <div className='scorebook__row-label'>{label}</div>
            {columns.map((item, idx) => {
                return (
                    <div className={`scorebook__col scorebook__col--${columns.length}`} key={idx}>
                        {item}
                    </div>
                );
            })}
        </div>
    );
};

export default Row;
