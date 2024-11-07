import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Card, CardContent, Button, Grid, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const services = [
    {
      title: 'Mukesh Kumar, MD',
      description: `Board Certified Psychiatrist `,
      link: '/psychiatry',
    },
  ];

const About = () => {
  const [open, setOpen] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);

  const handleOpenDialog = (provider) => {
    setSelectedProvider(provider);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setSelectedProvider(null);
  };

  return (
    <Box sx={{ textAlign: 'center', my: 4, p: 2 }}>
      {/* Introductory Text */}
      <Typography variant="h6" sx={{ mb: 10, mx: 'auto', textAlign: 'justify', width: '70%' }}>
        At Aspire Behavioral Health, we are a dedicated team of mental health professionals, each bringing a wealth
        of unique training and expertise in treating adults with mental illness. We are committed to delivering the
        highest quality of care through timely access and evidence-based treatment protocols. Our mission is to offer a
        comprehensive range of services, integrating holistic and innovative approaches to enhance clinical outcomes
        while reducing healthcare costs.
        We are passionate about improving access to essential psychiatric services and addressing the mental health
        needs of our community. Our approach is centered on engaging patients in their own treatment plans, ensuring
        they receive the necessary education and understanding of their conditions. By setting personalized
        rehabilitation goals, we aim to improve overall functioning and quality of life.
        Discover how Aspire Behavioral Health can support your mental wellness journey. Call us at PHONE
        NUMBER to schedule your appointment today.
      </Typography>

      <Box sx={{ p: 4 }}>
        <Typography variant='h2'>OUR PROVIDERS:</Typography>
        <Typography variant='h4'>Experts in Mental Health and compassionate care</Typography>
      </Box>

      {/* Service Boxes */}
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 1 }}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.title}>
            <Card sx={{ height: '100%', backgroundColor: '#44591c', color: 'white' }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <Box>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>{service.title}</Typography>
                  <Typography variant="caption" sx={{ textAlign: 'left', my: 2 }}>
                    {service.description}
                  </Typography>
                </Box>
                <Button
                  onClick={() => handleOpenDialog(service)}
                  sx={{ backgroundColor: 'slategrey', color: 'white', mt: 1, mb: 3, alignSelf: 'center' }}
                >
                  More Info
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Dialog for More Info */}
      <Dialog open={open} onClose={handleCloseDialog} fullWidth maxWidth="md">
        <DialogTitle>{selectedProvider?.title}</DialogTitle>
        <DialogContent>
          <Typography variant="body2" paragraph>
            Board-Certified Psychiatrist
          </Typography>
          <Typography variant="body2" paragraph>
            <Typography fontWeight='bold'>Education:</Typography> Dr. Kumar obtained his medical degree from Liaquat Medical College Sindh. He then completed residency in
            Adult Psychiatry at Hennepin County Medical Center/Regions Hospital Psychiatry Training Program, Twin Cities, Minnesota.
          </Typography>
          <Typography variant="body2" paragraph>
          <Typography fontWeight='bold'>Experience:</Typography> Soon after completing his residency, Dr. Kumar began practicing in the psychiatry department at Regions
            Hospital in St. Paul, Minnesota, where he worked for over 3 years. During this time, he also provided care at various
            emergency psychiatric centers across central Minnesota through CentraCare Health Systems.
          </Typography>
          <Typography variant="body2" paragraph>
            Dr. Kumar later expanded his practice to Summit Behavioral Health, where he specialized in managing patients with
            comorbid substance use disorders and mental health conditions. His expertise in treating opioid addiction, particularly
            through Suboxone maintenance therapy, has been a critical part of his work.
          </Typography>
          <Typography variant="body2" paragraph>
            In 2021, Dr. Kumar relocated to San Antonio, Texas, to join Laurel Ridge Treatment Center, one of the largest standalone
            psychiatric care centers in the world. At Laurel Ridge, he worked in behavioral ICUs, treating patients with complex, chronic
            mental health conditions, often complicated by polysubstance abuse. In addition to his inpatient work, Dr. Kumar has
            continued providing outpatient psychiatric care through telehealth services, managing a diverse range of complex
            psychiatric disorders.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default About;
