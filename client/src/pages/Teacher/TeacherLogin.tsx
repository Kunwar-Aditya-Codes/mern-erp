import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setToken } from '../../app/slices/authSlice';
import { useTeacherLoginMutation } from '../../app/slices/authApiSlice';

const TeacherLogin = () => {
  interface TeacherLogin {
    tId: string;
    password: string;
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [teacherLogin, setTeacherLogin] = useState<TeacherLogin>({
    tId: '',
    password: '',
  });

  const [teacherLoginMutation, { isLoading }] = useTeacherLoginMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTeacherLogin({ ...teacherLogin, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast.loading('Logging in...', { id: 'login' });

    if (!teacherLogin.tId || !teacherLogin.password) {
      toast.error('Please fill in all fields', {
        id: 'login',
      });
      return;
    }

    const res: any = await teacherLoginMutation({
      tId: teacherLogin.tId,
      tPassword: teacherLogin.password,
    });

    if (res.error) {
      toast.error(res.error.data.message, { id: 'login' });
      return;
    }

    dispatch(setToken(res.data.accessToken));

    toast.success('Login successful', {
      id: 'login',
    });

    navigate('/dashboard/teacher');
  };

  return (
    <div className='flex h-full items-center justify-center p-4 '>
      <div className='h-[50%] w-full max-w-[45rem] rounded-md bg-zinc-900/80 shadow-lg '>
        <form
          onSubmit={handleSubmit}
          className='flex h-full w-full flex-col justify-between p-8 text-lg text-white'
        >
          <input
            type='tId'
            name='tId'
            onChange={handleChange}
            value={teacherLogin.tId}
            placeholder='Teacher Id'
            autoFocus
            className='rounded-md border border-violet-700 bg-transparent p-2 placeholder-zinc-500 outline-none '
          />
          <input
            type='password'
            name='password'
            onChange={handleChange}
            value={teacherLogin.password}
            placeholder='Password'
            className='rounded-md border border-violet-700 bg-transparent p-2 placeholder-zinc-500 outline-none '
          />
          <button
            disabled={
              teacherLogin.tId === '' ||
              teacherLogin.password === '' ||
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
export default TeacherLogin;
