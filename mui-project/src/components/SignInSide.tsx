import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider, PaletteMode } from '@mui/material/styles';
import SignInCard from './SignInCard';
import Content from './Content';
import Stepper from './Stepper';

export default function SignInSide() {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const defaultTheme = createTheme({ palette: { mode } });
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitchToRegister = () => {
    setIsLogin(false);
  };

  const handleSwitchToLogin = () => {
    setIsLogin(true);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline enableColorScheme />
      <Stack
        direction="column"
        component="main"
        sx={[
          {
            justifyContent: 'space-between',
            height: { xs: 'auto', md: '100%' },
          },
          (theme) => ({
            backgroundImage:
              'radial-gradient(ellipse at 70% 51%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
            backgroundSize: 'cover',
            ...theme.applyStyles('dark', {
              backgroundImage:
                'radial-gradient(at 70% 51%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
            }),
          }),
        ]}
      >
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          sx={{
            justifyContent: 'center',
            gap: { xs: 6, sm: 12 },
            p: 3,
            m: 'auto',
          }}
        >
          <Content />
            {isLogin ? (
              <SignInCard onSwitchToRegister={handleSwitchToRegister} />
            ) : (
              <Stepper onSwitchToLogin={handleSwitchToLogin} />
            )}
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}