import React from 'react';
import Button from '../Button/Button';
import InputScreen from '../InputScreen/InputScreen';
import './Calculator.css';

const Calculator = () => {
    return (
        <div className='container ba b--pink bw2'>
            <div className='ba b--black mt5 w-20'>
                <div className='ba b--blue'>
                    <InputScreen />
                </div>
                <div style={{display: 'flex', flexWrap: 'wrap-reverse'}}>
                    <Button symbol={'+/-'}/>
                    <Button symbol={0}/>
                    <Button symbol={'.'}/>
                    <Button symbol={'='}/>
                    <Button symbol={1}/>
                    <Button symbol={2}/>
                    <Button symbol={3}/>
                    <Button symbol={'+'}/>
                    <Button symbol={4}/>
                    <Button symbol={5}/>
                    <Button symbol={6}/>
                    <Button symbol={'-'}/>
                    <Button symbol={7}/>
                    <Button symbol={8}/>
                    <Button symbol={9}/>
                    <Button symbol={'*'}/>
                    <Button symbol={'CE'}/>
                    <Button symbol={'C'}/>
                    <Button symbol={'del'}/>
                    <Button symbol={'/'}/>
                </div>
            </div>
        </div>
    );
}

export default Calculator;