import React, {useState} from 'react';
import Button from '../Button/Button';
import InputScreen from '../InputScreen/InputScreen';
import './Calculator.css';


const Calculator = () => {

    const [input, setInput] = useState('0');
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const operands = ['/', '*', '-', '+'];

    const onButtonClick = (symbol) => {
        if(input === '0' && numbers.includes(symbol)){
            setInput(symbol);
        } else {
            if(numbers.includes(symbol)) {
                setInput(input + symbol);
            } else {
                switch(symbol) {
                    case '+/-':
                        setInput('-' + input);
                        break;
                    case '.':
                        if(operands.some(function(v) { return input.indexOf(v) >= 0; })) {
                            setInput(eval(input) + symbol);
                        } else {
                            setInput(input + symbol);
                        }
                        break;
                    case 'CE':
                        setInput('0');
                        break;
                    case 'C':
                        setInput('0');
                        break;
                    case 'del':
                        setInput(input.substring(0, input.length-1));
                        break;
                    case '/':
                        if(operands.some(function(v) { return input.indexOf(v) >= 0; })) {
                            setInput(eval(input) + symbol);
                        } else {
                            setInput(input + symbol);
                        }
                        break;
                    case '*':
                        if(operands.some(function(v) { return input.indexOf(v) >= 0; })) {
                            setInput(eval(input) + symbol);
                        } else {
                            setInput(input + symbol);
                        }
                        break;
                    case '-':
                        if(operands.some(function(v) { return input.indexOf(v) >= 0; })) {
                            setInput(eval(input) + symbol);
                        } else {
                            setInput(input + symbol);
                        }
                        break;
                    case '+':
                        if(operands.some(function(v) { return input.indexOf(v) >= 0; })) {
                            setInput(eval(input) + symbol);
                        } else {
                            setInput(input + symbol);
                        }
                        break;
                    case '=':
                        if(numbers.includes(input[input.length - 1])) {
                            setInput(eval(input));
                        }
                        break;
                    default:
                        //Do nothing
                }
            }
        }
    }

    return (
        <div className='container'>
            <div className='container bg-green pb5 mt5 ph0 w-20 br2'>
                <div className='mt5 w-90'>
                    <div className='mb4'>
                        <InputScreen input={input} />
                    </div>
                    <div style={{display: 'flex', flexWrap: 'wrap-reverse'}}>
                        <Button symbol={'+/-'} onButtonClick={onButtonClick} />
                        <Button symbol={'0'} onButtonClick={onButtonClick} />
                        <Button symbol={'.'} onButtonClick={onButtonClick} />
                        <Button symbol={'='} onButtonClick={onButtonClick} />
                        <Button symbol={'1'} onButtonClick={onButtonClick} />
                        <Button symbol={'2'} onButtonClick={onButtonClick} />
                        <Button symbol={'3'} onButtonClick={onButtonClick} />
                        <Button symbol={'+'} onButtonClick={onButtonClick} />
                        <Button symbol={'4'} onButtonClick={onButtonClick} />
                        <Button symbol={'5'} onButtonClick={onButtonClick} />
                        <Button symbol={'6'} onButtonClick={onButtonClick} />
                        <Button symbol={'-'} onButtonClick={onButtonClick} />
                        <Button symbol={'7'} onButtonClick={onButtonClick} />
                        <Button symbol={'8'} onButtonClick={onButtonClick} />
                        <Button symbol={'9'} onButtonClick={onButtonClick} />
                        <Button symbol={'*'} onButtonClick={onButtonClick} />
                        <Button symbol={'CE'} onButtonClick={onButtonClick} />
                        <Button symbol={'C'} onButtonClick={onButtonClick} />
                        <Button symbol={'del'} onButtonClick={onButtonClick} />
                        <Button symbol={'/'} onButtonClick={onButtonClick} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;