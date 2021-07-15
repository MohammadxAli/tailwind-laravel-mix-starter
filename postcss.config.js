module.exports = {
    plugins: [
        require("tailwindcss")({ config: "./tailwind.config.js" }),
        require("postcss-preset-env"),
        require("autoprefixer"),
        require("cssnano")({ preset: "default" }),
    ],
};
