import React, { useState } from 'react';
import './App.css';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstOperand, setFirstOperand] = useState(null);

  const handleNumberClick = (number) => {
    if (displayValue === '0' || operator === '=') {
      setDisplayValue(number);
      if (operator === '=') {
        setOperator(null);
        setFirstOperand(null);
      }
    } else {
      setDisplayValue(displayValue + number);
    }
  };

  const handleOperatorClick = (newOperator) => {
    if (firstOperand !== null && operator && operator !== '=') {
      calculateResult();
      setOperator(newOperator);
    } else {
      setFirstOperand(parseFloat(displayValue));
      setOperator(newOperator);
    }
    setDisplayValue('0');
  };

  const handleEqualsClick = () => {
    if (operator && firstOperand !== null) {
      calculateResult();
      setOperator('=');
      setFirstOperand(null);
    }
  };

  const handleClearClick = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstOperand(null);
  };

  const handleDecimalClick = () => {
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  const handleToggleSign = () => {
    setDisplayValue(String(parseFloat(displayValue) * -1));
  };

  const handlePercentage = () => {
    setDisplayValue(String(parseFloat(displayValue) / 100));
  };

  const calculateResult = () => {
    const secondOperand = parseFloat(displayValue);
    let result = 0;
    switch (operator) {
      case '+':
        result = firstOperand + secondOperand;
        break;
      case '-':
        result = firstOperand - secondOperand;
        break;
      case '*':
        result = firstOperand * secondOperand;
        break;
      case '/':
        result = firstOperand / secondOperand;
        break;
      default:
        return;
    }
    setDisplayValue(String(result));
    setFirstOperand(result);
    setOperator(null);
  };

  return (
    <div className="calculator">
      <div className="display" role="textbox">{displayValue}</div>
      <div className="buttons">
        <button className="button clear" onClick={handleClearClick}>C</button>
        <button className="button" onClick={handleToggleSign}>+/-</button>
        <button className="button" onClick={handlePercentage}>%</button>
        <button className="button operator" onClick={() => handleOperatorClick('/')}>/</button>

        <button className="button" onClick={() => handleNumberClick('7')}>7</button>
        <button className="button" onClick={() => handleNumberClick('8')}>8</button>
        <button className="button" onClick={() => handleNumberClick('9')}>9</button>
        <button className="button operator" onClick={() => handleOperatorClick('*')}>*</button>

        <button className="button" onClick={() => handleNumberClick('4')}>4</button>
        <button className="button" onClick={() => handleNumberClick('5')}>5</button>
        <button className="button" onClick={() => handleNumberClick('6')}>6</button>
        <button className="button operator" onClick={() => handleOperatorClick('-')}>-</button>

        <button className="button" onClick={() => handleNumberClick('1')}>1</button>
        <button className="button" onClick={() => handleNumberClick('2')}>2</button>
        <button className="button" onClick={() => handleNumberClick('3')}>3</button>
        <button className="button operator" onClick={() => handleOperatorClick('+')}>+</button>

        <button className="button zero" onClick={() => handleNumberClick('0')}>0</button>
        <button className="button" onClick={handleDecimalClick}>.</button>
        <button className="button equals" onClick={handleEqualsClick}>=</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Calculator />
    </div>
  );
}

export default App;