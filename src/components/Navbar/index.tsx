import { useSetRecoilState } from 'recoil';
import Image from 'next/image';

import Link from 'next/link';
import React from 'react';
import { authModalState } from '@/atoms/AuthModalAtom';

type Props = {};

const Navbar = (props: Props) => {
  const setAuthModalSate = useSetRecoilState(authModalState);
  function handleClick() {
    setAuthModalSate((prev) => ({ ...prev, isOpen: true }));
  }

  return (
    <div className='flex items-center justify-between sm:px-12 px-2 md:px-24'>
      <Link href='/' className='flex items-center justify-center h-20'>
        <Image src='/logo.png' alt='LeetClone' width={200} height={200} />
      </Link>
      <div className='flex items-center'>
        <button
          className='bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange border-2 border-transparent transition duration-300 ease-in-out'
          onClick={handleClick}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
