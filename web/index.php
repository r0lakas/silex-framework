<?php

$app = require_once __DIR__.'/../src/app.php';

require __DIR__.'/../app/config/prod.php';
require __DIR__.'/../src/routes.php';

if (isset($app['http_cache'])){
    $app['http_cache']->run();
}
else{
    $app->run();
}


