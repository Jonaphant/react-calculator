import React from 'react';

const Button = ({symbol}) => {
    return (
        <div className=' w-25'>
            <button className='dim ba b--gray bg-white pa2 w-100'>{symbol}</button>
        </div>
    );
}

export default Button;