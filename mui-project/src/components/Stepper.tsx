import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';




const steps = [
  {
    label: 'Do you have an existing application with us?',
    description: `Please indicate whether you currently have an application with us.`,
  },
  {
    label: 'Personal Information',
    description: 'Please provide your name and contact information.',
  },
  {
    label: 'Confirm Email and Phone Number',
    description: 'Please review your information before submission.',
  },
  {
    label: 'KYC',
    description: 'Please review your information before submission.',
  },
  {
    label: 'Complete Address',
    description: 'Please review your information before submission.',
  },
  {
    label: 'Set Username and Password',
    description: 'Please review your information before submission.',
  },
  {
    label: 'Terms and Conditions',
    description: 'Please review your information before submission.',
  },
];
  type Props = {
    onSwitchToLogin: () => void;
  };

export default function VerticalLinearStepper({ onSwitchToLogin }: Props) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState({
    existingApp: '',
    name: '',
    email: '',
    phone: '',
  });

  const handleNext = () => {
    if (activeStep === 0 && formData.existingApp === '') {
      alert('Please answer the question about existing applications.');
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setFormData({
      existingApp: '',
      name: '',
      email: '',
      phone: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', mt: 4 }}>
      <Typography variant='h4' align="center">Sign Up</Typography>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={index === steps.length - 1 ? (
                <Typography variant="caption">Last step</Typography>
              ) : null}
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              {index === 0 && (
                <TextField
                  name="existingApp"
                  label="Existing Application? (Yes/No)"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={formData.existingApp}
                  onChange={handleChange}
                />
              )}
              {index === 1 && (
                <>
                  <TextField
                    name="name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <TextField
                    name="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <TextField
                    name="phone"
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </>
              )}
              {index === 2 && (
                <>
                 <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker />
                    </LocalizationProvider>
                </>
              )}
              {index === 3 && (
                <Box>
                  <Typography variant="body1">Review your information:</Typography>
                  <Typography variant="body2">Existing Application: {formData.existingApp}</Typography>
                  <Typography variant="body2">Name: {formData.name}</Typography>
                  <Typography variant="body2">Email: {formData.email}</Typography>
                  <Typography variant="body2">Phone: {formData.phone}</Typography>
                </Box>
              )}
              {index === 4 && (
                <Box>
                  <Typography variant="body1">Review your information:</Typography>
                  <Typography variant="body2">Existing Application: {formData.existingApp}</Typography>
                  <Typography variant="body2">Name: {formData.name}</Typography>
                  <Typography variant="body2">Email: {formData.email}</Typography>
                  <Typography variant="body2">Phone: {formData.phone}</Typography>
                </Box>
              )}
              {index === 5 && (
                <Box>
                  <Typography variant="body1">Review your information:</Typography>
                  <Typography variant="body2">Existing Application: {formData.existingApp}</Typography>
                  <Typography variant="body2">Name: {formData.name}</Typography>
                  <Typography variant="body2">Email: {formData.email}</Typography>
                  <Typography variant="body2">Phone: {formData.phone}</Typography>
                </Box>
              )}
              <Box sx={{ mb: 2 }}>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                >
                  {index === steps.length - 1 ? 'Submit' : 'Continue'}
                </Button>
                <Button
                  disabled={index === 0}
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Back
                </Button>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
          <Button onClick={onSwitchToLogin} color="secondary" fullWidth>
            Back to Login
          </Button>
        </Paper>
      )}
        
    </Box>
  );
}
