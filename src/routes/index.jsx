// src/App.jsx
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Navigation from "../components/Navigation"


import Home from "../pages/Home";
import Midia from '../pages/Midia';
import Login from "../pages/Login";
import RegisterPage from "../pages/register";



import Footer from "../components/Footer"


const App = () => {
  return (
    <Router>
        <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/midia" element={<Midia />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
       
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
