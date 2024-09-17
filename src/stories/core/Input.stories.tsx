import Input from '@components/Input';

import { StyleThemes } from '@utils/theme';

import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Core/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    isDisabled: {
      type: { name: 'boolean', required: false },
      control: { type: 'boolean' },
      description: '활성화/비활성화',
      table: {
        category: 'optional',
        defaultValue: { summary: 'false' },
        type: { summary: 'true | false' },
      },
    },
    isError: {
      type: { name: 'boolean', required: false },
      control: { type: 'boolean' },
      description: '에러',
      table: {
        category: 'optional',
        defaultValue: { summary: 'false' },
        type: { summary: 'true | false' },
      },
    },
    labelText: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: 'Input Label Text',
      table: {
        category: 'optional',
        defaultValue: { summary: '' },
        type: { summary: 'string' },
      },
    },
    helperText: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: 'Input Helper Text',
      table: {
        category: 'optional',
        defaultValue: { summary: '' },
        type: { summary: 'string' },
      },
    },
    hiddenText: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: '[Accessibility] Hidden Label Text',
      table: {
        category: 'optional',
        defaultValue: { summary: '' },
        type: { summary: 'string' },
      },
    },
    theme: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      description: '[CSS] 색상',
      options: Object.values(StyleThemes),
      table: {
        category: 'style',
        defaultValue: { summary: StyleThemes.Gray },
        type: { summary: 'rust | buttered-rum | christi | blue-chill | blue-gem | jazzberry-jam | gray' },
      },
    },
    variant: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      description: '[CSS] Variant',
      options: Object.values(StyleThemes),
      table: {
        category: 'style',
        defaultValue: { summary: 'outlined' },
        type: { summary: 'contained | outlined | text' },
      },
    },
    containerStyle: {
      type: { name: 'string', required: false },
      control: false,
      description: '[CSS] Custom Container Style',
      table: {
        category: 'style',
        defaultValue: { summary: 'undefined' },
        type: { summary: 'TwStyle' },
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
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    theme: StyleThemes.Gray,
    variant: 'outlined',
    isDisabled: false,
    isError: false,
    labelText: '닉네임',
    helperText: '한글만 입력하세요.',
    hiddenText: '',
  },
};
