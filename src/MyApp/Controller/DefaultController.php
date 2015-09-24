<?php

// /src/MyApp/Controller/defaultController.php

namespace MyApp\Controller;

use Silex\Application;

class DefaultController
{
    public function indexAction(Application $app)
    {
        return $app['twig']->render('index.twig', ['message' => 'regular start page']);
    }
}

