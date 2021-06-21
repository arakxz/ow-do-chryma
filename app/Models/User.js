const mongoose = require('mongoose');
const Hash = include('@model/Traits/Hash');

const schema = new mongoose.Schema({
  created_at: { type: Date, default: Date.now },
  email: { type: String, required: true },
  password: { type: String, required: true },
});


Hash(schema);


/**
 * Find or create a user
 *
 * @static
 * @async
 *
 * @param {Object} query
 *
 * @returns {Object}
 */
schema.statics.findOrCreate = async function(query) {
  let user = await this.findOne(query)
  if (user === null) {
    user = await this.create(query);
  }

  return user;
}

module.exports = mongoose.model('User', schema);
