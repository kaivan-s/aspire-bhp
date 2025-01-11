import React from 'react';
import { Box, Typography, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';
import PrintIcon from '@mui/icons-material/Print';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => (
  <Box 
    sx={{ 
      p: 2, 
      bgcolor: 'black', 
      color: 'white'
    }}
  >
    {/* Container for all three sections (left/center/right) */}
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 2, // space between items on small screens
      }}
    >
      {/* Left: Address */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}
      >
        <LocationOnIcon />
        <Typography variant="body2" textAlign="left">
          Aspire Behavioral Health
          <br />
          14855 Blanco Rd, Suite 355,
          <br />
          San Antonio, TX, 78216
        </Typography>
      </Box>

      {/* Center: Phone, Fax, Email */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',   // stack phone/fax/email vertically
          alignItems: 'center',
          gap: 1
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

      {/* Right: Privacy Policy Link */}
      <Box sx={{ textAlign: 'right' }}>
        <MuiLink
          component={Link}
          to="/privacy"
          sx={{ 
            color: 'white', 
            textDecoration: 'underline' 
          }}
        >
          Privacy Policy
        </MuiLink>
      </Box>
    </Box>
  </Box>
);

export default Footer;
