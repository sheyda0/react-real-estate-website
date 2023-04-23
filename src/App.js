import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (<div className="max-w-[1440px] mx-auto bg-white">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/property/:id" element={<PropertyDetails />} />
    </Routes>
    <Footer />
  </div>)
};

export default App;
