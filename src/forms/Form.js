import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

const Form = () => (
  <Box sx={{ textAlign: 'center', p: 4, mx: 'auto' }}>
    <Box sx={{justifyContent:'center', display:'flex',p:2}}>
        <Typography variant="h4" gutterBottom>
        Streamline Your Visit: Access Patient Forms Online
        </Typography>
    </Box>
    <Box sx={{textAlign:'justify', p:2}}>
        <Typography variant="body1">
        </Typography>
    </Box>

    <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#3a4c17', mt: 5, p: 2 }}>
      <Box sx={{ color: 'white', mb: 2, p: 2 }}>
        <Typography variant="body1" fontWeight="bold">
          NEW PATIENT PAPERWORK
        </Typography>
      </Box>
      <Box sx={{ color: 'white', p: 2, }}>
        <Typography variant="body1">
          If you are new to Summit Behavioral Health and have not yet seen one of our providers, click on New Patient Forms below and complete it online. We will call you within 12-24 hours to schedule an appointment.
        </Typography>
      </Box>
      <Button
        fullWidth
        variant="outlined"
        sx={{ backgroundColor: 'slategrey', color: 'white', mt: 5, mb: 5, width: '25%' }}
        href="https://app.formdr.com/practice/NDIwNzM=/form/ZAlHhd2-m36A_AETfJ8qDMypuCh3D5l7"
        target="_blank"
      >
        NEW PATIENT FORM
      </Button>
    </Box>

    {/* Miscellaneous Forms Section */}
    <Box sx={{ mt: 3, backgroundColor: '#3a4c17',  p: 5 }}>
      <Typography variant="h5" gutterBottom sx={{color:'white'}} fontWeight='bold'>
        Miscellaneous Forms
      </Typography>
      <Grid container spacing={2} justifyContent="center" sx={{mt:3}}>
        <Grid item xs={12} sm={6} md={6}>
          <Button fullWidth variant="outlined" sx={{ backgroundColor: 'slategrey', color: 'white', height:'100%',width:'50%'  }} href="https://app.formdr.com/practice/NDIwNzM=/form/_WXYigCUqLo3doiPKP7IewOQ9_gS7Lns" target="_blank">
            Patient Health Questionnaire (PHQ-9)
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Button fullWidth variant="outlined" sx={{ backgroundColor: 'slategrey', color: 'white',height:'100%', width:'50%' }} href="https://app.formdr.com/practice/NDIwNzM=/form/V7pjFUdyFcLskcqwm6gqZ7Q_3ocYxl_m" target="_blank">
            Mood Disorder Questionnaire (MDQ)
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Button fullWidth variant="outlined" sx={{ backgroundColor: 'slategrey', color: 'white',height:'100%', width:'50%'  }} href="https://app.formdr.com/practice/NDIwNzM=/form/Mz-AJK6rU6iI-6I0z4FA8rc_igej0p2i" target="_blank">
            General Anxiety Disorder (GAD-7)
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Button fullWidth variant="outlined" sx={{ backgroundColor: 'slategrey', color: 'white',height:'100%', width:'50%'  }} href="https://app.formdr.com/practice/NDIwNzM=/form/rezDKF4ZElaw2SaAchlcuSlB8NLs6c8a" target="_blank">
            Controlled Substance Agreement
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Button fullWidth variant="outlined" sx={{ backgroundColor: 'slategrey', color: 'white',height:'100%', width:'50%'  }} href="https://app.formdr.com/practice/NDIwNzM=/form/Jx_S9V5TvHLq8JObKwCftst2jFzMRh80" target="_blank">
            Document Submission Form
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Button fullWidth variant="outlined" sx={{ backgroundColor: 'slategrey', color: 'white',height:'100%', width:'50%'  }} href="https://app.formdr.com/practice/NDIwNzM=/form/SJWkwSAHjHcBCv4JmyYK1WVYOOwLMTR7" target="_blank">
            Authorization to Release PHI
          </Button>
        </Grid>
      </Grid>
    </Box>
  </Box>
);

export default Form;
