const Token = require('../Models/Token');

class HelloWorldMiddleware {
  async handle (request, response, next) {
    const token = await Token.findOne({ value: request.header('Token') || null });

    if (token === null || token.unauthorized()) {
      return response.status(401).json({ error: 'Unauthorized'});
    }

    next();
  }
}

module.exports = HelloWorldMiddleware;