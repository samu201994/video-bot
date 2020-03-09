const mongoose = require('mongoose');

const OrganisationSchema = mongoose.Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model('Organisation', OrganisationSchema);
