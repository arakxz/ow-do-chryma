const Token = require('../Models/Token');
const User = require('../Models/User');

class HelloWorldMiddleware {
  async token (request, response, next) {
    const token = await Token.findOne({ value: request.header('Token') || null });

    if (token === null || token.unauthorized()) {
      return response.status(401).json({ error: 'Unauthorized'});
    }

    next();
  }

  async authentication(request, response, next) {
    const { body: { email, password } } = request;
    const user = await User.findOne({ email, password: User.hash(password) });

    if (user === null) {
      return response.status(401).json({ error: 'Unauthorized'});
    }

    next();
  }
}

module.exports = HelloWorldMiddleware;
