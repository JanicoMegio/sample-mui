
import { Box, CssBaseline, Grid, Paper } from '@mui/material';

export default function FixedContainer() {
  return (
    <Grid
    container
    style={{ height: '100vh' }}
    alignItems="center"
    justifyContent="center"
  >
    <CssBaseline />
    <Grid item>
      <Paper elevation={3} style={{ padding: 16 }}>
        <h1>Hello, World!</h1>
      </Paper>
    </Grid>
  </Grid>
  );
}
