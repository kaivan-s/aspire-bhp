import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Card, CardContent, Button, Grid } from '@mui/material';

const services = [
  {
    title: 'Psychiatry',
    description: `At Aspire Behavioral Health, we believe mental health care should be as unique as each individual. Our team of board-certified psychiatrists and mental health professionals offers compassionate, personalized care, using evidence-based treatments for effective, lasting results. We accept most major insurance plans and provide timely access to care. Call us at PHONE NUMBER or book online to start your journey toward better mental health with Aspire Behavioral Health today.`,
    link: '/psychiatry',
  },
  {
    title: 'Telehealth',
    description: `We offer TelePsychiatry and TelePsychology services, providing flexibility to attend sessions from your own home, ideal for busy or remote individuals. Telehealth enhances safety, reduces travel needs, and offers the comfort of your environment. These virtual services are covered by most insurance plans. Call us at PHONE NUMBER or book online to experience convenient, high-quality mental health care with Aspire Behavioral Health.`,
    link: '/telehealth',
  },
];

const ServiceHighlights = () => (
  <Box sx={{ textAlign: 'center', my: 4, p: 2 }}>
    {/* Introductory Text */}
    <Typography variant="h6" sx={{ mb: 4, mx: 'auto', textAlign: 'justify', width: '70%' }}>
    At Aspire Behavioral Health, our mission is to provide compassionate, personalized psychiatric care that empowers individuals to achieve mental wellness. We are dedicated to utilizing evidence-based treatments and holistic approaches to help our patients reach their full potential and live fulfilling, balanced lives. Our providers are licensed in Minnesota and Texas. Please call us at 210-866-9850 to schedule your appointment.
    </Typography>

    {/* Service Boxes */}
    <Grid container spacing={4} justifyContent="center">
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
                component={Link}
                to={service.link}
                sx={{ backgroundColor: 'slategrey', color: 'white', mt: 1, mb: 3, alignSelf: 'center' }}
              >
                More Info
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default ServiceHighlights;
