import { useCallback, useState } from 'react';

import { COLOR } from '@utils/color';

const useColor = () => {
  const [color, setColor] = useState(COLOR.Gray);

  const handleColorChange = useCallback((newTheme: COLOR) => setColor(newTheme), []);

  return { color, onColorChange: handleColorChange };
};

export default useColor;
