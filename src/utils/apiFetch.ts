import { getToken } from './tokenUtil';

const api = import.meta.env.VITE_API_URL || 'http://localhost:3005';

type Endpoints = 'templates' | 'sessions' | 'users';

type Input = {
  route:
    | `/api/${Endpoints}`
    | `/api/${Endpoints}/${string}/${Endpoints}`
    | `/api/${Endpoints}/${string}`;
  method: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH';
  data?: Record<any, any>;
};

const apiFetch = async ({ method, route, data }: Input) => {
  const includeBody =
    method === 'POST' || method === 'PATCH' || method === 'DELETE';
  const options = {
    ...(includeBody && { body: JSON.stringify(data) }),
    headers: {
      ...(includeBody && { 'Content-Type': 'application/json' }),
      Authorization: `Bearer ${getToken() || ''}`,
    },
    method,
  };
  return fetch(`${api}${route}`, options);
};

export default apiFetch;
