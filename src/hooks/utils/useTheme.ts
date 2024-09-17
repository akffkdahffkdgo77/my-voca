import { useCallback, useState } from 'react';

import { StyleThemes } from '@utils/theme';

const useTheme = () => {
  const [theme, setTheme] = useState(StyleThemes.Gray);

  const handleThemeChange = useCallback((newTheme: StyleThemes) => setTheme(newTheme), []);

  return { theme, onThemeChange: handleThemeChange };
};

export default useTheme;
