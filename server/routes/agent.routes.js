const express = require('express');
const agentController = require('../controllers/agent.controller');

const router = express();
router.get('/agents', agentController.getAgents);

router.post('/agent', agentController.addAgent);

router.get('/agent/:id', agentController.getAgent);
router.put('/agent/:id', agentController.updateAgent);
router.delete('/agent/:id', agentController.deleteAgent);

module.exports = router;
