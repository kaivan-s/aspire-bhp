import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import psychiatryBackground from '../assets/telehealth.png';

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
        At Aspire Behavioral Health, we are excited to offer TelePsychiatry and TelePsychology services to our patients. Our virtual appointments offer convenience and flexibility, allowing you to attend sessions without the need for travel or time away from your daily routine. This option is particularly beneficial for those with busy schedules or who live in remote areas.
        <br/><br/>
        Telepsychiatry also enhances safety by reducing the risk of exposure to illnesses, and it provides a relaxed environment that may help you feel more at ease during your sessions. Effective as in-person visits and billed to your insurance in the same way, these services are designed to fit seamlessly into your life.
        <br/><br/>
        Enjoy the convenience and safety of receiving top-quality care from your own home. We accept most major insurance plans. To schedule your appointment, please call us at 210-866-9850. Start your journey toward better mental health with Aspire Behavioral Health today.
      </Typography>
      </Box>
    </Box>

    <Box sx={{ mt: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'justify', backgroundColor: '#e3f3c5', p: 4 }}>
      <Typography variant="h4" gutterBottom>Benefits of TeleHealth</Typography>
      <List sx={{ width: '55%', textAlign: 'left' }}>
        <ListItem>
          <ListItemText
            primary="Convenience"
            secondary="Telehealth visits offer unparalleled convenience by allowing you to access care from the comfort of your home or any private space. Without the need to commute, you save valuable time and avoid the stress of traveling to appointments. Flexible scheduling ensures that telehealth fits seamlessly into even the busiest of lifestyles."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Improved Access to Care"
            secondary="For those living in underserved or rural areas, telehealth significantly improves access to care. It removes geographical barriers, making mental health professionals more accessible. This is particularly beneficial for individuals with limited mobility or transportation challenges."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Continuity of Care"
            secondary="Continuity of care is easier to maintain with telehealth visits. Whether you’re traveling or dealing with unexpected circumstances, virtual appointments ensure you can stick to your treatment plan without interruption. This consistent approach helps maintain progress and achieve better outcomes."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Privacy and Comfort"
            secondary="Many patients appreciate the privacy and comfort that telehealth visits provide. Being able to connect with your provider from a familiar environment can reduce anxiety and create a safe space for open communication. For those hesitant about in-person visits, telehealth offers a less intimidating alternative."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Reduced Stigma"
            secondary="By removing the need to visit a physical clinic, telehealth helps reduce the stigma associated with seeking mental health care. This discreet option makes it easier for individuals to prioritize their mental well-being without fear of judgment."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Cost-Effectiveness"
            secondary="Telehealth can also be a cost-effective choice. With no travel expenses and less time away from work or family, patients can save money and manage their schedules more efficiently. Additionally, many insurance plans now cover telehealth visits, making this form of care more affordable."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Flexibility for Emergencies or Follow-Ups"
            secondary="Finally, telehealth visits offer flexibility for emergencies or routine follow-ups. Whether you need immediate care or a simple medication adjustment, virtual appointments provide quick and effective solutions."
          />
        </ListItem>
        
      </List>
    </Box>
  </>
);

export default Telehealth;
