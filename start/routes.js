const router = require('express').Router();

const HelloWorldController = include('@controller/HelloWorldController');
const HelloWorldMiddleware = include('@middleware/HelloWorldMiddleware');

router.get('/',
  function (request, response, next) {
    (new HelloWorldMiddleware()).token(request, response, next);
  },
  function (request, response) {
    (new HelloWorldController()).index(request, response);
  }
);

router.post('/start',
  function (request, response) {
    (new HelloWorldController()).start(request, response);
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
