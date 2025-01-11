import React from 'react';
import { Box, Typography } from '@mui/material';

const PrivacyPolicy = () => (
  <Box sx={{ p: 2, maxWidth: '800px', margin: 'auto' }}>
    <Typography variant="h4" gutterBottom>
      Privacy Policy for Aspire Behavioral Health Partners (Aspire BHP)
    </Typography>

    <Typography variant="body1" gutterBottom>
      <strong>Effective Date:</strong> December 24th, 2024
    </Typography>

    <Typography variant="body1" paragraph>
      Aspire Behavioral Health Partners (Aspire BHP) is committed to protecting your privacy and ensuring 
      the confidentiality of your personal and health information in accordance with the Health Insurance 
      Portability and Accountability Act (HIPAA) and other applicable laws. This Privacy Policy explains how 
      we collect, use, and protect your information, including when you use our online forms and receive 
      reminder texts or emails.
    </Typography>

    <Typography variant="h6" gutterBottom>
      1. Information We Collect
    </Typography>
    <Typography variant="body1" paragraph>
      We may collect the following types of information:
      <ul>
        <li>Personal Information: Name, address, phone number, email address, date of birth, and insurance details.</li>
        <li>Health Information: Medical history, diagnosis, treatment details, and other health-related data.</li>
      </ul>
    </Typography>

    <Typography variant="h6" gutterBottom>
      2. How We Use Your Information
    </Typography>
    <Typography variant="body1" paragraph>
      The information we collect is used to:
      <ul>
        <li>Provide you with high-quality behavioral health services.</li>
        <li>Schedule and manage appointments, including sending reminder texts and emails.</li>
        <li>Facilitate the completion of HIPAA-protected online forms, such as intake and follow-up appointment forms.</li>
        <li>Communicate with you regarding your treatment, billing, or insurance claims.</li>
        <li>Ensure compliance with legal and regulatory requirements.</li>
      </ul>
    </Typography>

    <Typography variant="h6" gutterBottom>
      3. Communications and Reminders
    </Typography>
    <Typography variant="body1" paragraph>
      We may send you appointment reminders via text messages or emails. These communications will be limited to:
      <ul>
        <li>Upcoming appointment details.</li>
        <li>Requests to complete online forms.</li>
        <li>Other essential information related to your care.</li>
      </ul>
      By providing your phone number and email address, you consent to receive these communications. If you prefer not 
      to receive reminders, please notify our office in writing or by phone.
    </Typography>

    <Typography variant="h6" gutterBottom>
      4. How We Protect Your Information
    </Typography>
    <Typography variant="body1" paragraph>
      We implement stringent measures to safeguard your personal and health information, including:
      <ul>
        <li>Encryption of all electronic communications and online forms.</li>
        <li>Secure storage of data in HIPAA-compliant systems.</li>
        <li>Limiting access to your information to authorized personnel only.</li>
      </ul>
      Despite these precautions, no system can guarantee 100% security. If you suspect a breach, please contact us immediately.
    </Typography>

    <Typography variant="h6" gutterBottom>
      5. Sharing Your Information
    </Typography>
    <Typography variant="body1" paragraph>
      We will not share your information without your explicit consent except in the following circumstances:
      <ul>
        <li>As required by law, such as during public health reporting or legal proceedings.</li>
        <li>To authorized healthcare providers involved in your care.</li>
        <li>To insurance companies for billing and claims purposes.</li>
      </ul>
    </Typography>

    <Typography variant="h6" gutterBottom>
      6. Your Rights
    </Typography>
    <Typography variant="body1" paragraph>
      Under HIPAA, you have the following rights:
      <ul>
        <li>Access your medical records and request copies.</li>
        <li>Request corrections to your records.</li>
        <li>Limit how we use or disclose your information.</li>
        <li>Revoke consent for certain communications, such as reminders.</li>
        <li>File a complaint if you believe your privacy rights have been violated.</li>
      </ul>
    </Typography>

    <Typography variant="h6" gutterBottom>
      7. Updates to This Privacy Policy
    </Typography>
    <Typography variant="body1" paragraph>
      We may update this Privacy Policy from time to time to reflect changes in regulations or practices. 
      The most current version will always be available on our website or at our office.
    </Typography>

    <Typography variant="h6" gutterBottom>
      8. Contact Us
    </Typography>
    <Typography variant="body1" paragraph>
      If you have any questions or concerns about this Privacy Policy, your privacy rights, or the handling of your 
      information, please contact us:
      <br />
      Aspire BHP<br/>
      14855 Blanco Rd, Suite 355, San Antonio, TX, 78216<br/>
      210-866-9850<br/>
      Admin@aspirebhp.com
    </Typography>

    <Typography variant="body1" paragraph>
      Your trust is essential to us, and we are dedicated to protecting your privacy as part of our commitment 
      to providing exceptional care.
    </Typography>
  </Box>
);

export default PrivacyPolicy;
