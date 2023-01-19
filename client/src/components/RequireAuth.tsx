import { Outlet, Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const RequireAuth = ({ allowedRole }: { allowedRole: string }) => {
  const location = useLocation();
  const userDecoded = useAuth();

  return (
    <>
      {userDecoded.role === allowedRole ? (
        <Outlet />
      ) : (
        <Navigate
          to='/'
          state={{
            from: location,
          }}
          replace
        />
      )}
    </>
  );
};

export default RequireAuth;
