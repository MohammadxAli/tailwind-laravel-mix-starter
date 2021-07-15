module.exports = {
    mode: "jit",
    purge: ["./resources/**/*.js", "./public/**/*.html"],
    theme: {
        container: (theme) => ({
            center: true,
            padding: theme("spacing.4"),
        }),
        extend: {},
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/line-clamp"),
        require("@tailwindcss/aspect-ratio"),
        require("tailwindcss-logical"),
    ],
};
