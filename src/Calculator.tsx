import { useState } from "react";
import "./styles.css";
import deleteIcon from "./assets/tag-x-solid-24.png";

function Calculator() {
  const [valueOutput, setValueOutput] = useState("");
  const [valueOutputPrevius, setOutputPrevius] = useState("");
  const [operation, setOperation] = useState<string[]>([""]);

  const handleNumber = (e: any) => {
    setValueOutput(valueOutput + e.target.id);
  };

  const handleOperator = (e: any) => {
    if (!operation[0]) {
      operation.splice(0, 1, valueOutput);
      operation.push(e.target.id);
      setOutputPrevius(operation[0] + " " + operation[1]);
    } else if (operation[0]) {
      let result: number;

      operation.splice(2, 1, valueOutput);
      switch (operation[1]) {
        case "+":
          result = Number(operation[0]) + Number(operation[2]);
          setValueOutput(String(result));
          operation.splice(0, 1, String(result));
          operation.splice(1, 2);

          break;
        case "-":
          result = Number(operation[0]) - Number(operation[2]);
          setValueOutput(String(result));
          operation.splice(0, 1, String(result));
          operation.splice(1, 2);
          break;
        case "*":
          result = Number(operation[0]) * Number(operation[2]);
          setValueOutput(String(result));
          operation.splice(0, 1, String(result));
          operation.splice(1, 2);
          break;
        case "/":
          result = Number(operation[0]) / Number(operation[2]);
          setValueOutput(String(result));
          operation.splice(0, 1, String(result));
          operation.splice(1, 2);
          break;
      }

      operation.splice(1, 1, e.target.id);
      operation.splice(2, 1);
      setOutputPrevius(operation[0] + " " + operation[1]);
    }

    setValueOutput("");
  };

  const result = () => {
    if (operation[0] && operation[1]) {
      operation.push(valueOutput);
    }

    setOutputPrevius("");

    let result: number;

    switch (operation[1]) {
      case "+":
        result = Number(operation[0]) + Number(operation[2]);
        setValueOutput(String(result));
        operation.splice(0, 1, String(result));
        operation.splice(1, 2);
        break;
      case "-":
        result = Number(operation[0]) - Number(operation[2]);
        setValueOutput(String(result));
        operation.splice(0, 1, String(result));
        operation.splice(1, 2);
        break;
      case "*":
        result = Number(operation[0]) * Number(operation[2]);
        setValueOutput(String(result));
        operation.splice(0, 1, String(result));
        operation.splice(1, 2);
        break;
      case "/":
        result = Number(operation[0]) / Number(operation[2]);
        setValueOutput(String(result));
        operation.splice(0, 1, String(result));
        operation.splice(1, 2);
        break;
    }
  };

  const erase = () => {
    const valueTemp = valueOutput.split('')
    valueTemp.pop()
    setValueOutput(valueTemp.join(''))
  }

  const clear = () => {
    setValueOutput("");
    setOutputPrevius("");
    setOperation([""]);
  };

  return (
    <div className="App">
      <div className="calculator">
        <span className="previus-value">{valueOutputPrevius}</span>
        <div className="content-value">
          <p className="value">{valueOutput}</p>
        </div>

        <div className="content-numbers">
          <span className="op" onClick={clear}>
            C
          </span>
          <span className="op" onClick={erase}>
            <img src={deleteIcon} alt="" />
          </span>
          <span className="op">%</span>
          <span className="op" id="/" onClick={handleOperator}>
            /
          </span>
          <span className="number" id="7" onClick={handleNumber}>
            7
          </span>
          <span className="number" id="8" onClick={handleNumber}>
            8
          </span>
          <span className="number" id="9" onClick={handleNumber}>
            9
          </span>
          <span className="op" id="*" onClick={handleOperator}>
            x
          </span>
          <span className="number" id="4" onClick={handleNumber}>
            4
          </span>
          <span className="number" id="5" onClick={handleNumber}>
            5
          </span>
          <span className="number" id="6" onClick={handleNumber}>
            6
          </span>
          <span className="op" id="-" onClick={handleOperator}>
            -
          </span>
          <span className="number" id="1" onClick={handleNumber}>
            1
          </span>
          <span className="number" id="2" onClick={handleNumber}>
            2
          </span>
          <span className="number" id="3" onClick={handleNumber}>
            3
          </span>
          <span className="op" id="+" onClick={handleOperator}>
            +
          </span>
          <span className="op">
            <span>+</span>/<span>-</span>
          </span>
          <span className="number" id="0" onClick={handleNumber}>
            0
          </span>
          <span className="op">,</span>
          <span className="op equal-signal" onClick={result}>
            =
          </span>
        </div>
      </div>
    </div>
  );
}
export default Calculator;
