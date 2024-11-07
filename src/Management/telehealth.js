import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import psychiatryBackground from '../assets/homepage.png';

const Telehealth = () => (
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

    <Box sx={{  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'justify', p: 1 }}>
      <Typography variant="h4" sx={{p:1}} gutterBottom>Our Approach</Typography>
      <Box sx={{  display: 'flex', flexDirection: 'column', textAlign: 'justify', width:'50%',p:1 }}>
      <Typography variant="body1">
      At Aspire Behavioral Health, we are excited to offer
our TelePsychiatry and TelePsychology services to our
patients. Our virtual appointments offer convenience
and flexibility, allowing you to attend sessions without
the need for travel or time away from your daily routine.
This option is particularly beneficial for those with busy
schedules or who live in remote areas.
Telepsychiatry also enhances safety by reducing the
risk of exposure to illnesses, and it provides a relaxed
environment that may help you feel more at ease
during your sessions. Effective as in-person visits and
billed to your insurance in the same way, these services
are designed to fit seamlessly into your life.
Enjoy the convenience and safety of receiving
top-quality care from your own home. We accept most
major insurance plans. To schedule your appointment,
please call us at PHONE NUMBER or book online.
Start your journey toward better mental health with
Aspire Behavioral Health today
      </Typography>
      </Box>
    </Box>

    <Box sx={{ mt:3, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'justify',p:1 }}>
    <Typography variant="h4" gutterBottom>Our Services</Typography>
    </Box>
    <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'justify', width:'50%', ml:"25%",p:1 }}>
    <Typography variant="h5" gutterBottom>MEDICATION MANAGEMENT </Typography>
    <Typography>We understand that mental health and psychiatric disorders can impact anyone, regardless of age or background. While some mental illnesses can be severe, others may be milder and can be treated with psychotherapeutic medications, resulting in a significant improvement in quality of life. Medications can also enhance the effectiveness of other types of treatment, such as therapy. With advancements in the field of mental health and clinical research, specific causes of mental illness have been identified, and medications have been developed that can be effective at treating these conditions. Our highly trained Psychiatrists work with each patient to develop a personalized treatment plan that is tailored to their individual needs and unique situation, ensuring the highest quality outcomes. Contact Summit Behavioral Health Psychiatry providers today to begin your journey towards recovery.</Typography>
    </Box>
    <Box sx={{  display: 'flex', flexDirection: 'column', textAlign: 'justify', width:'50%', ml:"25%",p:1 }}>
    <Typography variant="h5" gutterBottom>PSYCHOTHERAPY</Typography>
    <Typography>Psychotherapy is an essential component of our mental health services. It has been shown to be effective in engaging patients at a personal level, providing them with the necessary incentives to remain committed to their recovery. We believe in utilizing psychotherapy in conjunction with medication management to sustain the impact of medications and provide comprehensive care to our patients. We understand that seeking help for mental health services can be a challenging and confusing process, and Summit Behavioral Health is committed to making it easier for our patients to access the care they need. That's why we strive to offer appointments as quickly as possible. Our goal is to create a welcoming and supportive environment where patients can feel comfortable opening up and sharing their struggles, and where they can receive the best care possible to help them on their journey to recovery.</Typography>
    </Box>
    <Box sx={{ mt: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'justify', backgroundColor: '#e3f3c5', p: 4 }}>
      <Typography variant="h4" gutterBottom>Benefits of TeleHealth</Typography>
      <List sx={{ width: '55%', textAlign: 'left' }}>
        <ListItem>
          <ListItemText
            primary="CONVENIENCE"
            secondary="With Telehealth services, you can easily meet with our providers from the comfort of your own home. Our secure video visit technology is HIPAA compliant and can be accessed from any mobile device or computer. No need to download any apps – simply click on the secure link that your provider texts to your cellphone to join the video visit."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="TIMELINESS"
            secondary="At Summit BHP, we understand that access to care is important. That's why we offer TelePsychiatry appointments to both new and existing patients within 1-3 days. Simply fill out the required forms online and we will call you to schedule your appointment within 12-24 hours."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="EASE OF USE"
            secondary="Our video visit technology is easy to use and similar to popular consumer video conference technologies such as Facetime, Google Duo, or Skype. With just one click, you can connect to your provider from any place with an internet connection."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="COST EFFECTIVE"
            secondary="Telehealth services can save you time and money by eliminating the need to travel to a physical clinic. You can avoid the hassles associated with making travel arrangements and be seen by your provider right from home."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="ACCESS TO CARE"
            secondary="Our Telehealth services provide easy access to highly qualified and compassionate providers. Whether you're a new or existing patient, you can receive the care you need without any unnecessary barriers."
          />
        </ListItem>
      </List>
    </Box>
  </>
);

export default Telehealth;
