import React from 'react';

const Bio = (props) => (
        <div className='Bio'>
            <h3>{props.me.name}</h3>
            <p>{props.me.title}</p>
        </div>
    )

export default Bio;