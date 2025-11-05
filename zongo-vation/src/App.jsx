import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@components/layout/Layout';
import ScrollToTop from '@components/ScrollToTop'; // Add this
import Home from '@pages/Home';
import About from '@pages/About';
import Projects from '@pages/Projects';
import Services from '@pages/Services';
import Investors from '@pages/Investors';
import Partnerships from '@pages/Partnerships';
import Contact from '@pages/Contact';

function App() {
  return (
    <Layout>
      <ScrollToTop /> {/* Add this line */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/partnerships" element={<Partnerships />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;