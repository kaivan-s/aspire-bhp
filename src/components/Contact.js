import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import PrintIcon from '@mui/icons-material/Print';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import logo from '../assets/map.png';

const Contact = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '100vh' }}
    >
      {/* Constrain the content width - increased from sm={8} md={6} to sm={10} md={8} */}
      <Grid item xs={12} sm={10} md={8}>
        {/* Inner Grid: stretch both columns to equal height */}
        <Grid container spacing={2} alignItems="stretch" sx={{ height: '100%' }}>
          
          {/* Left side: Image box */}
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 400,     // Ensures a taller box
                boxSizing: 'border-box',
              }}
            >
              <img
                src={logo}
                alt="Contact"
                style={{ maxWidth: '100%', height: '100%' }}
              />
            </Box>
          </Grid>

          {/* Right side: Contact Info box */}
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                minHeight: 400,    // Ensures a taller box
                boxSizing: 'border-box',
                p: 4, // Increased padding for content
              }}
            >
              <Typography variant="h4" gutterBottom mb={4}>
                Contact Information
              </Typography>
              
              <Box display="flex" alignItems="center" mb={3}>
                <PhoneIcon sx={{ mr: 1 }} />
                <Typography variant="body1">
                  Tel: 210-866-9850
                </Typography>
              </Box>
              
              <Box display="flex" alignItems="center" mb={3}>
                <PrintIcon sx={{ mr: 1 }} />
                <Typography variant="body1">
                  Fax: 210-866-7054
                </Typography>
              </Box>
              
              <Box display="flex" alignItems="center" mb={3}>
                <EmailIcon sx={{ mr: 1 }} />
                <Typography variant="body1">
                  Email: admin@aspirebhp.com
                </Typography>
              </Box>
              
              <Box display="flex" alignItems="center" mb={5}>
                <LocationOnIcon sx={{ mr: 1 }} />
                <Typography variant="body1">
                  14855 Blanco Rd, Suite 355, San Antonio, TX, 78216
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Button sx={{background:'#3a4c17', color:'white'}}>Send an Appointment</Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
