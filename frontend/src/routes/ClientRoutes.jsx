import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Client/Dashboard';

const ClientRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default ClientRoutes;