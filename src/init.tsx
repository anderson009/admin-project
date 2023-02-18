import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SetupInterceptor } from './services/http-client/interceptors';

const InitzializeApp = (): JSX.Element => {
  const navigate = useNavigate();

  const unauthorizedFn = (): void => {
    navigate('/login', { replace: true });
  };

  useEffect(() => {
    SetupInterceptor({
      unauthorized: unauthorizedFn,
    });
  }, []);

  return <></>;
};

export { InitzializeApp };
