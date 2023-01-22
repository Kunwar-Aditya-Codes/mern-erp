import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import toast from 'react-hot-toast';
import { useCreateUserMutation } from '../../app/slices/adminApiSlice';

const AdminHome = () => {
  interface FormData {
    username: string;
    email: string;
    role: string;
    password: string;
    uid: string;
  }

  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    role: '',
    password: '',
    uid: '',
  });

  const [modal, setModal] = useState<Boolean>(false);

  const [createUser] = useCreateUserMutation();

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast.loading('Creating User...', { id: 'createUser' });

    if (
      formData.username === '' ||
      formData.email === '' ||
      formData.role === '' ||
      formData.password === '' ||
      formData.uid === ''
    ) {
      toast.error('Please fill all the fields', { id: 'createUser' });
      return;
    }

    const res: any = await createUser({
      name: formData.username,
      email: formData.email,
      role: formData.role,
      password: formData.password,
      uId: formData.uid,
    });

    if (res.error) {
      toast.error(res.error.data.message, { id: 'createUser' });
      return;
    }

    toast.success('User Created', { id: 'createUser' });
    setModal(false);

    setFormData({
      username: '',
      email: '',
      role: '',
      password: '',
      uid: '',
    });
  };

  return (
    <div className='flex h-full items-center justify-center'>
      <button
        onClick={() => setModal(true)}
        className='rounded-md bg-violet-700 p-3 text-xl text-zinc-300'
      >
        + Create Student / Teacher
      </button>

      {modal && (
        <div className='absolute top-0 left-0 right-0 bottom-0 z-[100] flex flex-col bg-black/80 p-4'>
          <div className='flex  items-center justify-end'>
            <XMarkIcon
              className='h-7 w-7 cursor-pointer text-white'
              onClick={() => setModal(false)}
            />
          </div>
          <div className='flex-grow '>
            <form
              onSubmit={handleSubmit}
              className='mx-auto flex h-full w-full max-w-lg flex-col justify-between rounded-md bg-zinc-900 p-8 text-lg text-white'
            >
              <input
                type='string'
                name='username'
                placeholder='Username'
                value={formData.username}
                onChange={handleChange}
                autoFocus
                className='rounded-md border border-violet-700 bg-transparent p-2 placeholder-zinc-500 outline-none '
              />
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Email'
                className='rounded-md border border-violet-700 bg-transparent p-2 placeholder-zinc-500 outline-none '
              />

              <select
                name='role'
                value={formData.role}
                onChange={handleChange}
                className='rounded-md border border-violet-700 bg-transparent p-2 placeholder-zinc-500 outline-none'
              >
                <option value='' className='bg-zinc-900'>
                  Select Role
                </option>
                <option value='student' className='bg-zinc-900'>
                  Student
                </option>
                <option value='teacher' className='bg-zinc-900'>
                  Teacher
                </option>
              </select>

              <input
                type='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                placeholder='Password'
                className='rounded-md border border-violet-700 bg-transparent p-2 placeholder-zinc-500 outline-none  '
              />

              <input
                type='string'
                name='uid'
                value={formData.uid}
                onChange={handleChange}
                placeholder='UID'
                autoFocus
                className='rounded-md border border-violet-700 bg-transparent p-2 placeholder-zinc-500 outline-none'
              />

              <button
                type='submit'
                className='rounded-md bg-violet-700 p-2 text-white disabled:cursor-not-allowed  disabled:text-white/50 '
              >
                Create
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default AdminHome;
