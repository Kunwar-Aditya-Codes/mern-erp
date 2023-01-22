import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { useRefreshMutation } from '../app/slices/authApiSlice';
import { selectToken } from '../app/slices/authSlice';
import usePersist from '../hooks/usePersist';

const PersistLogin = () => {
  const [persist] = usePersist();

  const token = useSelector(selectToken);

  const effectRan = useRef(false);

  const [trueSuccess, setTrueSuccess] = useState(false);

  const [refresh, { isLoading, isSuccess, isError, isUninitialized, error }] =
    useRefreshMutation();

  useEffect((): any => {
    if (effectRan.current === true || process.env.NODE_ENV !== 'development') {
      const verifyRefreshToken = async () => {
        try {
          await refresh({});
          setTrueSuccess(true);
        } catch (error) {
          console.log(error);
        }
      };

      if (!token && persist) {
        verifyRefreshToken();
      }
    }

    return () => (effectRan.current = true);
  }, []);

  let content;
  if (!persist) {
    content = <Outlet />;
  } else if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isError) {
    console.log('isError');
    content = (
      <div className='flex min-h-screen items-center justify-center space-x-3 text-violet-700 md:text-xl'>
        Not Authorized!
        <p>
          <Link to='/'>
            <span className='mx-1 underline'>Login</span>
          </Link>
          to continue
        </p>
      </div>
    );
  } else if (isSuccess && trueSuccess) {
    content = <Outlet />;
  } else if (token && isUninitialized) {
    console.log(isUninitialized);
    content = <Outlet />;
  }

  return <>{content}</>;
};
export default PersistLogin;
