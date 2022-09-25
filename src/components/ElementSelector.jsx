import * as React from 'react';
import Box from '@mui/material/Box';
import { InputLabel, MenuItem, TextField, Divider } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function ElementSelector() {
  const [age, setAge] = React.useState('');
  const [placeholders, setPlaceholders] = React.useState([
    'First Name',
    'Last Name',
    'Full Name',
    'Taxcode',
    'Birth date',
    'Birth place',
    'Birth province',
    'Birth country',
    'Email',
    'Phone',
    'Address',
    'Residence place',
    'Signature',
  ]);
  const [datePlaceholders, setDatePlaceholders] = React.useState(['Current date', 'Current datetime']);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="elm_selector">
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Category" onChange={handleChange}>
            <MenuItem value={10}>Placeholders</MenuItem>
            <MenuItem value={20}>Elements</MenuItem>
            <MenuItem value={30}>Conditions</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <br />
      <Divider />
      <br />
      <TextField fullWidth id="outlined-basic" label="Search item" variant="outlined" />
      <h3 className="elm_selector_title">Available Elements</h3>
      <p className="elm_selector_desc">Hold down on an item and drag it within the document to insert the information.</p>
      <div className="elm_selector_placeholders">
        <div className="placeholders_container">
          {placeholders.map((placeholder) => (
            <span key={placeholder}>{placeholder}</span>
          ))}
        </div>
        <div className="date_placeholders_container">
          {datePlaceholders.map((placeholder) => (
            <span key={placeholder}>{placeholder}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
