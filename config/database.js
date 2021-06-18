const Env = require('../start/container').service('Env');

module.exports = {
  connection: {
    host: Env.get('DB_HOST'),
    database: Env.get('DB_DATABASE')
  },

  options: {
    auth: {
      authSource: "admin"
    },
    user: Env.get('DB_USERNAME'),
    pass: Env.get('DB_PASSWORD'),
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};
