/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

const px100 = Array.from({ length: 1000 }).map((_, index) => index + 1);
const pxToRem = (px, base = 16) => `${px / base}rem`;

module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Noto Sans KR', 'sans-serif'],
                nanumpenscript: ['Nanum Pen Script', 'cursive']
            },
            fontSize: {
                h1: ['3rem', { lineHeight: 'normal', fontWeight: 700, letterSpacing: 'normal' }],
                h2: ['2.625rem', { lineHeight: 'normal', fontWeight: 700, letterSpacing: 'normal' }],
                h3: ['2.25rem', { lineHeight: 'normal', fontWeight: 700, letterSpacing: 'normal' }],
                h4: ['1.875rem', { lineHeight: 'normal', fontWeight: 700, letterSpacing: 'normal' }],
                h5: ['1.5rem', { lineHeight: 'normal', fontWeight: 700, letterSpacing: 'normal' }],
                h6: ['1.125rem', { lineHeight: 'normal', fontWeight: 700, letterSpacing: 'normal' }],
                b24: ['1.5rem', { lineHeight: 'normal', fontWeight: 400, letterSpacing: 'normal' }],
                b18: ['1.125rem', { lineHeight: 'normal', fontWeight: 400, letterSpacing: 'normal' }],
                b16: ['1rem', { lineHeight: 'normal', fontWeight: 400, letterSpacing: 'normal' }],
                b14: ['0.875rem', { lineHeight: 'normal', fontWeight: 400, letterSpacing: 'normal' }],
                b12: ['0.75rem', { lineHeight: 'normal', fontWeight: 400, letterSpacing: 'normal' }],
                c11: ['0.688rem', { lineHeight: 'normal', fontWeight: 400, letterSpacing: 'normal' }],
                c8: ['0.5rem', { lineHeight: 'normal', fontWeight: 400, letterSpacing: 'normal' }]
            },
            colors: {
                gray: {
                    50: '#fafafa',
                    100: '#efefef',
                    200: '#dcdcdc',
                    300: '#bdbdbd',
                    400: '#989898',
                    500: '#7c7c7c',
                    600: '#656565',
                    700: '#525252',
                    800: '#464646',
                    900: '#3d3d3d',
                    950: '#292929'
                },
                rust: {
                    50: '#fff8ec',
                    100: '#ffeed4',
                    200: '#ffdaa8',
                    300: '#ffbe70',
                    400: '#ff9736',
                    500: '#ff790f',
                    600: '#f05d06',
                    700: '#c74507',
                    800: '#a93a0f',
                    900: '#7f2e0f',
                    950: '#451505'
                },
                'buttered-rum': {
                    50: '#fdfde9',
                    100: '#fafbc6',
                    200: '#f9f68f',
                    300: '#f5ea4f',
                    400: '#f0d91f',
                    500: '#e0c112',
                    600: '#c1970d',
                    700: '#a9780f',
                    800: '#805713',
                    900: '#6d4716',
                    950: '#3f2509'
                },
                christi: {
                    50: '#f0fee7',
                    100: '#ddfccb',
                    200: '#bdf89e',
                    300: '#93f165',
                    400: '#6ee437',
                    500: '#4dca18',
                    600: '#3aa90f',
                    700: '#2c7b10',
                    800: '#276113',
                    900: '#235215',
                    950: '#0d2e05'
                },
                'blue-chill': {
                    50: '#f0fdfc',
                    100: '#cbfcf9',
                    200: '#97f8f3',
                    300: '#5bedeb',
                    400: '#2ad3d7',
                    500: '#0fa4a9',
                    600: '#0a9097',
                    700: '#0d7178',
                    800: '#0f5a60',
                    900: '#124a4f',
                    950: '#032b30'
                },
                'blue-gem': {
                    50: '#f5f2ff',
                    100: '#ede6ff',
                    200: '#ddd1ff',
                    300: '#c5acff',
                    400: '#aa7eff',
                    500: '#9249ff',
                    600: '#8724ff',
                    700: '#7913ee',
                    800: '#650fc8',
                    900: '#570fa9',
                    950: '#33066f'
                },
                'jazzberry-jam': {
                    50: '#fef1fa',
                    100: '#fde6f6',
                    200: '#feccef',
                    300: '#fea3e2',
                    400: '#fc6acc',
                    500: '#f63eb4',
                    600: '#e61c94',
                    700: '#c80e77',
                    800: '#a90f64',
                    900: '#8a1154',
                    950: '#55022f'
                }
            },
            screens: {
                mobile: '360px',
                tablet: '768px',
                desktop: '1280px',
                '4k': '1920px',
                'under-mobile': {
                    maxWidth: '360px'
                },
                'under-tablet': {
                    maxWidth: '768px'
                },
                'under-desktop': {
                    maxWidth: '1280px'
                },
                'under-4k': {
                    maxWidth: '1920px'
                }
            },
            spacing: {
                ...px100.reduce((acc, px) => {
                    acc[`${px}pxr`] = pxToRem(px);
                    return acc;
                }, {})
            },
            minHeight: {
                inherit: 'inherit',
                ...px100.reduce((acc, px) => {
                    acc[`${px}pxr`] = pxToRem(px);
                    return acc;
                }, {})
            },
            minWidth: {
                inherit: 'inherit',
                ...px100.reduce((acc, px) => {
                    acc[`${px}pxr`] = pxToRem(px);
                    return acc;
                }, {}),
                '1512pxr': pxToRem(1512)
            },
            lineHeight: {
                ...px100.reduce((acc, px) => {
                    acc[`${px}pxr`] = pxToRem(px);
                    return acc;
                }, {})
            },
            borderRadius: {
                '2.5xl': '1.25rem'
            },
            zIndex: {
                ...px100
            },
            gridTemplateColumns: {
                single: '0.8fr 2fr',
                double: '0.7fr 1fr 0.7fr 1fr'
            },
            strokeWidth: {
                3: '3px',
                4: '4px'
            },
            keyframes: {
                rotate: {
                    '0%': {
                        transform: 'rotate(0deg)'
                    },
                    '100%': {
                        transform: 'rotate(360deg)'
                    }
                },
                fadeIn: {
                    '0%': {
                        bottom: 0,
                        opacity: 0
                    },
                    '100%': {
                        bottom: 30,
                        opacity: 1
                    }
                },
                fadeOut: {
                    '0%': {
                        bottom: 30,
                        opacity: 1
                    },
                    '100%': {
                        bottom: 0,
                        opacity: 0
                    }
                }
            },
            animation: {
                'fade-in-out': 'fadeIn 0.5s, fadeOut 0.5s 4.5s',
                rotate: 'rotate 1s infinite linear'
            }
        }
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            addUtilities({
                '.bg-grid': {
                    'background-position': 'center',
                    'background-size': '20px 20px',
                    'background-image': 'linear-gradient(to right, #eee 1px, transparent 1px), linear-gradient(to bottom, #eee 1px, transparent 1px)'
                }
            });
        })
    ]
};
