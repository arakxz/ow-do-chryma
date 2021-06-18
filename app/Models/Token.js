const mongoose = require('mongoose');
const Hash = require('./Traits/Hash');

const schema = new mongoose.Schema({
  created_at: { type: Date, default: Date.now },
  value: { type: String, required: true },
});


Hash(schema);


/**
 * Hash
 *
 * @override
 *
 * @returns {string}
 */
 schema.statics.hash = function() {
  return schema.statics
    ._makeHash(new Date().getTime().toString());
}


/**
 * Validate if the token is not valid
 *
 * @returns {boolean}
 */
schema.methods.unauthorized = function() {
  return false;
};


module.exports = mongoose.model('Token', schema);
