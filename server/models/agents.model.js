const mongoose = require('mongoose');

const AgentsSchema = mongoose.Schema({
  name: { type: String, required: true },
  organisationId: { type: String, required: true },
  videos: { type: Array, required: false, default: [] },
});

module.exports = mongoose.model('Agents', AgentsSchema);
