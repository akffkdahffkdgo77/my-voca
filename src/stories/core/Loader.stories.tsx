import Loader from '@components/Loader';

import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Core/Loader',
  component: Loader,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    width: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: '[CSS] Width',
      table: {
        category: 'style',
        defaultValue: { summary: '100' },
        type: { summary: 'number | string' },
      },
    },
    height: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: '[CSS] Height',
      table: {
        category: 'style',
        defaultValue: { summary: '100' },
        type: { summary: 'number | string' },
      },
    },
    borderWidth: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: '[CSS] Border Width',
      table: {
        category: 'style',
        defaultValue: { summary: '100' },
        type: { summary: 'string' },
      },
    },
    borderColor: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: '[CSS] Border Color',
      table: {
        category: 'style',
        defaultValue: { summary: '#000000' },
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    width: '100px',
    height: '100px',
    borderColor: '#eeeeee',
    borderWidth: '12px',
  },
};
