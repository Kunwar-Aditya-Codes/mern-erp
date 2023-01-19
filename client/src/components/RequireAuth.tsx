import { Outlet, Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const RequireAuth = ({ allowedRole }: { allowedRole: string[] }) => {
  const location = useLocation();
  const userDecoded = useAuth();

  return (
    <>
      {allowedRole.includes(userDecoded?.role) ? (
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
