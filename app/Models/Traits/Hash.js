const crypto = require('crypto');

const schema = {
  /**
   * Hash
   *
   * @static
   *
   * @param {string} text
   *
   * @returns {string}
   */
  hash(text) {
    return schema._makeHash(text);
  },


  /**
   * Make hash
   *
   * @private
   * @static
   *
   * @param {string} text
   *
   * @returns {string}
   */
  _makeHash(text) {
    const hash = crypto
      .createHmac('sha256', 'secret').update(text)
      .digest('hex');

    return hash;
  },
}

module.exports = function (model) {
  Object.assign(model.statics, schema);
};
