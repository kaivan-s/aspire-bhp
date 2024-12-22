import React from 'react';
import { Box, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import PrintIcon from '@mui/icons-material/Print';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => (
  <Box 
    sx={{ 
      p: 2, 
      bgcolor: 'black', 
      color: 'white', 
      textAlign: 'center' 
    }}
  >
    {/* Top Row: Address on left, Phone/Fax/Email on right */}
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',  // Space between columns
        alignItems: 'center',
        gap: 5,
      }}
    >
      {/* Left Column: Address */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          flex: '1 1 300px', // ensures it can shrink/grow but has min width
          justifyContent: { xs: 'center',},
        }}
      >
        <LocationOnIcon />
        <Typography variant="body2" textAlign={'justify'} letterSpacing={1}>
          Aspire Behavioral Health
          <br/>
          14855 Blanco Rd, Suite 355, 
          <br/>San Antonio, TX, 78216
        </Typography>
      </Box>

      {/* Right Column: Phone, Fax, Email */}
      <Box
        sx={{
          display: 'flex',
          flexDirection:'column',
          gap: 2,
          alignItems:'flex-start',
          flex: '1 1 300px', // ensures it can shrink/grow but has min width
        }}
      >
        {/* Phone */}
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1 
          }}
        >
          <PhoneIcon />
          <Typography variant="body2">
            210-866-9850
          </Typography>
        </Box>
        
        {/* Fax */}
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1 
          }}
        >
          <PrintIcon />
          <Typography variant="body2">
            210-866-7054
          </Typography>
        </Box>
        
        {/* Email */}
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1 
          }}
        >
          <EmailIcon />
          <Typography variant="body2">
            admin@aspirebhp.com
          </Typography>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default Footer;
