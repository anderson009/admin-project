import { HttpClient } from '../http-client/axios-client';

async function registerUser(data: any): Promise<any> {
  const result = await HttpClient.post('auth/register', data);
  return result.data;
}

async function login(data: any): Promise<any> {
  const result = await HttpClient.post('auth/login', data);
  return result.data;
}

const AuthService = {
    registerUser,
    login
};

export { AuthService };
