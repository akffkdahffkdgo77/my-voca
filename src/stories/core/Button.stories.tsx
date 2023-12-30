import { HeartIcon } from '@heroicons/react/24/outline';
import { Button } from 'components';

import { StyleThemes } from 'utils/theme';

import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Core/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered'
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
                type: { summary: 'React.ReactNode' }
            }
        },
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
        variant: {
            type: { name: 'string', required: false },
            control: { type: 'select' },
            description: '[CSS] 버튼 스타일',
            options: ['icon', 'outlined', 'contained', 'text'],
            table: {
                category: 'style',
                defaultValue: { summary: 'outlined' },
                type: { summary: 'icon | outlined | contained | text' }
            }
        },
        shape: {
            type: { name: 'string', required: false },
            control: { type: 'select' },
            description: '[CSS] 버튼 모양',
            options: ['circle', 'rounded', 'square'],
            table: {
                category: 'style',
                defaultValue: { summary: 'rounded' },
                type: { summary: 'circle | rounded | square' }
            }
        },
        size: {
            type: { name: 'string', required: false },
            control: { type: 'select' },
            description: '[CSS] 버튼 크기',
            options: ['small', 'medium', 'large', 'extraLarge'],
            table: {
                category: 'style',
                defaultValue: { summary: 'large' },
                type: { summary: 'small | medium | large | extraLarge' }
            }
        },
        circleSize: {
            type: { name: 'string', required: false },
            control: { type: 'number' },
            description: '버튼 모양이 circle일 경우, width와 height',
            table: {
                category: 'style',
                defaultValue: { summary: '' },
                type: { summary: 'number' }
            }
        },
        width: {
            type: { name: 'string', required: false },
            control: { type: 'number' },
            description: '[CSS] 버튼 사이즈',
            table: {
                category: 'style',
                defaultValue: { summary: '' },
                type: { summary: 'string | number' }
            }
        },
        height: {
            type: { name: 'string', required: false },
            control: { type: 'number' },
            description: '[CSS] 버튼 사이즈',
            table: {
                category: 'style',
                defaultValue: { summary: '' },
                type: { summary: 'string | number' }
            }
        },
        borderRadius: {
            type: { name: 'string', required: false },
            control: { type: 'text' },
            description: '[CSS] 버튼 border-radius',
            table: {
                category: 'style',
                defaultValue: { summary: '' },
                type: { summary: 'string | number' }
            }
        },
        backgroundColor: {
            type: { name: 'string', required: false },
            control: { type: 'text' },
            description: '[CSS] 버튼 배경색',
            table: {
                category: 'style',
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const SizeSmall: Story = {
    args: {
        children: '등록',
        size: 'small',
        variant: 'outlined',
        shape: 'rounded',
        theme: StyleThemes.Gray
    }
};

export const SizeMedium: Story = {
    args: {
        children: '등록',
        size: 'medium',
        variant: 'outlined',
        shape: 'rounded',
        theme: StyleThemes.Gray
    }
};

export const SizeLarge: Story = {
    args: {
        children: '등록',
        size: 'large',
        variant: 'outlined',
        shape: 'rounded',
        theme: StyleThemes.Gray
    }
};

export const SizeExtraLarge: Story = {
    args: {
        children: '등록',
        size: 'extraLarge',
        variant: 'outlined',
        shape: 'rounded',
        theme: StyleThemes.Gray
    }
};

export const VariantIcon: Story = {
    args: {
        children: <HeartIcon className="m-auto h-3 w-3 text-inherit" />,
        size: 'medium',
        variant: 'icon',
        shape: 'circle',
        theme: StyleThemes.Gray
    }
};

export const VariantOutlined: Story = {
    args: {
        children: '등록',
        size: 'medium',
        variant: 'outlined',
        shape: 'rounded',
        theme: StyleThemes.Gray
    }
};

export const VariantContained: Story = {
    args: {
        children: '등록',
        size: 'medium',
        variant: 'contained',
        shape: 'rounded',
        theme: StyleThemes.Gray
    }
};

export const VariantText: Story = {
    args: {
        children: '등록',
        size: 'medium',
        variant: 'text',
        shape: 'rounded',
        theme: StyleThemes.Gray
    }
};

export const ShapeCircle: Story = {
    args: {
        children: '등록',
        size: 'medium',
        variant: 'outlined',
        shape: 'circle',
        theme: StyleThemes.Gray,
        circleSize: 56
    }
};

export const ShapeRounded: Story = {
    args: {
        children: '등록',
        size: 'medium',
        variant: 'outlined',
        shape: 'rounded',
        theme: StyleThemes.Gray
    }
};

export const ShapeSquare: Story = {
    args: {
        children: '등록',
        size: 'medium',
        variant: 'outlined',
        shape: 'square',
        theme: StyleThemes.Gray
    }
};
