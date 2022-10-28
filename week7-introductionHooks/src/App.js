import { red } from "@material-ui/core/colors";
import { useState, useMemo, useCallback, useEffect } from "react";
function App() {
  const [num, setNum] = useState(10);
  const [redColor, setRedColor] = useState(false);

  // const doubleNum = useMemo(() => {
  //   return double(num);
  // }, [num]);

  const getNum = useCallback(() => {
    return 2*num;
  }, [num]);
  // Utilizar useMemo em caso de falta de performance ou problemas de referenciação
    const btnStyle = { background: redColor ? "red" : "" };
  // const btnStyle = useMemo(() => {
  //   return { background: redColor ? "red" : "" };
  // }, [redColor]);

  useEffect(() => {
    console.log("number changed");
  }, [getNum]);

  // function double(numero) {
  //   for (let i = 0; i < 999999999; i++) {}
  //   return 2 * numero;
  // }
  
  return (
    <div className="App">
      <p>{getNum()}</p>
      <button onClick={() => setNum(num + 1)}>add</button>
      <button style={btnStyle} onClick={() => setRedColor(!redColor)}>
        toogle color
      </button>
    </div>
  );
}

export default App;
