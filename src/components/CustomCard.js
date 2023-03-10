import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import Switch from '@mui/material/Switch'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function CustomCard( { title, body, component: Component, handleChange, state, setState} ) {
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
            {title}
        </Typography>

        <Typography variant="body2">
            {body}
        </Typography>
      </CardContent>

      <CardActions>
        <Component 
          // defaultValue={50}
          // defaultChecked
          // onChange={(e) => handleChange(e.target.checked)}
          state={state}
          setState={setState}
        />
      </CardActions>
    </Card>
  );
}