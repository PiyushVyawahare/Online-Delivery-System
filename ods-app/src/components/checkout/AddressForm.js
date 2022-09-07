import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Select, FormControl, MenuItem, InputLabel } from '@mui/material';

export default function AddressForm() {

  const [time, setTime] = React.useState("");

  function handleChange(event){
    setTime(event.target.value);
  }

  const [checked, setChecked] = React.useState(true);

  const handleCheckChange = (event) => {
    setChecked(event.target.checked);
  };

  
  function DisplayCurrentTime(i) {
    var date = new Date();
    var hours = (date.getHours()+i) < 10 ? "0" + (date.getHours()+i) : (date.getHours()+i);
    return hours+":00 - "+(hours+1)+":00";
  };


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
        <br />
        <Grid item xs={12} sm={6}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Select Slot</InputLabel>
            <Select
              labelId="timeslot"
              id="timeslot"
              value={time}
              onChange={handleChange}
              label="Select Slot"
            >
              
              <MenuItem value={0}>{DisplayCurrentTime(0)}</MenuItem>
              <MenuItem value={1}>{DisplayCurrentTime(1)}</MenuItem>
              <MenuItem value={2}>{DisplayCurrentTime(2)}</MenuItem>
              <MenuItem value={3}>{DisplayCurrentTime(3)}</MenuItem>
              <MenuItem value={4}>{DisplayCurrentTime(4)}</MenuItem>

            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Checkbox
              onChange={handleCheckChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />
            <TextField
              id="tip"
              name="tip"
              label="Tip Amount"
              disabled={!checked}
              variant="standard"
            />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}