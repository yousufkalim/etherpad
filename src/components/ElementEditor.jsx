import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { InputLabel, MenuItem, TextField, Button, Grid, Select, FormControl } from '@mui/material';

function ElementEditor() {
  let [font, setFont] = useState('');
  return (
    <div className="elm_editor">
      <div className="elm_editor_container">
        <div className="elm_editor_header">
          <div>
            <p>Properties</p>
            <h4>Full Name</h4>
          </div>
          <div>
            <CloseIcon />
          </div>
        </div>
        <div className="elm_editor_body">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField fullWidth id="outlined-basic" label="X" variant="outlined" size="small" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth id="outlined-basic" label="Y" variant="outlined" size="small" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth id="outlined-basic" label="Width" variant="outlined" size="small" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth id="outlined-basic" label="Height" variant="outlined" size="small" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth id="outlined-basic" label="Sizes" variant="outlined" size="small" />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth size="small">
                <InputLabel id="font-select-label">Font</InputLabel>
                <Select
                  labelId="font-select-label"
                  id="font-select"
                  value={font}
                  label="Font"
                  onChange={(e) => {
                    setFont(e.target.value);
                  }}
                  size="small"
                  fullWidth
                >
                  <MenuItem value={10}>Helvetica</MenuItem>
                  <MenuItem value={20}>Roboto</MenuItem>
                  <MenuItem value={30}>Serif</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sx={{ marginTop: '10px' }}>
              <Button variant="contained" fullWidth color="error">
                Delete
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default ElementEditor;
