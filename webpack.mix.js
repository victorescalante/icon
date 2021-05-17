let mix = require('laravel-mix');
mix.copy('node_modules/bootstrap/dist/css/bootstrap.css', 'dist/bootstrap.css')
mix.sass('src/app.scss', 'dist/app.1.css');
