import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FormControl, Select, Slider, MenuItem, Switch, InputLabel, Box } from '@mui/material';


export default function CustomCard2( { title, body, component: Component, handleChange, type, onSliderChange, value, onChange, dropDownOptions, onDropdownChange } ) {

    const renderContent = () => {
        switch (type){
            case 'toggle':
                return (
                    <Switch
                        checked={value}
                        onChange={(e) => handleChange(e.target.checked)}
                        defaultChecked
                        color='primary'
                    />
                )

            case 'slider':
                return (
                    <Slider
                        value={value}
                        onChange={onChange}
                        aria-labelledby="continuous-slider"
                        defaultValue={50}
                        min={0}
                        max={100}
                        onChange={onSliderChange}
                    />
                )

            case 'dropdown':
                return (
                    <Box sx={{ maxWidth: 500 }}>
                        <FormControl fullWidth>
                            <Select
                                displayEmpty
                                onChange={onDropdownChange}>
                                    {dropDownOptions.map((option, index) => (
                                        <MenuItem key={index} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))}
                            </Select>
                        </FormControl>
                    </Box>
                );
            default:
                return null;
        }
    }

  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
            {title}
        </Typography>

        <Typography variant="body2">
            {body}
        </Typography>
        {renderContent()}
      </CardContent>
    </Card>
  );
}