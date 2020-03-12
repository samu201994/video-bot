const express = require('express');
const organisationController = require('../controllers/organisation.controller');

const router = express();
router.get('/organisations', organisationController.getOrganisations);

router.post('/organisation', organisationController.addOrganisation);

router.get('/organisation/:id', organisationController.getOrganisation);
router.put('/organisation/:id', organisationController.updateOrganisation);
router.delete('/organisation/:id', organisationController.deleteOrganisation);

module.exports = router;
