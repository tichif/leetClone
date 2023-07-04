import { useSetRecoilState } from 'recoil';

import { authModalState } from '@/atoms/AuthModalAtom';

type Props = {};

const ResetPassword = (props: Props) => {
  const setAuthModalSate = useSetRecoilState(authModalState);

  function handleClick() {
    setAuthModalSate((prev) => ({ ...prev, type: 'login' }));
  }

  return (
    <form className='space-y-6 px-6 pb-6'>
      <h3 className='text-xl font-medium text-white'>Reset Password</h3>
      <p className='text-white text-sm'>
        Forgotten password ? Enter your email below, and we&apos;ll send you an
        e-mail allowing you to reset it.{' '}
      </p>
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

      <button
        type='submit'
        className='w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-brand-orange-s'
      >
        Reset Password
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

export default ResetPassword;
