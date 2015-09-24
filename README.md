
silex with boostrap niolerplate



// Cache HTTP
//$app->register(new Silex\Provider\HttpCacheServiceProvider());
//$app['http_cache.cache_dir'] = $app['cache.path'] . '/http';
//$app['http_cache.esi'] = null; // If your application doesn't use ESI, you can disable it to slightly improve the overall performance:


    public function cachedAction(Application $app)
    {
        // Page will be cached and if it gets requested it will be served from the cache,
        // if the cached version is not older then the time-to-live limit given in seconds by s-maxage
        $response = new Response();
        $response->setContent($app['twig']->render('index-cached.twig', ['message' => 'cached start page']));
        $response->setStatusCode(Response::HTTP_OK);
        $response->headers->set('Cache-Control','s-maxage=31104000');
        return $response;
    }