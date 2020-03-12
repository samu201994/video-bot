const mongoose = require('mongoose');

const OrganisationSchema = mongoose.Schema({
  org_name: { type: String, required: true },
});

module.exports = mongoose.model('Organisation', OrganisationSchema);
