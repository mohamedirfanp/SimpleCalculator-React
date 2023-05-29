import React, { useState } from 'react';
import './SimpleCalculator.css';
import Button from '@mui/material/Button';

export function SimpleCalculator()
{   
    // Operator
    const [operator, setOperator] = useState('op') 

    // Input State
    const [firstInputFlag, setFlag] = useState(true);

    // Input Parameter
    const [input1, setValue1] = useState('');
    const [input2, setValue2] = useState('');

    // Output Parameter
    const [answer, setAnswer] = useState('Ans');

    function onClickInputHandler1()
    {
        setFlag(true);
    }
    function onClickInputHandler2()
    {
        setFlag(false);
    }

    // OnClickHandler   
    const onClickHandler = event => {
        let inputValue = event.target.value;
        if(inputValue === 'AC')
        {
            setValue1('');
            setValue2('');
            setOperator('op')
            setAnswer('Ans')
        }
        
        else
        {
            if(firstInputFlag)
            {
                setValue1(prevValue => prevValue +  inputValue);

            }
            else
            {
                setValue2(prevValue => prevValue +  inputValue);

            }
        }
    }

    // Calculation Function 
    let add = () =>{

        setOperator('+');

        setAnswer(parseInt(input1) + parseInt(input2));
    }

    let substract = () =>{
        setOperator('-');
        setAnswer(input1 - input2);
    }

    let multiply = () =>{
        setOperator('x');
        setAnswer(input1 * input2);
    }

    let divide = () =>{
        setOperator('/');
        setAnswer(Number((input1 / input2).toFixed(2)));
    }

    return (
        <>
            <h1 >Simple Calculator</h1>
            <section className='mainBox'>
                <div className='inputDiv'>
                    <div className='inputEle'>

                    {/* <input type="text" id="input" onChange={ (event) => {
                        setValue1(parseInt(event.target.value));
                    }} /> */}

                    <button onClick={onClickInputHandler1}>

                    {firstInputFlag ? <span className='highlight'> {input1}</span> : <span className='input'> {input1}</span>}
                    </button>
                    
                    <span>{operator}</span>
                    {/* <input type="text" onChange={ (event) => {
                        setValue2(parseInt(event.target.value));
                    }}/> */}
                    {/* <span className='input'> {input2}</span> */}
                    <button onClick={onClickInputHandler2}>

                    {firstInputFlag ? <span className='input'> {input2}</span> : <span className='highlight'> {input2}</span>}
                    </button>

                    <span>=</span>
                    <span>{answer}</span>
                    </div>
                </div>
                <div className='CalcDiv'>
                    <div className='numDiv'>
                        <button onClick={onClickHandler} value='1' className='btn'>1</button>
                        <button onClick={onClickHandler} value='2' className='btn'>2</button>
                        <button onClick={onClickHandler} value='3' className='btn'>3</button>
                        <Button onClick={add} variant='contained'>+</Button>
                        <button onClick={onClickHandler} value='4' className='btn'>4</button>
                        <button onClick={onClickHandler} value='5' className='btn'>5</button>
                        <button onClick={onClickHandler} value='6' className='btn'>6</button>
                        <Button onClick={substract} variant='contained'>-</Button>
                        <button onClick={onClickHandler} value='7' className='btn'>7</button>
                        <button onClick={onClickHandler} value='8' className='btn'>8</button>
                        <button onClick={onClickHandler} value='9' className='btn'>9</button>
                        <Button onClick={multiply} variant='contained'>x</Button>
                        <button onClick={onClickHandler} value='0' className='btn'>0</button>
                        <button onClick={onClickHandler} value='-' className='btn'>-</button>
                        <button onClick={onClickHandler} value='AC' className='btn'>AC</button>
                        <Button onClick={divide} variant='contained'>/</Button>
                    </div>

                </div>
            </section>

        </>
    )
}