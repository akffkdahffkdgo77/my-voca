/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                nanumpenscript: ['Nanum Pen Script', 'cursive']
            },
            fontSize: {
                h1: ['48px', { lineHeight: '52px', fontWeight: 700, letterSpacing: '-0.96px' }],
                h2: ['42px', { lineHeight: '46px', fontWeight: 700, letterSpacing: '-0.84px' }],
                h3: ['36px', { lineHeight: '42px', fontWeight: 700, letterSpacing: '-0.72px' }],
                h4: ['30px', { lineHeight: '36px', fontWeight: 700, letterSpacing: '-0.60px' }],
                h5: ['24px', { lineHeight: '30px', fontWeight: 700, letterSpacing: '-0.48px' }],
                h6: ['18px', { lineHeight: '24px', fontWeight: 700, letterSpacing: '-0.36px' }],
                'b24-m': ['24px', { lineHeight: '28px', fontWeight: 500, letterSpacing: '-0.48px' }],
                'b24-r': ['24px', { lineHeight: '28px', fontWeight: 400, letterSpacing: '-0.48px' }]
            },
            colors: {
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
            keyframes: {
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
                'fade-in-out': 'fadeIn 0.5s, fadeOut 0.5s 4.5s'
            }
        }
    },
    plugins: []
};
