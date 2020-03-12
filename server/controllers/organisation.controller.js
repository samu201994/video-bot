const Organisation = require('../models/organisation.model');

const getOrganisations = (req, res) => {
  Organisation.find().exec((err, organisations) => {
    if (err) {
      return res.json({ success: false, message: 'Some Error' });
    }
    return res.json({
      success: true,
      message: 'Organisations fetched successfully',
      organisations,
    });
  });
};

const addOrganisation = (req, res) => {
  const newOrganisation = new Organisation(req.body);
  newOrganisation.save((err, organisation) => {
    if (err) {
      return res.json({ success: false, message: 'Some Error' });
    }
    return res.json({
      success: true,
      message: 'Organisation added successfully',
      organisation,
    });
  });
};

const updateOrganisation = (req, res) => {
  Organisation.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, organisation) => {
      if (err) {
        return res.json({ success: false, message: 'Some Error', error: err });
      }
      return res.json({
        success: true,
        message: 'Updated successfully',
        organisation,
      });
    },
  );
};

const getOrganisation = (req, res) => {
  Organisation.find({ _id: req.params.id }).exec((err, organisation) => {
    if (err) {
      return res.json({ success: false, message: 'Some Error' });
    }
    if (Organisation.length) {
      return res.json({
        success: true,
        message: 'Organisation fetched by id successfully',
        organisation,
      });
    }
    return res.json({
      success: false,
      message: 'Organisation with the given id not found',
    });
  });
};

const deleteOrganisation = (req, res) => {
  Organisation.findByIdAndRemove(req.params.id, (err, organisation) => {
    if (err) {
      return res.json({ success: false, message: 'Some Error' });
    }
    return res.json({
      success: true,
      message: `${organisation.org_name} deleted successfully`,
    });
  });
};

module.exports = {
  getOrganisations,
  addOrganisation,
  updateOrganisation,
  deleteOrganisation,
  getOrganisation,
};
