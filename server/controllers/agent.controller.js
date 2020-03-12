const Agent = require('../models/agent.model');

const getAgents = (req, res) => {
  Agent.find().exec((err, agents) => {
    if (err) {
      return res.json({ success: false, message: 'Some Error' });
    }
    return res.json({
      success: true,
      message: 'Agents fetched successfully',
      agents,
    });
  });
};

const addAgent = (req, res) => {
  const newAgent = new Agent(req.body);
  newAgent.save((err, agent) => {
    if (err) {
      return res.json({ success: false, message: 'Some Error' });
    }
    return res.json({
      success: true,
      message: 'Agent added successfully',
      agent,
    });
  });
};

const updateAgent = (req, res) => {
  Agent.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, agent) => {
      if (err) {
        return res.json({ success: false, message: 'Some Error', error: err });
      }
      return res.json({
        success: true,
        message: 'Updated successfully',
        agent,
      });
    },
  );
};

const getAgent = (req, res) => {
  Agent.find({ _id: req.params.id }).exec((err, agent) => {
    if (err) {
      return res.json({ success: false, message: 'Some Error' });
    }
    if (Agent.length) {
      return res.json({
        success: true,
        message: 'Agent fetched by id successfully',
        agent,
      });
    }
    return res.json({
      success: false,
      message: 'Agent with the given id not found',
    });
  });
};

const deleteAgent = (req, res) => {
  Agent.findByIdAndRemove(req.params.id, (err, agent) => {
    if (err) {
      return res.json({ success: false, message: 'Some Error' });
    }
    return res.json({
      success: true,
      message: `${agent.agent_name} deleted successfully`,
    });
  });
};

module.exports = {
  getAgents,
  addAgent,
  updateAgent,
  deleteAgent,
  getAgent,
};
