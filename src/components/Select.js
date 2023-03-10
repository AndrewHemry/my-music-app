import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect( {state, setState} ) {

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <li>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state}
          label="Quality"
          onChange={handleChange}
        >
          <MenuItem value={"Normal"}>Normal</MenuItem>
          <MenuItem value={"High"}>High</MenuItem>
          <MenuItem value={"Low"}>Low</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </li>
  );
}