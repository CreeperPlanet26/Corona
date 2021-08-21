import { Button, FormControl, MenuItem, InputLabel, Select, makeStyles } from '@material-ui/core';
import type { NextPage } from 'next'
import { useState } from 'react';
import { NavBar } from '../ui/NavBar';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const Home: NextPage = () => {

  const [data, setData] = useState<unknown>();

  const fetchData = () => {
    setData(0);
    fetch("https://api.covid19api.com/summary").then(r => r.json().then(d => {
      console.log(d)
      setData(s => s = d);
    }))
  }
  // const classes = useStyles();
  const [age, setAge] = useState('');

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };

  return (
    <div className="home-page">
      <NavBar />
      <Button onClick={fetchData}>Fetch</Button>
      {data !== 0 && <p>{JSON.stringify(data, null, 4)}</p>}
      {data === 0 && <p>Loading...</p>}
      <FormControl>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div >
  )
}

export default Home;
