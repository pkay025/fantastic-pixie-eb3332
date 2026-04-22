const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://interim-assesment-pkay025-1-1.onrender.com';

const parseResponseBody = async (res) => {
  const contentType = res.headers.get('content-type') || '';
  return contentType.includes('application/json')
    ? await res.json().catch(() => null)
    : await res.text().catch(() => null);
};

export const registerUser = async (payload) => {
  let res;

  try {
    res = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new Error('Unable to reach the server. Please check your connection and try again.');
  }

  const data = await parseResponseBody(res);

  return { res, data };
};

export const loginUser = async (payload) => {
  let res;

  try {
    res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new Error('Unable to reach the server. Please check your connection and try again.');
  }

  const data = await parseResponseBody(res);

  return { res, data };
};
