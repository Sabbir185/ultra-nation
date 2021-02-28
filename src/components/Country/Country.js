import React from 'react';

const Country = (props) => {
    const name = props.name;
    return (
        <div>
            <h2>This is {name}</h2>
        </div>
    );
};

export default Country;