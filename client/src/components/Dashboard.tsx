import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Bars3Icon } from '@heroicons/react/24/solid';
import useAuth from '../hooks/useAuth';

const Dashboard = () => {
  const userDecoded = useAuth();
  const [sidebar, setSidebar] = useState<Boolean>(false);

  return (
    <div className='relative flex h-full overflow-hidden'>
      <div
        className={`${
          sidebar ? 'translate-x-0' : '-translate-x-full'
        } absolute h-full w-full transform border-b-2 border-zinc-300/20 bg-zinc-900 duration-300 ease-in-out md:relative md:flex-[0.2]  md:translate-x-0`}
      >
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} user={userDecoded} />
      </div>
      <div className='flex-grow space-y-4 p-4 md:flex-[0.8]'>
        <Bars3Icon
          className='h-5 w-5 cursor-pointer md:hidden'
          onClick={() => setSidebar(!sidebar)}
        />
        <Outlet />
      </div>
    </div>
  );
};
export default Dashboard;
