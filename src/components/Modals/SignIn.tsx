import { useSetRecoilState } from 'recoil';
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

import { authModalState } from '@/atoms/AuthModalAtom';
import { auth } from '@/firebase/firebase';

type Props = {};

const SignIn = (props: Props) => {
  const setAuthModalSate = useSetRecoilState(authModalState);
  const router = useRouter();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  function handleClick(type: 'login' | 'register' | 'forgotPassword') {
    setAuthModalSate((prev) => ({ ...prev, type }));
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!inputs.email || !inputs.password) {
      toast.error('All fields are required');
      return;
    }

    try {
      const user = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );

      if (!user) {
        return;
      }

      setInputs({
        email: '',
        password: '',
      });
      router.push('/');
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);

  return (
    <form className='space-y-6 px-6 pb-6' onSubmit={submitHandler}>
      <h3 className='text-xl font-medium text-white'>Sign in to LeeClone</h3>
      <div>
        <label
          htmlFor='email'
          className='text-sm font-medium block mb-2 text-gray-300'
        >
          Your email
        </label>
        <input
          onChange={handleInputChange}
          type='email'
          name='email'
          id='email'
          className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus-border-blue block w-full p-2.5 bg-gray-600 border-gray-600 placeholder-gray-400 text-white'
          placeholder='test@test.com'
        />
      </div>
      <div>
        <label
          htmlFor='password'
          className='text-sm font-medium block mb-2 text-gray-300'
        >
          Your password
        </label>
        <input
          onChange={handleInputChange}
          type='password'
          name='password'
          id='password'
          className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus-border-blue block w-full p-2.5 bg-gray-600 border-gray-600 placeholder-gray-400 text-white'
          placeholder='******'
        />
      </div>
      <button
        type='submit'
        className='w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-brand-orange-s'
      >
        {loading ? 'Loading...' : ' Sign In '}
      </button>
      <button className='flex w-full justify-end'>
        <a
          href='#'
          className='text-sm block text-brand-orange hover:underline w-full text-right'
          onClick={() => handleClick('forgotPassword')}
        >
          Forgot password
        </a>
      </button>
      <div className='text-sm font-medium text-gray-500'>
        Not Registered?{' '}
        <a
          href='#'
          className='text-blue-700 hover:underline'
          onClick={() => handleClick('register')}
        >
          Create account
        </a>
      </div>
    </form>
  );
};

export default SignIn;
