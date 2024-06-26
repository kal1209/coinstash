import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Games from '../pages/Games';
import BabylonToolkit from '../pages/BabylonToolkit';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/games" element={<Games />} />
      <Route path="/babylon-toolkit" element={<BabylonToolkit />} />
    </Routes>
  );
};

export default AppRoutes;
