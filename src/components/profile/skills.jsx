import React from 'react';

const Skills =(props) => (
        <div className='Skills'>
            <h3>Skills:</h3>
            <ul>
                <li>{props.skills.skillA}</li>
                <li>{props.skills.skillB}</li>
                <li>{props.skills.skillC}</li>
            </ul>
        </div>   
    )
export default Skills;