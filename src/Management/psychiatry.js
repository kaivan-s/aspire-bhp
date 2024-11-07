import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import psychiatryBackground from '../assets/homepage.png';

const Psychiatry = () => (
  <>
    <Box
      sx={{
        height: '80vh',
        backgroundImage: `url(${psychiatryBackground})`,
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

    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'justify', p: 2 }}>
      <Typography variant="h4" gutterBottom>Our Approach</Typography>
      <Typography variant="body1" sx={{ maxWidth: '800px' }}>
        At Aspire Behavioral Health, we understand that mental health is not one-size-fits-all. Our team of board-certified psychiatrists and mental health professionals offers compassionate, personalized care tailored to each patient's unique needs. With extensive experience in diverse healthcare settings, our providers utilize evidence-based treatments to achieve sustainable, high-quality outcomes. We accept most major insurance plans. Please call 651-358-7020 or click here to Book Online to be seen within 1-3 days. Take the first step toward better mental health today.
      </Typography>
    </Box>

    <Box sx={{backgroundColor: '#44591c', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', p: 3 }}>
      <Typography variant="h4" gutterBottom>Conditions We Treat</Typography>
      <List sx={{ maxWidth: '600px', textAlign: 'justify', py: 0 }}>
        {[
          "Bipolar Disorder / Manic Depression",
          "Depression",
          "Insomnia",
          "Schizophrenia",
          "Anxiety attack symptoms / Anxiety disorders",
          "Panic attack",
          "Mood Disorders",
          "Personality Disorders",
          "Obsessive Compulsive Disorders",
          "Post Traumatic Stress Disorders",
          "Attention Deficit Disorder (ADD) / Attention Deficit Hyperactivity Disorder (ADHD)",
          "Other mental health conditions"
        ].map((condition, index) => (
          <ListItem key={index} sx={{ display: 'list-item', py: 0, my: -0.5 }}>
            <ListItemText primary={condition} />
          </ListItem>
        ))}
      </List>
    </Box>
    <Box sx={{backgroundColor:'lightgray'}}></Box>
    <Box sx={{ mt:3,height: 30, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'justify',p:1 }}>
      <Typography variant="h4" gutterBottom>Our Services</Typography>
    </Box>
    <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'justify', width:'50%', ml:"25%",p:2 }}>
      <Typography variant="h5" gutterBottom>Medical Management</Typography>
      <Typography>Mental health disorders can affect anyone, regardless of age or background. While some conditions may be severe, others can be treated with psychotherapeutic medications, leading to a significant improvement in quality of life. These medications can also enhance the effectiveness of other forms of treatment, such as therapy. Thanks to clinical research and advances in mental health, specific causes of mental illnesses have been identified, and tailored medications have been developed to treat them. Since not all patients respond to medications the same way, our team of highly trained psychiatrists develops customized treatment plans unique to each individual patient. At our clinic, we work closely with our patients to create a care plan that is agreed upon by both parties, promoting the highest quality outcomes. Meet with Summit Behavioral Health psychiatric providers today and start your journey towards recovery.</Typography>
    </Box>
    <Box sx={{  display: 'flex', flexDirection: 'column', textAlign: 'justify', width:'50%', ml:"25%",p:2 }}>
      <Typography variant="h5" gutterBottom>PSYCHOTHERAPY</Typography>
      <Typography>Talk therapy, also known as counseling, is a form of psychotherapy that involves a trained mental health professional providing guidance and support to an individual in order to help them overcome a variety of mental health challenges. These challenges can include anxiety, depression, relationship issues, and more. Through talk therapy, individuals can work to understand and process their emotions, improve their coping skills, and gain a deeper understanding of themselves and their experiences. Talk therapy can be provided in a variety of settings, including individual, group, or family sessions, and can be delivered by licensed therapists, psychologists, or other mental health professionals. At Summit Behavioral Health, we offer a range of talk therapy services that are tailored to meet the unique needs of each individual, and are delivered in a compassionate and non-judgmental manner.</Typography>
    </Box>
  </>
);

export default Psychiatry;
