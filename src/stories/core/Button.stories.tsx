import Button from '@components/Button';

import { COLOR } from '@utils/color';

import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Core/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    text: {
      type: { name: 'string', required: true },
      control: false,
      description: '컴포넌트',
      table: {
        category: 'required',
        type: { summary: 'React.ReactNode' },
      },
    },
    color: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      description: '[CSS] 색상',
      options: Object.values(COLOR),
      table: {
        category: 'style',
        defaultValue: { summary: COLOR.Gray },
        type: { summary: 'rust | buttered-rum | christi | blue-chill | blue-gem | jazzberry-jam | gray' },
      },
    },
    variant: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      description: '[CSS] 버튼 스타일',
      options: ['icon', 'outlined', 'contained', 'text'],
      table: {
        category: 'style',
        defaultValue: { summary: 'outlined' },
        type: { summary: 'icon | outlined | contained | text' },
      },
    },
    shape: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      description: '[CSS] 버튼 모양',
      options: ['circle', 'rounded', 'square'],
      table: {
        category: 'style',
        defaultValue: { summary: 'rounded' },
        type: { summary: 'circle | rounded | square' },
      },
    },
    size: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      description: '[CSS] 버튼 크기',
      options: ['small', 'medium', 'large', 'extraLarge'],
      table: {
        category: 'style',
        defaultValue: { summary: 'large' },
        type: { summary: 'small | medium | large | extraLarge' },
      },
    },

    twStyle: {
      type: { name: 'string', required: false },
      control: false,
      description: '[CSS] Custom Style',
      table: {
        category: 'style',
        defaultValue: { summary: 'undefined' },
        type: { summary: 'TwStyle' },
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const SizeSmall: Story = {
  args: {
    text: '등록',
    size: 'small',
    variant: 'outlined',
    shape: 'rounded',
    color: COLOR.Gray,
  },
};

export const SizeMedium: Story = {
  args: {
    text: '등록',
    size: 'medium',
    variant: 'outlined',
    shape: 'rounded',
    color: COLOR.Gray,
  },
};

export const SizeLarge: Story = {
  args: {
    text: '등록',
    size: 'large',
    variant: 'outlined',
    shape: 'rounded',
    color: COLOR.Gray,
  },
};

export const SizeExtraLarge: Story = {
  args: {
    text: '등록',
    size: 'extraLarge',
    variant: 'outlined',
    shape: 'rounded',
    color: COLOR.Gray,
  },
};

export const VariantOutlined: Story = {
  args: {
    text: '등록',
    size: 'medium',
    variant: 'outlined',
    shape: 'rounded',
    color: COLOR.Gray,
  },
};

export const VariantContained: Story = {
  args: {
    text: '등록',
    size: 'medium',
    variant: 'contained',
    shape: 'rounded',
    color: COLOR.Gray,
  },
};

export const VariantText: Story = {
  args: {
    text: '등록',
    size: 'medium',
    variant: 'text',
    shape: 'rounded',
    color: COLOR.Gray,
  },
};

export const ShapeRounded: Story = {
  args: {
    text: '등록',
    size: 'medium',
    variant: 'outlined',
    shape: 'rounded',
    color: COLOR.Gray,
  },
};

export const ShapeSquare: Story = {
  args: {
    text: '등록',
    size: 'medium',
    variant: 'outlined',
    shape: 'square',
    color: COLOR.Gray,
  },
};
