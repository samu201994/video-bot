const mongoose = require('mongoose');

const AgentSchema = mongoose.Schema({
  agent_name: { type: String, required: true },
  org_id: { type: String, required: true },
});

module.exports = mongoose.model('Agent', AgentSchema);

