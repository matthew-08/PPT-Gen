import { Text } from '@chakra-ui/react';
import { Routes } from 'react-router-dom';
import './global.css';
import { Provider } from 'react-redux';
import DefaultLayout from './layouts/DefaultLayout';
import AppRoutes from './routes/AppRoutes';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
