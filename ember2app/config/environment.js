/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'my-app',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self' http://netdna.bootstrapcdn.com/bootstrap/3.0.0/fonts/", 
      'connect-src': "'self' http://localhost:3001", // Allow data (ajax/websocket) from http://localhost:3001
      'img-src': "'self'",
      'style-src': "'self' 'unsafe-inline' http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/", // Allow inline styles 
      'media-src': "'self'"
    }
  };

  ENV['simple-auth'] = {
    store: 'simple-auth-session-store:local-storage',
    authorizer: 'authorizer:custom',
    routeAfterAuthentication: '/protected'
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
