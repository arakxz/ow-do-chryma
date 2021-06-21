const { Env, Dictionary } = require('@arakxz/npm-kordra');
const path = require('path');
const ioc = require('../start/container');


global.include = function (source) {
  const split = source.split(path.sep);
  const basename = split.shift();

  split.unshift(
    ioc.service('IncludeAlias').get(basename) || basename
  );

  return require(split.join(path.sep))
};


ioc.service('Env', (/* ioc */) => new Env());
ioc.service('IncludeAlias', (/* ioc */) => {
  const alias = new Dictionary();
  const root = path.resolve(__dirname, '..');

  return alias
    .set('@root', root,)
    .set('@config', `${root}/config`)
    .set('@container', `${root}/start/container`)
    .set('@controller', `${root}/app/Controllers`)
    .set('@model', `${root}/app/Models`)
    .set('@middleware', `${root}/app/Middleware`);
});
