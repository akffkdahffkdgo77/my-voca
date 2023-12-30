import { Checkbox } from 'components';

import { StyleThemes } from 'utils/theme';

import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Core/Checkbox',
    component: Checkbox,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered'
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        theme: {
            type: { name: 'string', required: false },
            control: { type: 'select' },
            description: '[CSS] 색상',
            options: Object.values(StyleThemes),
            table: {
                category: 'style',
                defaultValue: { summary: StyleThemes.Gray },
                type: { summary: 'rust | buttered-rum | christi | blue-chill | blue-gem | jazzberry-jam | gray' }
            }
        },
        isChecked: {
            type: { name: 'boolean', required: false },
            control: { type: 'boolean' },
            description: '체크여부',
            table: {
                category: 'optional',
                defaultValue: { summary: false },
                type: { summary: 'true | false' }
            }
        },
        hiddenText: {
            type: { name: 'string', required: false },
            control: { type: 'text' },
            description: '[Accessibility] Hidden Label Text',
            table: {
                category: 'optional',
                defaultValue: { summary: '' },
                type: { summary: 'string' }
            }
        },
        twStyle: {
            type: { name: 'string', required: false },
            control: false,
            description: '[CSS] Custom Style',
            table: {
                category: 'style',
                defaultValue: { summary: 'undefined' },
                type: { summary: 'TwStyle' }
            }
        }
    }
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        isChecked: false,
        hiddenText: 'test',
        theme: StyleThemes.Gray
    }
};
