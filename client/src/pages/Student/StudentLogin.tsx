import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setToken } from '../../app/slices/authSlice';
import { useStudentLoginMutation } from '../../app/slices/authApiSlice';

const StudentLogin = () => {
  interface StudentLogin {
    sId: string;
    password: string;
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [studentLoginData, setStudentLoginData] = useState<StudentLogin>({
    sId: '',
    password: '',
  });

  const [studentLoginMutation, { isLoading }] = useStudentLoginMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStudentLoginData({ ...studentLoginData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast.loading('Logging in...', { id: 'login' });

    if (!studentLoginData.sId || !studentLoginData.password) {
      toast.error('Please fill in all fields', {
        id: 'login',
      });
      return;
    }

    const res: any = await studentLoginMutation({
      sId: studentLoginData.sId,
      sPassword: studentLoginData.password,
    });

    if (res.error) {
      toast.error(res.error.data.message, { id: 'login' });
      return;
    }

    dispatch(setToken(res.data.accessToken));

    toast.success('Login successful', {
      id: 'login',
    });

    navigate('/dashboard/student');
  };

  return (
    <div className='flex h-full items-center justify-center p-4 '>
      <div className='h-[50%] w-full max-w-[45rem] rounded-md bg-zinc-900/80 shadow-lg '>
        <form
          onSubmit={handleSubmit}
          className='flex h-full w-full flex-col justify-between p-8 text-lg text-white'
        >
          <input
            type='sId'
            name='sId'
            onChange={handleChange}
            value={studentLoginData.sId}
            placeholder='Student Id'
            autoFocus
            className='rounded-md border border-violet-700 bg-transparent p-2 placeholder-zinc-500 outline-none '
          />
          <input
            type='password'
            name='password'
            onChange={handleChange}
            value={studentLoginData.password}
            placeholder='Password'
            className='rounded-md border border-violet-700 bg-transparent p-2 placeholder-zinc-500 outline-none '
          />
          <button
            disabled={
              studentLoginData.sId === '' ||
              studentLoginData.password === '' ||
              isLoading
            }
            type='submit'
            className='rounded-md bg-violet-700 p-2 text-white disabled:cursor-not-allowed  disabled:text-white/50 '
          >
            Login
          </button>

          <Link
            to='/'
            className='w-fit self-center text-center text-base text-zinc-500 underline underline-offset-4 hover:text-zinc-300'
          >
            Go Back
          </Link>
        </form>
      </div>
    </div>
  );
};
export default StudentLogin;
