import { HttpClient } from './axios-client';

interface ParamsInterceptor {
  unauthorized?: () => void;
}

const SetupInterceptor = (arg: ParamsInterceptor): any => {
  console.log('SetupInterceptor');

  // config interceptor set token in header
  HttpClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token !== undefined) {
      if (config.headers !== undefined) config.headers.Authorization = `Bearer ${token ?? ''}`;
    }

    return config;
  });

  HttpClient.interceptors.response.use(
    (res): any => {
      return res;
    },
    (error: any): any => {
      const { status } = error.response;
      const { url } = error.config;
      console.log('error', error);

      if (status === 401 && url.includes('admin/login') === false) {
        if (arg.unauthorized !== undefined) {
          arg.unauthorized();
          return;
        }
      }

      return Promise.reject(error);
    }
  );
};

export { SetupInterceptor };
