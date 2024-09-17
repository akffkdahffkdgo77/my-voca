import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const useMode = (): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    if (isLightMode) {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
    } else {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
    }
  }, [isLightMode]);

  return [isLightMode, setIsLightMode];
};

export default useMode;
