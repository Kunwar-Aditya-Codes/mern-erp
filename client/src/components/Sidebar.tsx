import { XMarkIcon, PowerIcon } from '@heroicons/react/24/solid';

const Sidebar = ({
  sidebar,
  setSidebar,
  user,
}: {
  sidebar: Boolean;
  setSidebar: React.Dispatch<React.SetStateAction<Boolean>>;
  user: any;
}) => {
  console.log(user);

  return (
    <div className='flex h-full flex-col p-4'>
      <XMarkIcon
        className='mb-4 h-7 w-7 cursor-pointer rounded-md bg-violet-700 p-1 text-zinc-300 md:hidden'
        onClick={() => setSidebar(!sidebar)}
      />

      <h1 className='rounded-md border-2 border-violet-700 p-2 text-zinc-300'>
        {user.role} Dashboard
      </h1>

      <div className='mt-6 flex-grow space-y-4 border-t-2 border-zinc-300/20 p-2  tracking-wide  text-zinc-500 underline underline-offset-[5px] md:text-lg'>
        {user.role === 'admin' && (
          <>
            <h1 className='mt-4 cursor-pointer rounded-md p-3 hover:bg-zinc-300/10'>
              View Students
            </h1>
            <h1 className='cursor-pointer rounded-md p-3 hover:bg-zinc-300/10'>
              View Teacher
            </h1>
          </>
        )}

        {user.role === 'teacher' && (
          <>
            <h1 className='mt-4 cursor-pointer rounded-md p-3 hover:bg-zinc-300/10'>
              View Students
            </h1>
            <h1 className='cursor-pointer rounded-md p-3 hover:bg-zinc-300/10'>
              View Profile
            </h1>
          </>
        )}

        {user.role === 'student' && (
          <>
            <h1 className='cursor-pointer rounded-md p-3 hover:bg-zinc-300/10'>
              View Profile
            </h1>
            <h1 className='cursor-pointer rounded-md p-3 hover:bg-zinc-300/10'>
              View Marks
            </h1>
          </>
        )}
      </div>

      <div className='flex items-center rounded-md bg-zinc-300/10 p-2 text-zinc-300'>
        <PowerIcon className=' h-7 w-7 cursor-pointer rounded-md bg-violet-700 p-1 text-zinc-300' />
        <span className='ml-2'>Logout</span>
      </div>
    </div>
  );
};
export default Sidebar;
