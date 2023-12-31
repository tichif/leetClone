import { useRecoilValue } from 'recoil';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Navbar from '@/components/Navbar';
import AuthModal from '@/components/Modals/AuthModal';
import { authModalState } from '@/atoms/AuthModalAtom';
import { auth } from '@/firebase/firebase';

const AuthPage = () => {
  const authModal = useRecoilValue(authModalState);
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    if (user) {
      router.push('/');
    } else if (!loading && !user) {
      setPageLoading(false);
    }
  }, [user, router, loading]);

  if (pageLoading) {
    return null;
  }

  return (
    <div className='bg-gradient-to-b from-gray-600 to-black h-screen relative'>
      <div className='max-w-7xl mx-auto'>
        <Navbar />
        <div className='flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none'>
          <Image
            src='/logo-full.png'
            alt='LeetClone'
            width={700}
            height={700}
          />
        </div>
        {authModal.isOpen && <AuthModal />}
      </div>
    </div>
  );
};

export default AuthPage;
