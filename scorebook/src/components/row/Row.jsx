import React from 'react';

const Row = (props) => {
    const { columns = [] } = props;

    return (
        <div className='scorebook__row'>
            <div>label</div>
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
