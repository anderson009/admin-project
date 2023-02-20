import { useContext } from 'react';
import { AuthContext, AuthContextModel } from '../contexts/AuthProvider';

const useAuth = (): AuthContextModel => useContext(AuthContext);
export { useAuth };
