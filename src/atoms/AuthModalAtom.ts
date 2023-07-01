import { atom } from 'recoil';

type AuthModalState = {
  isOpen: boolean;
  type: 'login' | 'register' | 'forgotPassword';
};

const initionAuthModal: AuthModalState = {
  isOpen: false,
  type: 'login',
};

export const authModalState = atom<AuthModalState>({
  key: 'authModalState',
  default: initionAuthModal,
});
