import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import psychiatryBackground from '../assets/psychiatry.png';

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
      At Aspire Behavioral Health, we believe that mental health care should be as unique as each individual. Our team of board-certified psychiatrists and mental health professionals is committed to delivering personalized, compassionate care that addresses your specific needs. Drawing on extensive experience across diverse healthcare settings, we use evidence-based treatments to ensure effective and lasting results.
      <br/>
      <br/>
      We accept most major insurance plans and strive to offer timely access to care. To schedule your appointment, please call us at 210-866-9850. Start your journey toward better mental health with Aspire Behavioral Health today.
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
      <Typography variant="h5" gutterBottom>Medication Management</Typography>
      <Typography>At Aspire Behavioral Health, we understand that mental health disorders can affect anyone, regardless of age or background. While some conditions may feel overwhelming, others respond well to psychotherapeutic medications that can significantly enhance quality of life. These medications not only alleviate symptoms but can also amplify the benefits of other treatments, such as therapy.
<br/><br/>
Thanks to ongoing clinical research and advancements in psychiatry, we now better understand the underlying causes of many mental health conditions. This progress has enabled the development of medications specifically tailored to address various mental health challenges. However, we recognize that every individual is unique, and not all patients respond to medications in the same way.
<br/><br/>
That’s why our highly trained psychiatrists take a personalized approach to care. We work collaboratively with each patient to develop customized treatment plans tailored to their specific needs, preferences, and goals. At Aspire, we believe in shared decision-making, ensuring that every care plan is created with mutual agreement to promote the best possible outcomes.
<br/><br/>
Take the first step toward a healthier, more fulfilling life. Schedule an appointment with Aspire Behavioral Health today and let our compassionate team guide you on your journey to recovery.
</Typography>
    </Box>
    {/* <Box sx={{  display: 'flex', flexDirection: 'column', textAlign: 'justify', width:'50%', ml:"25%",p:2 }}>
      <Typography variant="h5" gutterBottom>PSYCHOTHERAPY</Typography>
      <Typography>Talk therapy, also known as counseling, is a form of psychotherapy that involves a trained mental health professional providing guidance and support to an individual in order to help them overcome a variety of mental health challenges. These challenges can include anxiety, depression, relationship issues, and more. Through talk therapy, individuals can work to understand and process their emotions, improve their coping skills, and gain a deeper understanding of themselves and their experiences. Talk therapy can be provided in a variety of settings, including individual, group, or family sessions, and can be delivered by licensed therapists, psychologists, or other mental health professionals. At Summit Behavioral Health, we offer a range of talk therapy services that are tailored to meet the unique needs of each individual, and are delivered in a compassionate and non-judgmental manner.</Typography>
    </Box> */}
  </>
);

export default Psychiatry;
