import { TrashIcon } from '@heroicons/react/24/solid';
import { useDeleteUserMutation } from '../app/slices/adminApiSlice';

const ListTable = ({ data }: any) => {
  const [deleteUser] = useDeleteUserMutation();

  const handleDelete = (role: string, _id: string) => {
    deleteUser({ role, _id });
  };

  return (
    <table className='w-full text-center'>
      <thead className=''>
        <tr className='md:text-xl '>
          <th className='w-1/4 '>Name</th>
          <th className='hidden w-1/4 md:table-cell'>Email</th>
          <th className='w-1/4'>Id</th>
        </tr>
      </thead>

      <tbody className='space-y-4'>
        {data.map((user: any) => (
          <tr key={user._id} className='border-b border-b-zinc-800'>
            <td className='py-4'>{user.name}</td>
            <td className='hidden md:table-cell'>{user.email}</td>
            <td>{user.id}</td>
            <td className='w-1/4'>
              <button onClick={() => handleDelete(user.role, user._id)}>
                <TrashIcon className='h-5 w-5 hover:text-red-500' />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default ListTable;
