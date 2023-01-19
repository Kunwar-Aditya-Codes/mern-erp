import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div className='relative flex h-full'>
      <div
        className={`${
          sidebar ? 'tanslate-x-0' : '-translate-x-full'
        } absolute h-full w-full transform border-b-2 border-zinc-300/20 bg-zinc-900/80 duration-300 ease-in-out md:relative md:flex-[0.2]`}
      >
        <Sidebar />
      </div>
      <div className='md:flex-[0.8]'>
        <Outlet />
      </div>
    </div>
  );
};
export default Dashboard;
