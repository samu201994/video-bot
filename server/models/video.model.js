const mongoose = require('mongoose');

const VideoSchema = mongoose.Schema({
  agent_id: { type: String, required: true },
  question_text: { type: String, required: false },
  questionType: { type: String, required: true },
  video_path: { type: String, required: true },
  video_id: { type: String, required: true },
});

module.exports = mongoose.model('Video', VideoSchema);
