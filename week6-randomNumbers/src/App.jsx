import * as React from "react";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import Chave from "./Chave";
function getRandomNumber() {
  let min = 0;
  let max = 10;
  return Math.floor(Math.random() * (max - min) + min);
}

let firstNumber = getRandomNumber();
console.log(firstNumber);
function App() {

  const [num, setList] = useState([]);

  const [red, setRed] = useState(true);

 

  function addNumber() {
    const newNumbers = [...num];

    // Push adicionar ao fim do Array
    // UnShift adiciona ao inicio do Array
    newNumbers.unshift({
      id: 0,
      valor: getRandomNumber(), 
    });

    setList(newNumbers);
  }
  
  function reset() {
    setList([]);
    firstNumber = getRandomNumber();
  }
  return (
    <div className="">
      {num.map((num) => (
        <Chave key={num.id} numero={num} numeroCorreto={firstNumber} />
      ))}
      <Button onClick={addNumber}>Gerar Número</Button>
      {num.some((num) => num.valor === firstNumber) ? (
        <Button onClick={reset}>Reset</Button>
      ) : (
        <Button onClick={addNumber}>Gerar Número</Button>
      )}
    </div>
  );
}

export default App;
