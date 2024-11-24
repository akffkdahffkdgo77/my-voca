import { MouseEvent, useCallback, useEffect, useId, useRef, useState } from 'react';

import styled from '@emotion/styled';
import tw from 'twin.macro';

import { ChevronDownFilled, ChevronUpFilled } from '@fluentui/react-icons';

import Typography from '@components/Typography';

import { useClickAway } from '@hooks/utils';
import { COLOR, ColorType, getBackgroundColor, getBorderColor, OptionalColorType } from '@utils/color';

interface Props extends OptionalColorType {
  caption: string;
  options?: { label: string; value: number | string }[];
  value?: string;
  onChange?: (newValue: number | string) => void;
}

const Select = ({ color = COLOR.Gray, options = [], caption, value, onChange }: Props) => {
  const id = useId();
  const listId = useId();
  const ref = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<number | string>('');

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

  const handleChange = (newValue: number | string) => {
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
      <Typography color={COLOR.Gray} component="small" id={id} twStyle={customStyle.caption} variant="c11">
        {caption}
      </Typography>
      <TWButton
        ref={ref}
        aria-controls={listId}
        aria-expanded={!!isOpen}
        aria-haspopup="listbox"
        aria-labelledby={id}
        color={color}
        role="combobox"
        type="button"
        onClick={handleClick}
      >
        <Typography color="inherit" fontWeight="500" twStyle={customStyle.buttonText} variant="b16">
          {selected}
        </Typography>
        <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-900 p-1">
          {isOpen ? (
            <ChevronUpFilled className="h-3 w-3 flex-none stroke-3 text-white" />
          ) : (
            <ChevronDownFilled className="h-3 w-3 flex-none stroke-3 text-white" />
          )}
        </div>
      </TWButton>
      {isOpen && (
        <TWList aria-labelledby={id} color={color} id={listId} role="listbox" tabIndex={0}>
          {options.map(({ label, value }) => (
            <li
              key={label}
              aria-selected={selected === value}
              className="h-10 cursor-pointer border-inherit py-2 hover:opacity-80"
              role="option"
              onClick={() => handleChange(value)}
              onKeyDown={() => handleChange(value)}
            >
              <Typography align="center" color="inherit" variant="b16">
                {label}
              </Typography>
            </li>
          ))}
        </TWList>
      )}
    </div>
  );
};

export default Select;

const customStyle = {
  caption: tw`pl-1 uppercase`,
  buttonText: tw`h-auto uppercase`,
};

const TWButton = styled.button(({ color }: ColorType) => [
  tw`flex h-10 w-auto min-w-30 items-center justify-between gap-x-1 rounded-2xl border border-gray-200 px-2 py-1 text-left text-gray-900`,
  color && getBorderColor(color),
  color && getBackgroundColor(color),
]);

const TWList = styled.ul(({ color }: ColorType) => [
  tw`absolute top-14 z-1 w-full divide-y overflow-hidden rounded border border-gray-200 bg-white py-0.5`,
  color && getBorderColor(color),
]);
