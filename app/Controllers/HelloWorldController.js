const Token = require('../Models/Token');

class HelloWorldController {
  async index(request, response) {
    response.status(200).json({ data: 'Ramón masca la prieta.' })
  }

  async token(request, response) {
    try {
      const token = new Token({ value: Token.hash() });
      await token.save();

      response.status(201).json({ data: { token: token.value} });
    } catch (error) {
      response.status(500).json({ data: 'Error al generar un token' });
    }
  }
}

module.exports = HelloWorldController;
