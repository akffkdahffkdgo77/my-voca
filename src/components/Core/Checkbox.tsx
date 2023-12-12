import { InputHTMLAttributes, useEffect, useId, useState } from 'react';

import styled from '@emotion/styled';
import { CheckIcon } from '@heroicons/react/24/outline';
import tw, { TwStyle } from 'twin.macro';

import { StyleThemes, getTextColor } from 'utils/theme';

const TwLabel = styled.label(({ theme, twStyle }: { theme: StyleThemes; twStyle?: TwStyle }) => [
    tw`relative flex h-4 w-4 cursor-pointer items-center justify-center rounded border border-gray-900 focus-within:ring-1`,
    theme && getTextColor(theme),
    twStyle && twStyle
]);

type StylesType = {
    theme?: StyleThemes;
    twStyle?: TwStyle;
};

type CheckboxType = InputHTMLAttributes<HTMLInputElement> &
    StylesType & {
        isChecked?: boolean;
        hiddenText?: string;
    };

function Checkbox({ theme = StyleThemes.Gray, twStyle, isChecked, hiddenText, ...props }: CheckboxType) {
    const id = useId();
    const [selected, setSelected] = useState('');

    useEffect(() => {
        if (isChecked) {
            setSelected(id);
        } else if (!isChecked && id) {
            setSelected('');
        }
    }, [isChecked]);

    return (
        <TwLabel htmlFor={id} theme={theme} twStyle={twStyle}>
            <span className="sr-only">{hiddenText}</span>
            <input {...props} id={id} type="checkbox" className="peer sr-only" checked={selected === id} onChange={() => setSelected((prev) => (prev === id ? '' : id))} />
            <CheckIcon className="absolute -left-1 -top-5pxr hidden h-5 w-6 stroke-4 text-inherit peer-checked:block" />
        </TwLabel>
    );
}

export default Checkbox;
