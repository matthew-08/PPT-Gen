import { string } from 'zod';

const getToken = () => {
  return localStorage.getItem('token');
};

const setToken = (token: string) => {
  return localStorage.setItem('token', token);
};

export { getToken, setToken };
