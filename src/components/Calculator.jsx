import { useState } from 'react';
import Planet from './Planet.jsx';

export default function Calculator() {
    const [nums, setNums] = useState([]);
    const [text, setText] = useState([]);
    const [operators, setOperators] = useState([]);
    const [result, setResult] = useState(0);
    const [isOp, setIsOp] = useState(false);



    const calculateTotal = (updatedNums) => {

        let total = result > 0 ? result : updatedNums[0];
        console.log(total);

        for (let i = 1; i < nums.length; i++) {
            switch (operators[i - 1]) {
                case '+':
                    total += updatedNums[i];
                    break;
                case '-':
                    total -= updatedNums[i];
                    if (total < 0) {
                        reset();
                        total = 0;
                    }
                    break;
                case 'x':
                    total *= updatedNums[i];
                    break;
                case ':':
                    if (updatedNums[i] !== 0) {
                        total /= updatedNums[i];
                    } else {
                        // Handle division by zero
                        console.error("Cannot divide by zero!");
                        alert('Cannot divide by zero!');
                    }
                    break;
                default:
                    break;
            }
        }

        return total;
    };

    const handleResult = () => {

        const updatedNums = [...nums];

        if (updatedNums.length > 2) {
            let i = 1;
            while (i < updatedNums.length - 1) {

                // Concatenate the numbers if both current and next elements are numbers
                updatedNums[i] = Number(String(updatedNums[i]) + String(updatedNums[i + 1]));
                // Remove the next element from the array
                updatedNums.splice(i + 1, 1);
            }
        }

        console.log(updatedNums);

        const currentTotal = calculateTotal(updatedNums);
        const cleanCurrentTotal = (currentTotal - Math.floor(currentTotal)) !== 0 ? Number(currentTotal.toFixed(2)) : currentTotal;
        console.log(cleanCurrentTotal);
        setResult(cleanCurrentTotal);
        setNums([result]);
        setOperators([]);
    };


    const handleOperator = (operator) => {

        setIsOp(true);

        const updatedOperators = [...operators, operator];
        setOperators(updatedOperators);

        setNums([Number(nums.join(''))]);
    }



    const handleNumClick = (n) => {

        const updatedText = [...text, n];
        setText(updatedText);

        const updatedNums = [...nums, n];
        setNums(updatedNums);

        if(isOp) {
            setText([...text]);
        }

    }


    const reset = () => {
        setText([]);
        setResult(0);
        setNums([]);
        setOperators([]);
    }

    return (
        <>
            <div className="calculator-container">
                <h1>{result > 0 ? result : text}</h1>
                <div className="buttons-container">
                    <div className="first-row">
                        <button className="btn-ac" onClick={reset}>AC</button>
                        <button className="btn-operator divide" onClick={() => handleOperator(':')}>:</button>
                    </div>
                    <div>
                        <button onClick={() => handleNumClick(7)}>7</button>
                        <button onClick={() => handleNumClick(8)}>8</button>
                        <button onClick={() => handleNumClick(9)}>9</button>
                        <button className="btn-operator" onClick={() => handleOperator('x')}>X</button>
                    </div>
                    <div>
                        <button onClick={() => handleNumClick(4)}>4</button>
                        <button onClick={() => handleNumClick(5)}>5</button>
                        <button onClick={() => handleNumClick(6)}>6</button>
                        <button className="btn-operator" onClick={() => handleOperator('-')}>-</button>
                    </div>
                    <div>
                        <button onClick={() => handleNumClick(1)}>1</button>
                        <button onClick={() => handleNumClick(2)}>2</button>
                        <button onClick={() => handleNumClick(3)}>3</button>
                        <button className="btn-operator" onClick={() => handleOperator('+')}>+</button>
                    </div>
                    <div>
                        <button onClick={() => handleNumClick(0)}>0</button>
                        <button className="btn-operator" onClick={handleResult}>=</button>
                    </div>
                </div>
            </div>
            <Planet data={result}/>
        </>
    )
}
