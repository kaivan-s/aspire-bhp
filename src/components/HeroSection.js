import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import homepage from '../assets/homepage.png';

const HeroSection = () => (
  <Box
    sx={{
      height: '80vh',
      backgroundImage: `url(${homepage})`, // Use template literal to set the imported image as a background
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    }}
  >
  </Box>
);

export default HeroSection;
