const router = require('express').Router();

const HelloWorldController = require('../app/Controllers/HelloWorldController');
const HelloWorldMiddleware = require('../app/Middleware/HelloWorldMiddleware');

router.get('/',
  async function (request, response, next) {
      const helloWorld = new HelloWorldMiddleware();
      await helloWorld.handle(request, response, next);
  },
  async function (request, response) {
      const helloWorld = new HelloWorldController();
      await helloWorld.index(request, response);
  }
);

router.post('/token',
  async function (request, response) {
    const helloWorld = new HelloWorldController();
    await helloWorld.token(request, response);
  }
);

module.exports = router;