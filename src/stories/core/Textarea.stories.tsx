import { Textarea } from 'components';

import type { Meta, StoryObj } from '@storybook/react';

const SAMPLE_TEXT =
    '설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력설명 입력';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Core/Textarea',
    component: Textarea,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered'
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        defaultValue: {
            type: { name: 'string', required: false },
            control: { type: 'text' },
            description: 'Input Label Text',
            table: {
                category: 'optional',
                defaultValue: { summary: SAMPLE_TEXT },
                type: { summary: 'string' }
            }
        },
        labelText: {
            type: { name: 'string', required: false },
            control: { type: 'text' },
            description: 'Input Label Text',
            table: {
                category: 'optional',
                defaultValue: { summary: '' },
                type: { summary: 'string' }
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
        width: {
            type: { name: 'string', required: false },
            control: { type: 'number' },
            description: '[CSS] Width',
            table: {
                category: 'style',
                defaultValue: { summary: 300 },
                type: { summary: 'number' }
            }
        },
        height: {
            type: { name: 'string', required: false },
            control: { type: 'number' },
            description: '[CSS] Height',
            table: {
                category: 'style',
                defaultValue: { summary: 300 },
                type: { summary: 'number' }
            }
        },
        isAutoHeight: {
            type: { name: 'boolean', required: false },
            control: { type: 'boolean' },
            description: '자동 높이 조절',
            table: {
                category: 'optional',
                defaultValue: { summary: false },
                type: { summary: 'true | false' }
            }
        },
        backgroundColor: {
            type: { name: 'string', required: false },
            control: { type: 'text' },
            description: '[CSS] Background Color',
            table: {
                category: 'style',
                defaultValue: { summary: '#ffffff' },
                type: { summary: 'string' }
            }
        },
        color: {
            type: { name: 'string', required: false },
            control: { type: 'text' },
            description: '[CSS] Text Color',
            table: {
                category: 'style',
                defaultValue: { summary: '#000000' },
                type: { summary: 'string' }
            }
        },
        fontSize: {
            type: { name: 'string', required: false },
            control: { type: 'text' },
            description: '[CSS] Font Size',
            table: {
                category: 'style',
                defaultValue: { summary: '16px' },
                type: { summary: 'string' }
            }
        },
        fontWeight: {
            type: { name: 'string', required: false },
            control: { type: 'text' },
            description: '[CSS] Font Weight',
            table: {
                category: 'style',
                defaultValue: { summary: '400' },
                type: { summary: 'string' }
            }
        },
        lineHeight: {
            type: { name: 'string', required: false },
            control: { type: 'text' },
            description: '[CSS] Line Height',
            table: {
                category: 'style',
                defaultValue: { summary: '20px' },
                type: { summary: 'string' }
            }
        },
        letterSpacing: {
            type: { name: 'string', required: false },
            control: { type: 'text' },
            description: '[CSS] Letter Spacing',
            table: {
                category: 'style',
                defaultValue: { summary: '0px' },
                type: { summary: 'string' }
            }
        },
        containerStyle: {
            type: { name: 'string', required: false },
            control: false,
            description: '[CSS] Custom Container Style',
            table: {
                category: 'style',
                defaultValue: { summary: 'undefined' },
                type: { summary: 'TwStyle' }
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
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const TextareaScrollable: Story = {
    args: {
        labelText: '설명',
        hiddenText: '',
        width: 300,
        height: 100,
        isAutoHeight: false,
        backgroundColor: '#ffffff',
        color: '#000000',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '20px',
        letterSpacing: '0px',
        defaultValue: SAMPLE_TEXT
    }
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const TextareaAutoHeight: Story = {
    args: {
        labelText: '설명',
        hiddenText: '',
        width: 300,
        isAutoHeight: true,
        backgroundColor: '#ffffff',
        color: '#000000',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '20px',
        letterSpacing: '0px',
        defaultValue: SAMPLE_TEXT
    }
};
