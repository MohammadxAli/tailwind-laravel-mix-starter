/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */

module.exports = {
    content: ["./resources/js/**/*.js", "./public/index.html"],
    theme: {
        container: (theme) => ({
            center: true,
            padding: theme("spacing.4"),
        }),
    },
    plugins: [
        // require("@tailwindcss/typography"),
        // require("@tailwindcss/forms"),
        require("@tailwindcss/line-clamp"),
        require("@tailwindcss/aspect-ratio"),
        require("tailwindcss-logical"),
    ],
};
