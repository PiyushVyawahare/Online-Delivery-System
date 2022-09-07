import * as React from 'react';
import { useState, useEffect } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import api from '../../api';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};





export default function SelectOrders(props) {
  const mobile = props.mobile;
  const [names, setNames] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [personName, setPersonName] = useState([]);

  useEffect(() => {
    getAllNodes();
  }, []);

  const getAllNodes = () => {
    api.post('/getOrders', {mobile: mobile})
    .then(function(data){
      console.log(data);
      for(let i = 0; i < data.data.length; i++){
        names.push(data.data[i].name);
      }
      setNames(names);
      setLoading(false);
      console.log(names);
    })
    .catch(function(err){
      console.log(err);
    });
  };


  if (isLoading) {
    return <div className="App">Loading...</div>;
  }




  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}