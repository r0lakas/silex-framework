<?php

// /app/config/prod.php

$app['cache.path'] = __DIR__ . '/../cache';

// Cache HTTP
$app->register(new Silex\Provider\HttpCacheServiceProvider());
$app['http_cache.cache_dir'] = $app['cache.path'] . '/http';

// Cache TWIG templates.
$app['twig.options'] = [
    'cache' => $app['cache.path'] . '/twig',
    'strict_variables' => true // If a variable does not exist (from controller args), it wil be null on false, Twig will throw an error on true
];

