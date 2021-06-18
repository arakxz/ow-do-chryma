const mongoose = require('mongoose');
const Hash = require('./Traits/Hash');

const schema = new mongoose.Schema({
  created_at: { type: Date, default: Date.now },
  email: { type: String, required: true },
  password: { type: String, required: true },
});


Hash(schema);


module.exports = mongoose.model('User', schema);
