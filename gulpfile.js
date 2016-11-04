process.env.DISABLE_NOTIFIER = true;
const elixir = require('laravel-elixir');

require('laravel-elixir-vue');

elixir(mix => {
    mix.sass('app.scss', 'public/assets/css');

    mix.scripts([
        'ajax.js',
        'pjax.js',
        'dropdown.js',
        'sidebar.js',
        'hashtag.js',
        'init.js',
    ], 'public/assets/js/app.js');

    mix.browserSync({
        files: [
            'public/assets/css/*.css',
            'public/assets/js/*.js',
            'resources/views/**/*.blade.php',
            'app/**/*.php',
        ],
        proxy: 'juliarose.dev',
        logPrefix: 'BS',
        logConnections: false,
        injectChanges: true,
        reloadOnRestart: false,
        notify: false,
        online: false,
        open: false
    });
});
