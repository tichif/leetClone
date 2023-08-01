import Link from 'next/link';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSetRecoilState } from 'recoil';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { auth } from '@/firebase/firebase';
import Logout from '../Buttons/Logout';
import { authModalState } from '@/atoms/AuthModalAtom';
import { BsList } from 'react-icons/bs';
import Timer from '../Timer';

type Props = {
  problemPage?: boolean;
};

const TopBar = ({ problemPage }: Props) => {
  const [user] = useAuthState(auth);

  const setAuthModalState = useSetRecoilState(authModalState);

  return (
    <>
      <nav className='relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7'>
        <div
          className={`flex w-full items-center justify-between ${
            !problemPage ? 'max-w-[1200px] mx-auto' : ''
          }`}
        >
          <Link href='/' className='h-[22px] flex-1'>
            <Image
              src='/logo-full.png'
              alt='LeetClone'
              width={100}
              height={100}
            />
          </Link>

          {problemPage && (
            <div className='flex items-center gap-4 flex-1 justify-center'>
              <div className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 w-8 h-8 cursor-pointer'>
                <FiChevronLeft />
              </div>
              <Link
                href='/'
                className='flex items-center gap-2 font-medium max-w-[170px] text-dar-gray-8 cursor-pointer'
              >
                <div>
                  <BsList />
                </div>
                <p>Problem List</p>
              </Link>
              <div className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 w-8 h-8 cursor-pointer'>
                <FiChevronRight />
              </div>
            </div>
          )}

          <div className='flex items-center space-x-4 flex-1 justify-end'>
            <div>
              <a
                href='https://www.buymeacoffee.com/burakorkmezz'
                target='_blank'
                rel='noreferrer'
                className='bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2'
              >
                Premium
              </a>
            </div>
            {!user && (
              <Link
                href='/auth'
                onClick={() =>
                  setAuthModalState((prev) => ({
                    ...prev,
                    isOpen: true,
                    type: 'login',
                  }))
                }
              >
                <button className='bg-dark-fill-3 py-1 px-2 cursor-pointer rounded '>
                  Sign In
                </button>
              </Link>
            )}
            {problemPage && <Timer />}
            {user && (
              <>
                <div className='cursor-pointer group relative'>
                  <img
                    src='/avatar.png'
                    alt='User profile img'
                    className='h-8 w-8 rounded-full'
                  />
                  <div
                    className='absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg z-40 group-hover:scale-100 scale-0 
		transition-all duration-300 ease-in-out'
                  >
                    <p className='text-sm'>{user.email}</p>
                  </div>
                </div>
                <Logout />
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopBar;
