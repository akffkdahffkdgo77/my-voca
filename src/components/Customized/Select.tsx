import { useEffect, useId, useRef, useState } from 'react';

import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

import styled from '@emotion/styled';
import tw, { theme as twinTheme } from 'twin.macro';

import CustomizedTypography from '../Core/Typography';

import { useClickAway } from 'hooks';
import { StyleThemes, getBackgroundColor, getBorderColor } from 'utils/theme';

type SelectType = {
    theme?: StyleThemes;
    options?: { label: string; value: string | number }[];
    caption: string;
    value?: string;
    onChange?: (newValue: string | number) => void;
};

const TwButton = styled.button(({ theme }: Pick<SelectType, 'theme'>) => [
    tw`flex text-gray-900 h-10 w-auto items-center justify-between gap-x-1 min-w-120pxr rounded-2xl border border-gray-200 text-left px-2 py-1`,
    theme && getBorderColor(theme),
    theme && getBackgroundColor(theme)
]);

const TwList = styled.ul(({ theme }: Pick<SelectType, 'theme'>) => [
    tw`z-1 absolute top-14 w-full divide-y bg-white overflow-hidden rounded border border-gray-200 py-0.5`,
    theme && getBorderColor(theme)
]);

function Select({ theme, options = [], caption, value, onChange }: SelectType) {
    const id = useId();
    const listId = useId();
    const ref = useRef<HTMLButtonElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<string | number>('');

    useEffect(() => {
        if (value) {
            setSelected(value);
        }
    }, [value]);

    const handleClickOutside = () => {
        setIsOpen(false);
    };

    const handleClick = () => {
        setIsOpen((prev) => !prev);
    };

    const handleChange = (newValue: string | number) => {
        setSelected(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isOpen]);

    useClickAway<HTMLButtonElement>({ ref, onClickOutside: handleClickOutside });

    return (
        <div className="relative flex flex-col">
            <CustomizedTypography id={id} variant="c11" color={twinTheme`colors.gray.900`} twStyle={tw`uppercase pl-1`}>
                {caption}
            </CustomizedTypography>
            <TwButton type="button" aria-controls={listId} aria-expanded={!!isOpen} aria-haspopup="listbox" aria-labelledby={id} role="combobox" ref={ref} theme={theme} onClick={handleClick}>
                <CustomizedTypography variant="b16" fontWeight="500" color="inherit" twStyle={tw`h-auto uppercase`}>
                    {selected}
                </CustomizedTypography>
                <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full border border-gray-900 bg-gray-900 p-1">
                    {isOpen ? (
                        <ChevronUpIcon aria-hidden="true" className="h-3 w-3 flex-none stroke-3 text-white" />
                    ) : (
                        <ChevronDownIcon aria-hidden="true" className="h-3 w-3 flex-none stroke-3 text-white" />
                    )}
                </div>
            </TwButton>
            {isOpen && (
                <TwList id={listId} role="listbox" aria-labelledby={id} tabIndex={0} theme={theme}>
                    {options.map(({ label, value }) => (
                        <li
                            key={label}
                            role="option"
                            aria-selected={selected === value}
                            onClick={() => handleChange(value)}
                            onKeyDown={() => handleChange(value)}
                            className="h-10 cursor-pointer border-inherit py-1 hover:opacity-50"
                        >
                            <CustomizedTypography variant="b16" align="center" twStyle={tw`leading-8`}>
                                {label}
                            </CustomizedTypography>
                        </li>
                    ))}
                </TwList>
            )}
        </div>
    );
}

export default Select;
