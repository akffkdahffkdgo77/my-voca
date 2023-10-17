import { useEffect, useMemo, useState } from 'react';

import { CheckIcon } from '@heroicons/react/24/outline';

import styled from '@emotion/styled';
import tw, { TwStyle } from 'twin.macro';
import { v4 as uuidv4 } from 'uuid';

import { StyleThemes, getTextColor } from 'utils/theme';

const TwLabel = styled.label(({ theme, twStyle }: { theme: StyleThemes; twStyle?: TwStyle }) => [
    tw`relative flex h-3 w-3 cursor-pointer items-center justify-center rounded border border-gray-900`,
    theme && getTextColor(theme),
    twStyle && twStyle
]);

function CustomizedCheckbox({ theme, twStyle, checked }: { theme: StyleThemes; twStyle?: TwStyle; checked?: string }) {
    const id = useMemo(() => `checkbox-${uuidv4()}`, []);
    const [selected, setSelected] = useState('');

    useEffect(() => {
        if (checked) {
            setSelected(id);
        }
    }, [checked]);

    return (
        <TwLabel htmlFor={id} theme={theme} twStyle={twStyle}>
            <input id={id} type="checkbox" hidden className="peer" checked={selected === id} onChange={() => setSelected((prev) => (prev === id ? '' : id))} />
            <CheckIcon className="absolute -left-1 top-[-5px] hidden h-4 w-5 text-inherit [stroke-width:4px] peer-checked:block" />
        </TwLabel>
    );
}

export default CustomizedCheckbox;
