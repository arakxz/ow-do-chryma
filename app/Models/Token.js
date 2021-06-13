const crypto = require('crypto');
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  created_at: { type: Date, default: Date.now },
  value: { type: String, required: true },
});

schema.methods.unauthorized = function() {
  return false;
};


/**
 * Hash
 * 
 * @returns {string}
 */
schema.statics.hash = function() {
  return schema.statics
    ._makeHash(new Date().getTime().toString());
}


/**
 * Make hash
 * 
 * @private
 * 
 * @param {string} text 
 * 
 * @returns {string}
 */
schema.statics._makeHash = function(text) {
  const hash = crypto
    .createHmac('sha256', 'secret').update(text)
    .digest('hex');

  return hash;
}


module.exports = mongoose.model('Token', schema);
