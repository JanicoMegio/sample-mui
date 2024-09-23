import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Card_login from './components/Card_login.tsx';
import Vertical_stepper from './components/Stepper.tsx';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));


function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: 16 }}>
           <Card_login/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: 16 }}>
            <Vertical_stepper/>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App
