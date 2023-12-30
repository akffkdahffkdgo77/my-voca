import { useCallback, useState } from 'react';

import { StyleThemes } from 'utils/theme';

const useTheme = () => {
    const [theme, setTheme] = useState(StyleThemes.Gray);

    const handleClick = useCallback((newTheme: StyleThemes) => setTheme(newTheme), []);

    return { theme, handleClick };
};

export default useTheme;
