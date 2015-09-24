<?php

$app = require_once __DIR__.'/../src/app.php';

require __DIR__.'/../app/config/prod.php';
require __DIR__.'/../src/routes.php';

$app->run();

