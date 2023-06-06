/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Home from '../pages/Home';
import Register from '../pages/Register';
import About from '../pages/About';
import Contact from '../pages/Contact';
import useRefreshSession from '../hooks/useRefreshSession';

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
    </Routes>
  );
}

export default AppRoutes;
