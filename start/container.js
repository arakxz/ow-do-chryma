const { Env, Dictionary } = require('@arakxz/npm-kordra');

class IocDictionary extends Dictionary {
  set(key, callback) {
    if (!this.has(key)) {
      super.set(key, callback(this));
    }

    return this;
  }
}

const container = new IocDictionary();
container.set('Env', function (item) { return new Env(); });

module.exports = {
  service(key, callback = null) {
    return callback === null
      ? container.get(key)
      : container.set(key, callback);
  },
}
