import { getToken } from './tokenUtil';

type Endpoints = 'template' | 'session' | 'user';

type Input = {
  route: `/api/${Endpoints}`;
  method: 'POST' | 'GET' | 'PUT';
  data?: Record<any, any>;
};

const apiFetch = async ({ method, route, data }: Input) => {
  const isPost = method === 'POST';
  const options = {
    ...(isPost && { body: JSON.stringify(data) }),
    headers: {
      ...(isPost && { 'Content-Type': 'application/json' }),
      Authorization: `Bearer ${getToken() || ''}`,
    },
    method,
  };
  return fetch(`http://localhost:3005${route}`, options);
};

export default apiFetch;
