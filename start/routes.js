const router = require('express').Router();

const HelloWorldController = require('../app/Controllers/HelloWorldController');
const HelloWorldMiddleware = require('../app/Middleware/HelloWorldMiddleware');

router.get('/',
  function (request, response, next) {
      (new HelloWorldMiddleware()).token(request, response, next);
  },
  function (request, response) {
      (new HelloWorldController()).index(request, response);
  }
);

router.post('/token',
  function (request, response, next) {
    (new HelloWorldMiddleware()).authentication(request, response, next);
  },
  function (request, response) {
    (new HelloWorldController()).token(request, response);
  }
);

module.exports = router;
