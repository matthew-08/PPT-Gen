import { Text } from '@chakra-ui/react';
import { Routes } from 'react-router-dom';
import './global.css';
import DefaultLayout from './layouts/DefaultLayout';
import AppRoutes from './routes/AppRoutes';

function App() {
  return <AppRoutes />;
}

export default App;
