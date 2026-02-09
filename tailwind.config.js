/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./views/**/*.ejs"],
    theme: {
        extend: {
            colors: {
                'gallery-white': '#FFFFFF',
                'gallery-dark': '#2C2D33',
                'gallery-footer': '#303030',
                'gallery-gray': '#F5F5F5',
            },
            fontFamily: {
                sans: ['"Mulish"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
