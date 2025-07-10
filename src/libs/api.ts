import axios from 'axios';

const api = axios.create({
  baseURL: process.env.BACKEND_HTTP_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器：添加认证token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});

export default api;