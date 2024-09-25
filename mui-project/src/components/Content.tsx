
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Content() {
  return (
    <Stack
      sx={{ flexDirection: 'column', alignSelf: 'center', gap: 4, maxWidth: 450,  paddingTop: {xs: '30px', sm:'30px', lg: '140px', xxl:'140px'}}}
    >
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <img src='https://placehold.co/500x200'/>
      </Box>
      <Typography variant="h4">Welcome to Asialink finance Corporation Online Portal.</Typography>
      <Typography variant="h3" sx={{ mb: 5}}>You Have Us!</Typography>
    </Stack>
  );
}