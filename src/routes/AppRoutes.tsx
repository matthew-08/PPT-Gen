/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Home from '../pages/Home';
import Register from '../pages/Register';
import About from '../pages/About';
import Contact from '../pages/Contact';
import useRefreshSession from '../hooks/useRefreshSession';
import Dashboard from '../pages/Dashboard';

function AppRoutes() {
  const { handleRefreshSession } = useRefreshSession();
  useEffect(() => {
    handleRefreshSession();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default AppRoutes;
