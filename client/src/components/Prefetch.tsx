import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { adminApiSlice } from '../app/slices/adminApiSlice';
import { store } from '../app/store';

export const Prefetch = () => {
  useEffect(() => {
    store.dispatch(
      adminApiSlice.util.prefetch('getStudents', 'studentsList', {
        force: true,
      })
    );
    store.dispatch(
      adminApiSlice.util.prefetch('getTeachers', 'teachersList', {
        force: true,
      })
    );
  }, []);

  return <Outlet />;
};

export default Prefetch;
