import React from 'react';

const Button = ({symbol, onButtonClick}) => {
    return (
        <div className=' w-25'>
            <button className='dim ba b--black bg-light-blue pa2 w-100' onClick={() => onButtonClick(symbol)} >{symbol}</button>
        </div>
    );
}

export default Button;