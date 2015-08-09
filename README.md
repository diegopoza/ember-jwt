# ember-webtoken sample

This is a very simple Ember 2.0 application that uses JSON Web Tokens (JWT) to authenticate to a protected API.

To learn how this example was built, step by step, check out  [the doc directory](https://github.com/diegopoza/ember-jwt/tree/master/doc).

##Running it
You must have ember-cli installed to make the solution work. You can install it by running:

````
npm install -g ember-cli
````
After that, just clone this repository, browse to **ember2app** and run:

````
npm install
````

Then:

````
bower install
````
And finally:

````
ember serve.
````

For the application to work properly, you must also get and run Auth0's  
[NodeJS JWT Authentication sample](https://github.com/auth0/nodejs-jwt-authentication-sample), which will act as the JWT issuer and also provides the protected API we will call.
