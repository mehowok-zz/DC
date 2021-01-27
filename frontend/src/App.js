import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { TextField, Grid, Paper, Container } from '@material-ui/core';
import {
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  XYPlot,
  YAxis,
  LineMarkSeries
} from 'react-vis';

function Chart({ data }) {
  return <XYPlot width={ 500 } height={ 500 }>
    <XAxis />
    <YAxis />
    <HorizontalGridLines />
    <VerticalGridLines />
    <LineMarkSeries data={ data } />
  </XYPlot>;
}

function App() {
  const [valA, setValA] = useState(1);
  const [valB, setValB] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.post(`https://poc4delftcircuits-be.stxnext.pl/poc/`, {
      a: valA,
      b: valB,
    })
      .then(({ data }) => {
        setData(data)
      });
  }, [valA, valB]);

  return (
    <div className='App'>
      <Container maxWidth="sm">
        <Grid
          container
          spacing={ 3 }
          direction='row'
          justify='center'
          alignItems='center'
        >
          <Grid item xs={ 3 }>
            <TextField
              onChange={ (e) => setValA(e.target.value) }
              className='text-fields'
              defaultValue={ valA }
              color='primary'
              id="standard-number"
              label="Value A"
              type="number"
              size='medium'
            />
          </Grid>
          <Grid item xs={ 3 }>
            <TextField
              onChange={ (e) => setValB(e.target.value) }
              className='text-fields'
              defaultValue={ valB }
              id="standard-number"
              label="Value B"
              type="number"
              size='medium'
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={ 3 }
          direction='row'
          justify='center'
          alignItems='center'
        >
          <Grid item xs={ 12 }>
            <Paper>
              <Chart data={ data } />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
