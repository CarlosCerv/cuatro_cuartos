/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./views/**/*.ejs"],
    theme: {
        extend: {
            colors: {
                sand: '#E8E4DD',
                charcoal: '#2C2C2C',
                oak: '#8C7C6D',
            },
            fontFamily: {
                playfair: ['"Playfair Display"', 'serif'],
                inter: ['"Inter"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
