import { getToken } from './tokenUtil';

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
  const isPostOrPatch = method === 'POST' || method === 'PATCH';
  const options = {
    ...(isPostOrPatch && { body: JSON.stringify(data) }),
    headers: {
      ...(isPostOrPatch && { 'Content-Type': 'application/json' }),
      Authorization: `Bearer ${getToken() || ''}`,
    },
    method,
  };
  return fetch(`http://localhost:3005${route}`, options);
};

export default apiFetch;
