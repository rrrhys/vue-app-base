
var elixir = require('laravel-elixir');

elixir(function(mix) {


    mix.browserify('./js/app.dev.js', './js/app.js');
});
