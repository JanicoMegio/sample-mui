import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import Container from '@mui/material/Container';
import Card_login from '../components/Card_login.tsx';
import Vertical_stepper from '../components/Stepper.tsx';

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Card_login/>
        <Vertical_stepper/>
      </Container>
    </React.Fragment>
  );
}
