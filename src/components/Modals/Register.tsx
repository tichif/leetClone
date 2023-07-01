import { useSetRecoilState } from 'recoil';

import { authModalState } from '@/atoms/AuthModalAtom';

type Props = {};

const Register = (props: Props) => {
  const setAuthModalSate = useSetRecoilState(authModalState);

  function handleClick() {
    setAuthModalSate((prev) => ({ ...prev, type: 'login' }));
  }
  return (
    <form className='space-y-6 px-6 pb-6'>
      <h3 className='text-xl font-medium text-white'>Register to LeeClone</h3>
      <div>
        <label
          htmlFor='email'
          className='text-sm font-medium block mb-2 text-gray-300'
        >
          Your email
        </label>
        <input
          type='email'
          name='email'
          id='email'
          className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus-border-blue block w-full p-2.5 bg-gray-600 border-gray-600 placeholder-gray-400 text-white'
          placeholder='test@test.com'
        />
      </div>
      <div>
        <label
          htmlFor='name'
          className='text-sm font-medium block mb-2 text-gray-300'
        >
          Your name
        </label>
        <input
          type='text'
          name='name'
          id='name'
          className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus-border-blue block w-full p-2.5 bg-gray-600 border-gray-600 placeholder-gray-400 text-white'
          placeholder='John Doe'
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
        Register
      </button>
      <div className='text-sm font-medium text-gray-500'>
        Already Registered?{' '}
        <a
          href='#'
          className='text-blue-700 hover:underline'
          onClick={handleClick}
        >
          Sign In
        </a>
      </div>
    </form>
  );
};

export default Register;
