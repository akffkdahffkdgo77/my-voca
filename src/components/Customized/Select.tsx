import { MouseEvent, useCallback, useEffect, useId, useRef, useState } from 'react';

import styled from '@emotion/styled';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { Typography } from 'components/Core';
import tw, { theme as twinTheme } from 'twin.macro';

import { useClickAway } from 'hooks';
import { OptionalThemeType, StyleThemes, ThemeType, getBackgroundColor, getBorderColor } from 'utils/theme';

type CustomizedSelectType = OptionalThemeType & {
    caption: string;
    options?: { label: string; value: string | number }[];
    value?: string;
    onChange?: (newValue: string | number) => void;
};

const customStyle = {
    caption: tw`uppercase pl-1`,
    buttonText: tw`h-auto uppercase`
};

const TwButton = styled.button(({ theme }: ThemeType) => [
    tw`flex text-gray-900 h-10 w-auto items-center justify-between gap-x-1 min-w-120pxr rounded-2xl border border-gray-200 text-left px-2 py-1`,
    theme && getBorderColor(theme),
    theme && getBackgroundColor(theme)
]);

const TwList = styled.ul(({ theme }: ThemeType) => [tw`z-1 absolute top-14 w-full divide-y bg-white overflow-hidden rounded border border-gray-200 py-0.5`, theme && getBorderColor(theme)]);

export default function CustomizedSelect({ theme = StyleThemes.Gray, options = [], caption, value, onChange }: CustomizedSelectType) {
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

    const handleClickOutside = useCallback(() => {
        setIsOpen(false);
    }, []);

    useClickAway<HTMLButtonElement>({ ref, onClickOutside: handleClickOutside });

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
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

    return (
        <div className="relative flex flex-col">
            <Typography id={id} variant="c11" component="small" color={twinTheme`colors.gray.900`} twStyle={customStyle.caption}>
                {caption}
            </Typography>
            <TwButton type="button" aria-controls={listId} aria-expanded={!!isOpen} aria-haspopup="listbox" aria-labelledby={id} role="combobox" ref={ref} theme={theme} onClick={handleClick}>
                <Typography variant="b16" fontWeight="500" color="inherit" twStyle={customStyle.buttonText}>
                    {selected}
                </Typography>
                <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 p-1">
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
                            <Typography variant="b16" color="inherit" align="center" lineHeight="32px">
                                {label}
                            </Typography>
                        </li>
                    ))}
                </TwList>
            )}
        </div>
    );
}
