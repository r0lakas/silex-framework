<?php

// /src/controllers.php

//----------------------------------------------------------
// ROUTES:
$app->get('/', 'MyApp\Controller\DefaultController::indexAction');
$app->get('/cached', 'MyApp\Controller\DefaultController::cachedAction');