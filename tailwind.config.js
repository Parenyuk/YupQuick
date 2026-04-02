/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
    presets: [require('nativewind/preset')],
    theme: {
        extend: {
            colors: {
                'yellow-primary': '#F5CB58',
                'yellow-second': '#F3E9B5',
                'orange-primary': '#E95322',
                'orange-second': '#FFDECF',
                'font-primary': '#391713',
                'font-second': '#F8F8F8',
            },
        },
    },
    plugins: [],
};
