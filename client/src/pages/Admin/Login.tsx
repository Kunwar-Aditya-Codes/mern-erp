import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, Link } from 'react-router-dom';
import { useLoginMutation } from '../../app/slices/authApiSlice';
import { useDispatch } from 'react-redux';
import { setToken } from '../../app/slices/authSlice';

const Login = () => {
  interface Login {
    email: string;
    password: string;
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, setLogin] = useState<Login>({
    email: '',
    password: '',
  });

  const [loginMutation, { isLoading }] = useLoginMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast.loading('Logging in...', { id: 'login' });

    if (login.email === '' || login.password === '') {
      toast.error('Please fill all the fields', { id: 'login' });
      return;
    }

    const res: any = await loginMutation({
      email: login.email,
      password: login.password,
    });

    if (res.error) {
      toast.error(res.error.data.message, { id: 'login' });
      return;
    }

    dispatch(setToken(res.data.accessToken));

    toast.success('Login Successful', { id: 'login' });

    navigate('/dashboard/admin');
  };

  return (
    <div className='flex h-full items-center justify-center p-4 '>
      <div className='h-[50%] w-full max-w-[45rem] rounded-md bg-zinc-900/80 shadow-lg '>
        <form
          onSubmit={handleSubmit}
          className='flex h-full w-full flex-col justify-between p-8 text-lg text-white'
        >
          <input
            type='email'
            name='email'
            onChange={handleChange}
            value={login.email}
            placeholder='Admin Email'
            autoFocus
            className='rounded-md border border-violet-700 bg-transparent p-2 placeholder-zinc-500 outline-none '
          />
          <input
            type='password'
            name='password'
            onChange={handleChange}
            value={login.password}
            placeholder='Admin Password'
            className='rounded-md border border-violet-700 bg-transparent p-2 placeholder-zinc-500 outline-none  '
          />
          <button
            disabled={login.email === '' || login.password === '' || isLoading}
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
export default Login;
