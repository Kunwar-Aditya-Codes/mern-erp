import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className='flex h-full  items-center justify-center p-4'>
      <div className='flex  flex-col space-y-8 rounded-md bg-zinc-900/80 p-6 text-center shadow-lg lg:space-y-16 lg:p-24'>
        <h1 className='text-4xl lg:text-6xl'>
          Welcome to <span className='font-bold text-violet-700'>MERN ERP</span>
        </h1>
        <p className='text-lg font-light tracking-wide text-zinc-300 lg:text-xl'>
          A simple MERN stack application with a focus on ERP features.
        </p>

        <div className='flex flex-col items-center space-y-6 text-white lg:flex-row lg:justify-evenly lg:space-y-0 lg:text-lg '>
          <Link
            to='/login'
            className='w-fit rounded-md bg-violet-700 px-4 py-2 transition-all
          ease-in-out hover:scale-105'
          >
            Admin Login
          </Link>

          <Link
            to='/student-login'
            className='w-fit rounded-md bg-violet-700 px-4 py-2 transition-all ease-in-out hover:scale-105'
          >
            Student Login
          </Link>
          <Link
            to='/teacher-login'
            className='w-fit rounded-md bg-violet-700 px-4 py-2 transition-all ease-in-out hover:scale-105'
          >
            Teacher Login
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
