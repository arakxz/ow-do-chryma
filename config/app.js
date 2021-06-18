const Env = require('../start/container').service('Env');

module.exports = {
  port: Env.get('PORT'),
};
