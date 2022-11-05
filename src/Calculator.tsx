import { useState } from "react";
import "./styles.css";
import deleteIcon from "./assets/tag-x-solid-24.png";

function Calculator() {
  const [valueOutput, setValueOutput] = useState("");
  const [number, setNumber] = useState("");
  const [operation, setOperation] = useState<string[]>([""]);

  const handleNumbersValue = (e: any) => {
    setValueOutput(valueOutput + e.target.id);
  };

  const handleOperation = (e: any) => {
    operation[0] === ""
      ? (operation.splice(0, 1, valueOutput),
        operation.splice(1, 1, e.target.id))
      : "";

    setNumber(valueOutput + " " + e.target.id);
    setValueOutput("");
  };

  const clear = () => {
    setValueOutput("");
    setNumber("");
    setOperation([""]);
  };

  const getResult = () => {
    let result = 0;

    operation[2] ? "" : (
      operation.push(valueOutput),
      setValueOutput(number + " " + valueOutput)
    );

    switch (operation[1]) {
      case "+":
        result = Number(operation[0]) + Number(operation[2]);
        setValueOutput(String(result));
        break;
      case "-":
        result = Number(operation[0]) - Number(operation[2]);
        setValueOutput(String(result));
        break;
      case "/":
        result = Number(operation[0]) / Number(operation[2]);
        setValueOutput(String(result));
        break;
      case "*":
        result = Number(operation[0]) * Number(operation[2]);
        setValueOutput(String(result));
        break;

      default:
        break;
    }
  };

  const erase = () => {
    let arrValueOutput: any = valueOutput.split("");
    arrValueOutput.pop();

    setValueOutput(arrValueOutput.join(""));
  };

  return (
    <div className="App">
      <div className="calculator">
        <span className="previus-value">{number}</span>
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
          <span className="op" id="/" onClick={handleOperation}>
            /
          </span>
          <span className="number" id="7" onClick={handleNumbersValue}>
            7
          </span>
          <span className="number" id="8" onClick={handleNumbersValue}>
            8
          </span>
          <span className="number" id="9" onClick={handleNumbersValue}>
            9
          </span>
          <span className="op" id="*" onClick={handleOperation}>
            x
          </span>
          <span className="number" id="4" onClick={handleNumbersValue}>
            4
          </span>
          <span className="number" id="5" onClick={handleNumbersValue}>
            5
          </span>
          <span className="number" id="6" onClick={handleNumbersValue}>
            6
          </span>
          <span className="op" id="-" onClick={handleOperation}>
            -
          </span>
          <span className="number" id="1" onClick={handleNumbersValue}>
            1
          </span>
          <span className="number" id="2" onClick={handleNumbersValue}>
            2
          </span>
          <span className="number" id="3" onClick={handleNumbersValue}>
            3
          </span>
          <span className="op" id="+" onClick={handleOperation}>
            +
          </span>
          <span className="op">
            <span>+</span>/<span>-</span>
          </span>
          <span className="number">0</span>
          <span className="op">,</span>
          <span className="op equal-signal" onClick={getResult}>
            =
          </span>
        </div>
      </div>
    </div>
  );
}
export default Calculator;
