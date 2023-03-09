import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Login(props) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        display: 'grid',
        justifyContent: 'center',
        marginTop: '128px'
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Username" variant="standard" />
      <TextField id="standard-basic" label="Password" variant="standard" type="password"/>
      <Button variant='contained' onClick={() => props.handleClick(true)}>Login</Button>
    </Box>
  );
}