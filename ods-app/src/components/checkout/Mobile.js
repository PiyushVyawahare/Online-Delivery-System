import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


export default function Mobile(props) {

  var setMobile = props.onClick;
  var mobile = props.mobile;
  function onMobileEntered(event){
    setMobile(event.target.value);
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Mobile Number
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="mobile"
            name="mobile"
            label="Enter Mobile Number"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={onMobileEntered}
            value={mobile}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}