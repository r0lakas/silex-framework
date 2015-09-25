<?php

// /app/app.php

require_once __DIR__.'/../vendor/autoload.php';

$app = new Silex\Application();

//----------------------------------------------------------
// TWIG files path.
$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__.'/MyApp/Resources/views/',
));

// TWIG assets path function.
$app['twig'] = $app->share($app->extend('twig', function($twig, $app) {
    $twig->addFunction(new \Twig_SimpleFunction('asset', function ($asset) {
        return sprintf('http://localhost/assets/%s', ltrim($asset, '/'));
    }));
    return $twig;
}));

//----------------------------------------------------------
// https://github.com/Seldaek/monolog/blob/master/doc/01-usage.md
// Monolog log.
$app->register(new Silex\Provider\MonologServiceProvider(), array(
    'monolog.logfile' => __DIR__.'/../app/log/errors.log',
    'monolog.name'    => 'app',
    'monolog.level'   => 300 // = Logger::WARNING. Available: "DEBUG", "INFO", "WARNING", "ERROR"
));

return $app;
