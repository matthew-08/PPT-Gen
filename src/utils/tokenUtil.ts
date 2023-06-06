const getToken = () => {
  return localStorage.getItem('token');
};

const setToken = (token: string) => {
  return localStorage.setItem('token');
};

export { getToken, setToken };
