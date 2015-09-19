<?php

// /src/MyApp/Controller/defaultController.php

namespace MyApp\Controller;

use Silex\Application;
use Symfony\Component\HttpFoundation\Response;

class DefaultController
{
    public function indexAction(Application $app)
    {
        return $app['twig']->render('index.twig', ['message' => 'regular start page']);
    }

    public function cachedAction(Application $app)
    {
        // Page will be cached and if it gets requested it will be served from the cache,
        // if the cached version is not older then the time-to-live limit given in seconds by s-maxage
        $response = new Response();
        $response->setContent($app['twig']->render('index.twig', ['message' => 'cached start page']));
        $response->setStatusCode(Response::HTTP_OK);
        $response->headers->set('Cache-Control','s-maxage=5');
        return $response;
    }
}

