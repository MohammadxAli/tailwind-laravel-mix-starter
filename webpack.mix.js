const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.autoload({
    jquery: ["$", "window.jQuery", "jQuery"],
});

mix.js("resources/js/main.js", "public/assets/js/bundle.js")
    .sass("resources/scss/main.scss", "assets/css/styles.css")
    .postCss("resources/css/tailwind.css", "assets/css/tailwind.css", [
        require("tailwindcss"),
        require("postcss-preset-env"),
    ])
    .browserSync({
        watch: true,
        server: "public",
        files: "public/**/*.*",
        notify: false,
    })
    .disableNotifications()
    .setPublicPath("public")
    .sourceMaps();
