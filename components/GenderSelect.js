import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function GenderSelect({value,setValue}) {



  const handleChange = (event) => {
    setValue(event.target.value);
  };



  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="2" control={<Radio />} label="Female"  />
        <FormControlLabel value="1" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
  );
}
