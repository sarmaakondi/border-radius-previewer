/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./src/styles/globals.css",
    ],
    theme: {
        extend: {
            spacing: {
                80: "20rem",
                100: "25rem",
                120: "30rem",
                140: "35rem",
                160: "40rem",
                180: "45rem",
                200: "50rem",
            },
        },
    },
    plugins: [],
};
