import React from 'react';

import './App.css';

const userInput = (props) => {
    return (
        <div >
            <input 
            className='input'
                type= 'text'
                onChange={props.changed} 
                value = {props.name}/>
        </div>
    ) 
}


export default userInput;