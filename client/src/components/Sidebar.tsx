import { XMarkIcon } from '@heroicons/react/24/solid';

const Sidebar = ({
  sidebar,
  setSidebar,
}: {
  sidebar: Boolean;
  setSidebar: React.Dispatch<React.SetStateAction<Boolean>>;
}) => {
  return (
    <div className='flex h-full flex-col p-4'>
      <XMarkIcon
        className='mb-4 h-5 w-5 cursor-pointer md:hidden'
        onClick={() => setSidebar(!sidebar)}
      />

      <h1 className='rounded-md border-2 border-violet-700 p-2 text-zinc-300'>
        Admin Dashboard
      </h1>

      <div className='mt-6 flex-grow space-y-4 border-t-2 border-zinc-300/20 p-2  tracking-wide  text-zinc-500 underline underline-offset-[5px] md:text-lg'>
        <h1 className='mt-4 cursor-pointer rounded-md p-3 hover:bg-zinc-300/10'>
          View Students
        </h1>
        <h1 className='cursor-pointer rounded-md p-3 hover:bg-zinc-300/10'>
          View Teacher
        </h1>
      </div>
    </div>
  );
};
export default Sidebar;
