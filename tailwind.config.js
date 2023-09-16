/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./layout/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
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
