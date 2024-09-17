import { useContext } from 'react';

import { ToastContext } from './ToastProvider';

const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('Toast should be used within `ToastContext`');
  }

  return context;
};

export default useToast;
