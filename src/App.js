import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServiceHighlights from './components/ServiceHighlights';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import Psychiatry from './/Management/psychiatry';
import Telehealth from './/Management/telehealth';
import Form from './/forms/Form'
import Box from '@mui/material/Box';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Box maxWidth="100vw" sx={{ pt: 8 }}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <ServiceHighlights />
                  {/* <WhyChooseUs /> */}
                </>
              }
            />
            <Route path="/psychiatry" element={<Psychiatry />} />
            <Route path="/telehealth" element={<Telehealth />} />
            <Route path="/online-forms" element={<Form />} />
            <Route path='/about-us' element={<About/>}/>
            <Route path='/contact-us' element={<Contact/>}/>
          </Routes>
        </Box>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
