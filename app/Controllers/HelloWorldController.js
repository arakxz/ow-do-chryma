const Env = include('@container').service('Env');
const Token = include('@model/Token');
const User = include('@model/User');

class HelloWorldController {
  async index(request, response) {
    response.status(200)
      .json({
        data: {
          chryma: Env.get('CHRYMA_APP_PORT'),
          hostname: Env.get('HOSTNAME'),
          kubernetes: Env.get('CHRYMA_APP_PORT'),
        },
      })
  }

  async start(request, response) {
    try {
      const { body: { email, password } } = request;
      const user = await User.findOrCreate({ email, password: User.hash(password) });

      response.status(201).json({ data: { user: user.email } });
    } catch (error) {
      console.log(error);
      response.status(500).json({ data: 'Error al crear el usuario' });
    }
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
