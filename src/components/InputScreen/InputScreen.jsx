import React from 'react';

const InputScreen = ({input}) => {
    return (
        <div>
            <h1 className='w-100 bg-light-red ba b--purple mg br2' style={{textAlign: 'right', margin: '0'}}>{input}</h1>
        </div>
    );
}

export default InputScreen;