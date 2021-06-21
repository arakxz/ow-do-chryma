const Env = include('@container').service('Env');

module.exports = {
  port: Env.get('PORT'),
};
