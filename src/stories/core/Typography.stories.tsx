import Typography from '@components/Typography';

import { COLOR } from '@utils/color';

import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Core/Typography',
  component: Typography,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: {
      type: { name: 'string', required: true },
      control: false,
      description: '컴포넌트',
      table: {
        category: 'required',
        type: { summary: 'React.ReactNode' },
      },
    },
    component: {
      type: { name: 'string', required: false },
      control: 'text',
      description: '[TAG] HTML Tag',
      table: {
        category: 'optional',
        defaultValue: { summary: 'p' },
        type: { summary: 'p | span | small ...' },
      },
    },
    theme: {
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
      description: '[CSS] Typography Variant',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'b24', 'b18', 'b16', 'b14', 'b12', 'c11', 'c8'],
      table: {
        category: 'style',
        defaultValue: { summary: 'h1' },
        type: { summary: 'h1 | h2 | h3 | h4 | h5 | h6 | b24 | b18 | b16 | b14 | b12 | c11 | c8' },
      },
    },
    color: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: '[CSS] Text Color',
      table: {
        category: 'style',
        defaultValue: { summary: '#000000' },
        type: { summary: 'string' },
      },
    },
    fontFamily: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      description: '[CSS] Font Family',
      options: ['sans', 'nanumpenscript'],
      table: {
        category: 'style',
        defaultValue: { summary: 'sans' },
        type: { summary: 'sans | nanumpenscript' },
      },
    },
    fontWeight: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: '[CSS] Font Weight',
      table: {
        category: 'style',
        defaultValue: { summary: '400' },
        type: { summary: 'string' },
      },
    },
    gutterBottom: {
      type: { name: 'string', required: false },
      control: { type: 'number' },
      description: '[CSS] Margin Bottom',
      table: {
        category: 'style',
        defaultValue: { summary: '0' },
        type: { summary: 'number' },
      },
    },
    align: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      description: '[CSS] Text Alignment',
      options: ['left', 'right', 'center', 'justify'],
      table: {
        category: 'style',
        defaultValue: { summary: 'left' },
        type: { summary: 'left | right | center | justify' },
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
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const TypographyH1: Story = {
  args: {
    children: '가나다라마바사',
    variant: 'h1',
    component: 'h1',
    theme: COLOR.Gray,
  },
};

export const TypographyH2: Story = {
  args: {
    children: '가나다라마바사',
    variant: 'h2',
    component: 'h2',
    theme: COLOR.Gray,
  },
};

export const TypographyH3: Story = {
  args: {
    children: '가나다라마바사',
    variant: 'h3',
    component: 'h3',
    theme: COLOR.Gray,
  },
};

export const TypographyH4: Story = {
  args: {
    children: '가나다라마바사',
    variant: 'h4',
    component: 'h4',
    theme: COLOR.Gray,
  },
};

export const TypographyH5: Story = {
  args: {
    children: '가나다라마바사',
    variant: 'h5',
    component: 'h5',
    theme: COLOR.Gray,
  },
};

export const TypographyH6: Story = {
  args: {
    children: '가나다라마바사',
    variant: 'h6',
    component: 'h6',
    theme: COLOR.Gray,
  },
};

export const TypographyB24: Story = {
  args: {
    children: 'ABCDEFGHIJKLMNOP',
    variant: 'b24',
    component: 'p',
    theme: COLOR.Gray,
  },
};

export const TypographyB18: Story = {
  args: {
    children: 'ABCDEFGHIJKLMNOP',
    variant: 'b18',
    component: 'p',
    theme: COLOR.Gray,
  },
};

export const TypographyB16: Story = {
  args: {
    children: 'ABCDEFGHIJKLMNOP',
    variant: 'b16',
    component: 'p',
    theme: COLOR.Gray,
  },
};

export const TypographyB14: Story = {
  args: {
    children: 'ABCDEFGHIJKLMNOP',
    variant: 'b14',
    component: 'p',
    theme: COLOR.Gray,
  },
};

export const TypographyB12: Story = {
  args: {
    children: 'ABCDEFGHIJKLMNOP',
    variant: 'b12',
    component: 'p',
    theme: COLOR.Gray,
  },
};

export const TypographyC11: Story = {
  args: {
    children: '0123456789',
    variant: 'c11',
    component: 'small',
    theme: COLOR.Gray,
  },
};

export const TypographyC8: Story = {
  args: {
    children: '0123456789',
    variant: 'c8',
    component: 'small',
    theme: COLOR.Gray,
  },
};
