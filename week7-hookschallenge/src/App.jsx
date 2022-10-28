import { useState, useCallback, useEffect } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Switch, TextField, Typography } from "@mui/material";

const randomX = Math.floor(Math.random() * (10 - 5 + 1) + 5);
const randomY = Math.floor(Math.random() * 89 + 11);

const label = { inputProps: { 'aria-label': 'Switch demo' } };


function App() {
  const [num, setNum] = useState(0);

  const handleChange = (event) => {
    setNum(event.target.value);
    console.log(event.target.value)
  };

  const getNum = useCallback(
    (newNum) => {
      return num * newNum;
    },
    [num]
  );

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Switch {...label} defaultChecked />
      <TextField
      
        onChange={handleChange}
        type="number"
        id="number"
        label="Number"
        variant="outlined"
      />
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Typography display="block" gutterBottom>
          {num} x 2 = {getNum(2)}
        </Typography>
        <Typography display="block" gutterBottom>
          {num} x 5 = {getNum(5)}
        </Typography>
        <Typography display="block" gutterBottom>
         {num} x{randomX} = {getNum(randomX)} 
        </Typography>
        <Typography display="block" gutterBottom>
          {num} x 10 = {getNum(10)}
        </Typography>
        <Typography display="block" gutterBottom>
          {num} x{randomY} = {getNum(randomY)}
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
