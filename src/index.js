import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import About from './About';

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollButton from './components/ScrollButton';

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about-us" element={<About />} />
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
    <Footer />
    <ScrollButton />
  </BrowserRouter>,
  document.getElementById("root")
);