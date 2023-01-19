import jwtDecode from 'jwt-decode';
import { useSelector } from 'react-redux';
import { selectToken } from '../app/slices/authSlice';

const useAuth = () => {
  interface userDecoded {
    email: string;
    role: string;
  }

  const token = useSelector(selectToken);
  let userDecoded: userDecoded = {
    email: '',
    role: '',
  };

  if (token) {
    const decodedToken: userDecoded = jwtDecode(token);

    userDecoded = {
      email: decodedToken.email,
      role: decodedToken.role,
    };

    return userDecoded;
  }

  return userDecoded;
};

export default useAuth;
