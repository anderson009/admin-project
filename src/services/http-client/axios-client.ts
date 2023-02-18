import axios from 'axios';

const headers = {};
const baseURL = import.meta.env.DEV ? 'http://localhost:3004' : '/api';

const HttpClient = axios.create({
  baseURL,
  headers,
});

export { HttpClient };
