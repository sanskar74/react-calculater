import React, { useState } from "react";

const DisplayContent = () => {

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [handleres, setHandleres] = useState('');

    function handleInputChange(event){
        setNum1(event.target.value)
    }
    function handleInputChange2(event){
        setNum2(event.target.value)
    }
    
    function sum(a, b){
        const add = parseFloat(num1) + parseFloat(num2)
        ;
        setHandleres(add);
    }
    function sub(a, b){
        const sub = num1 - num2
        setHandleres(sub)
    }

    function mul(x, y){
        const mul = num1*num2;
        setHandleres(mul);
    }

    function div(x, y){
        const div = num1/num2;
        setHandleres(div);
    }

    console.log(handleres);
    return(
        <div>
            <h1>React Calculator</h1>
            <input type="text" placeholder="Num 1" value={num1} onChange={handleInputChange}/>

            <br/>
            <br/>
            <input type="text" placeholder="Num 2" value={num2} onChange={handleInputChange2}></input>
            <br/>
            <br/>
            <button onClick={sum}>+</button>
            <button onClick={sub}>-</button>
            <button onClick={mul}>*</button>
            <button onClick={div}>/</button>

            <p id="blue">Success</p>
            <p>Result : {handleres}</p>
        </div>
    )
}

export default DisplayContent;